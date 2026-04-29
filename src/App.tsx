import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useGlobalMagneticHover, useMagneticHover } from "@/hooks/useInteractiveEffects";
import { initPerformanceOptimizations } from "./utils/performance";
import "./utils/mobileDebug"; // Import mobile debugging utilities
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TestPage from "./pages/TestPage";

const queryClient = new QueryClient();

// Component to apply global magnetic hover effect
const GlobalEffects = () => {
  useGlobalMagneticHover({
    maxTranslatePx: 12,
    intensity: 1.6,
    damping: 0.08,
    attractionRadius: 1.8,
    magneticStrength: 2.2
  });
  // Apply a softer magnetic effect to opted elements
  useMagneticHover('.magnetic-soft', {
    maxTranslatePx: 6,
    intensity: 0.9,
    damping: 0.18,
    attractionRadius: 1.4,
    magneticStrength: 1.2,
  });
  
  return null;
};

const App = () => {
  // Initialize performance optimizations
  useEffect(() => {
    const cleanup = initPerformanceOptimizations();
    return cleanup; // Cleanup on unmount
  }, []);

  // Create router with v7 future flags to silence warnings and improve transitions
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "/test", element: <TestPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <GlobalEffects />
            <Toaster />
            <Sonner />
            <RouterProvider 
              router={router}
              future={{
                v7_startTransition: true,
              }}
            />
          </TooltipProvider>
        </ThemeProvider>
      </ReactLenis>
    </QueryClientProvider>
  );
};

export default App;