import React from 'react';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiFramer } from 'react-icons/si';

const LogoLoopDemo: React.FC = () => {
  // Technology logos using react-icons
  const techLogos = [
    { node: <SiReact size={48} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={48} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={48} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={48} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVite size={48} />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiFramer size={48} />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  ];

  // Alternative with image sources (you would need to add these images to your public folder)
  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Technology Stack</h2>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Tech Logos Carousel</h3>
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Image Logos Carousel</h3>
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="right"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Company partners"
          />
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">How to use LogoLoop</h3>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto">
{`import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function App() {
  return (
    <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}`}
        </pre>
      </div>
    </div>
  );
};

export default LogoLoopDemo;