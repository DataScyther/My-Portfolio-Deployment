import React from 'react';
import PillNav from './PillNav';
import logo from '@/assets/logo.svg';

const PillNavExample: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="relative">
      <PillNav
        logo={logo}
        logoAlt="Nishant Kumar Logo"
        items={navItems}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      
      {/* Example content to show the navigation in context */}
      <div className="pt-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Portfolio with PillNav</h1>
        <p className="text-lg mb-6">
          This is an example of how the PillNav component can be integrated into your portfolio.
          The navigation features smooth GSAP animations for hover effects and mobile menu transitions.
        </p>
      </div>
    </div>
  );
};

export default PillNavExample;