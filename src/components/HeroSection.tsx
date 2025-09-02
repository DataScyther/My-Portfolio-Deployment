import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useGlobalMagneticHover } from "@/hooks/useInteractiveEffects";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";
import { useFrameLoop } from "@/utils/animation";
import { downloadResume } from "@/utils/resume";
import GradientText from "@/components/GradientText";

const HeroSection = () => {
  const ref = useScrollReveal();
  const isMobile = useIsMobile();
  const [isLandscape, setIsLandscape] = useState(false);
  
  // Mobile-optimized role animations with enhanced responsiveness
  const roles = ["Future Data Scientist", "AI/ML Expert", "Cloud Enthusiast"];
  const { currentText } = useTypingAnimation(
    roles, 
    isMobile ? 100 : 150, // Even faster on mobile for better engagement
    isMobile ? 60 : 100,  // Shorter pauses on mobile
    isMobile ? 600 : 900  // Quicker transitions on mobile
  );

  // Detect orientation changes for mobile layout adjustments
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerHeight < window.innerWidth && window.innerHeight < 600);
    };
    
    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Mobile-optimized parallax effect (reduced complexity on mobile)
  useFrameLoop(() => {
    if (isMobile) return; // Disable parallax on mobile for better performance
    
    const scrollY = window.scrollY;
    parallaxRefs.current.forEach((el) => {
      if (el) {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.1');
        const y = scrollY * speed;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    });
  }, [isMobile]);
  
  // Add smooth fade-in effect on mount
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('smooth-fade-in');
    }
  }, []);

  // Global magnetic hover effect for all gradient buttons
  useGlobalMagneticHover({ 
    maxTranslatePx: isMobile ? 6 : 15,        // Perfect translation range
    intensity: isMobile ? 1.2 : 2.0,         // Enhanced magnetic pull strength
    damping: isMobile ? 0.15 : 0.08,         // Medium-speed balanced damping
    attractionRadius: isMobile ? 1.5 : 2.2,  // Enhanced magnetic field radius
    magneticStrength: isMobile ? 1.8 : 2.5   // Core magnetic force multiplier
  });

  return (
    <section id="hero" ref={ref} className={`
        relative px-4 scroll-reveal overflow-hidden
        ${isLandscape 
          ? 'pt-14 pb-8' // Landscape: reduced top padding for tight spacing
          : isMobile 
            ? 'pt-16 pb-12' // Portrait mobile: proper nav clearance
            : 'py-16 sm:py-20' // Desktop: standard padding
        }
        ${isMobile ? 'pt-safe-area-inset-top pb-safe-area-inset-bottom min-h-[90vh]' : 'min-h-[85vh]'}
        flex items-center justify-center
      `}
    >
      {/* Background Effects - section scoped for performance */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 dark:via-muted/5 to-background" />
      </div>
      
      {/* Conditional gradient orbs - simplified on mobile */}
      {!isMobile && (
        <>
          <div
            ref={el => parallaxRefs.current[0] = el}
            data-parallax-speed="0.05"
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-purple/15 dark:bg-gradient-purple/10 rounded-full blur-[72px] md:blur-[96px] motion-reduce:animate-none animate-pulse -z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            ref={el => parallaxRefs.current[1] = el}
            data-parallax-speed="0.1"
            className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-pink/15 dark:bg-gradient-pink/10 rounded-full blur-[80px] md:blur-[110px] motion-reduce:animate-none animate-pulse delay-1000 -z-10 pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}
      
      {/* Mobile-friendly gradient orbs */}
      {isMobile && (
        <>
          <div className="absolute top-1/3 left-1/4 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-purple/12 dark:bg-gradient-purple/8 rounded-full blur-[48px] sm:blur-[60px] -z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-pink/12 dark:bg-gradient-pink/8 rounded-full blur-[56px] sm:blur-[72px] -z-10 pointer-events-none" aria-hidden="true" />
        </>
      )}
      
      <div ref={heroRef} className={`relative z-10 max-w-6xl mx-auto text-center w-full ${
        isLandscape
          ? 'mt-8' // Landscape: optimized spacing
          : isMobile
            ? 'mt-10' // Portrait mobile: proper nav clearance
            : 'mt-0' // Desktop: no additional margin needed
      }`}>
        {/* Hero entrance animation */}
        <div id="hero-anim-anchor" className="opacity-0" />
        
        {/* Hero Content Container - tighter vertical rhythm */}
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-6 md:space-y-6">
          
          {/* Mobile-Optimized Main Heading with Enhanced Fluid Typography */}
          <div className="text-center" id="hero-title">
            <h1 className="
              text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl
              font-light leading-tight tracking-tight
              mb-1
              will-change-transform
            ">
              Hello, I'm{" "}
              <GradientText className="font-bold inline align-baseline ml-0.5 sm:ml-1 text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl will-change-transform shiny">
                Nishant Kumar
              </GradientText>
            </h1>
          </div>
          
          {/* Animated Tagline - remove fixed heights for natural flow */}
          <div className="flex flex-col items-center justify-center text-center" id="hero-tagline">
            <h2 className="
              text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl
              font-bold leading-tight
              mb-1
              will-change-transform
            ">
              <GradientText className="inline break-words align-baseline will-change-transform shiny">
                {currentText}
                <span className="animate-pulse opacity-75">|</span>
              </GradientText>
            </h2>
            <p className="
              text-fluid-base sm:text-fluid-lg md:text-fluid-xl
              max-w-4xl mx-auto leading-relaxed px-4 text-foreground mt-1
              will-change-transform transition-opacity duration-300
            ">
              Generative AI & Cloud (AWS | GCP) | Python • AI/ML • LLMs • MLOps
            </p>
          </div>
          
          {/* Mobile-Optimized CTA Buttons with Enhanced Touch-Friendly Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-2 sm:mt-3" id="hero-ctas">
            <Button 
              size="lg" 
              className="
                gradient-button transition-all duration-300
                text-fluid-lg font-semibold
                px-8 py-4
                rounded-full w-full sm:w-auto
                min-h-[52px] touch-manipulation
                hover:scale-105 active:scale-95
                shadow-lg hover:shadow-xl
                will-change-transform
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2
                active:shadow-md active:translate-y-0.5
              " 
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="
                text-fluid-lg font-semibold
                px-8 py-4 magnetic-soft
                rounded-full w-full sm:w-auto
                min-h-[52px] touch-manipulation
                border-gradient-purple/30 hover:border-gradient-purple/60
                hover:bg-gradient-purple/10 transition-all duration-300
                hover:scale-105 active:scale-95
                shadow-md hover:shadow-lg
                backdrop-blur-sm will-change-transform
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2
                active:shadow-sm active:translate-y-0.5
                text-foreground dark:text-white hover:text-foreground dark:hover:text-white
              " 
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="text-current">Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;