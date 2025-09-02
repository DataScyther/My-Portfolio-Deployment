import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ImprovedLogoLoopShowcase from '@/components/ImprovedLogoLoopShowcase';

const ImprovedLogoLoopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            LogoLoop Showcase
          </h1>
          <Link to="/">
            <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>
      <main>
        <ImprovedLogoLoopShowcase />
      </main>
    </div>
  );
};

export default ImprovedLogoLoopPage;