import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollProgressOptions {
  throttleMs?: number;
  includeUserActivity?: boolean;
}

interface ScrollProgress {
  progress: number;
  isScrolling: boolean;
  direction: 'up' | 'down' | null;
  velocity: number;
}

export const useScrollProgress = (options: ScrollProgressOptions = {}): ScrollProgress => {
  const { throttleMs = 16, includeUserActivity = false } = options;
  
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [velocity, setVelocity] = useState(0);
  
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);
  const scrollTimeout = useRef<number>();
  const rafId = useRef<number>();
  const isThrottled = useRef(false);
  const progressRef = useRef(0);

  // Calculate scroll progress with clean simplicity
  const calculateProgress = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) return 0;
    
    // Clean, direct progress calculation
    const rawProgress = Math.max(0, Math.min(100, (scrollTop / docHeight) * 100));
    // One decimal precision
    return Math.round(rawProgress * 10) / 10;
  }, []);

  // Calculate scroll velocity and direction
  const updateScrollMetrics = useCallback((currentScrollY: number) => {
    const now = performance.now();
    const deltaY = currentScrollY - lastScrollY.current;
    const deltaTime = now - lastTimestamp.current;
    
    if (deltaTime > 0) {
      const currentVelocity = Math.abs(deltaY / deltaTime);
      setVelocity(currentVelocity);
      
      if (Math.abs(deltaY) > 1) { // Ignore micro-movements
        setDirection(deltaY > 0 ? 'down' : 'up');
      }
    }
    
    lastScrollY.current = currentScrollY;
    lastTimestamp.current = now;
  }, []);

  // Optimized scroll handler with clean performance
  const handleScroll = useCallback(() => {
    if (isThrottled.current) return;
    
    isThrottled.current = true;
    
    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const newProgress = calculateProgress();
      // Only commit state update if change is meaningful to avoid thrash
      if (Math.abs(newProgress - progressRef.current) >= 0.2) {
        progressRef.current = newProgress;
        setProgress(newProgress);
      }
      setIsScrolling(true);
      updateScrollMetrics(currentScrollY);
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set scrolling to false after scroll stops
      scrollTimeout.current = window.setTimeout(() => {
        setIsScrolling(false);
        setDirection(null);
        setVelocity(0);
      }, 90);
      
      // Reset throttle
      window.setTimeout(() => {
        isThrottled.current = false;
      }, throttleMs);
    });
  }, [calculateProgress, updateScrollMetrics, throttleMs]);

  // Handle user activity (mouse movement, clicks, etc.)
  const handleUserActivity = useCallback(() => {
    if (!includeUserActivity) return;
    
    // Trigger a subtle progress update on user interaction
    const newProgress = calculateProgress();
    setProgress(newProgress);
  }, [calculateProgress, includeUserActivity]);

  useEffect(() => {
    // Initial progress calculation
    const initial = calculateProgress();
    progressRef.current = initial;
    setProgress(initial);
    lastScrollY.current = window.pageYOffset || document.documentElement.scrollTop;
    lastTimestamp.current = performance.now();

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add user activity listeners if enabled
    if (includeUserActivity) {
      window.addEventListener('mousemove', handleUserActivity, { passive: true });
      window.addEventListener('click', handleUserActivity, { passive: true });
      window.addEventListener('keydown', handleUserActivity, { passive: true });
    }

    // Handle resize events
    const handleResize = () => {
      setProgress(calculateProgress());
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (includeUserActivity) {
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('click', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
      }
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll, handleUserActivity, calculateProgress, includeUserActivity]);

  return {
    progress,
    isScrolling,
    direction,
    velocity
  };
};

export default useScrollProgress;