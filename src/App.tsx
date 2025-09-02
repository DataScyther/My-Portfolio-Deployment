import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useGlobalMagneticHover } from "@/hooks/useInteractiveEffects";
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
  
  return null;
};

const App = () => {
  // Initialize performance optimizations
  useEffect(() => {
    const cleanup = initPerformanceOptimizations();
    return cleanup; // Cleanup on unmount
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <GlobalEffects />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/test" element={<TestPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;