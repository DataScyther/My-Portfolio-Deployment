import React, { useState } from 'react';
import LogoLoop from './LogoLoop';
import { SiPython, SiJavascript, SiReact, SiAmazonwebservices, SiGooglecloud, SiDocker, SiVercel, SiGithub, SiTypescript, SiNextdotjs, SiOpenai } from 'react-icons/si';

const TestComponent: React.FC = () => {
  const [speed, setSpeed] = useState<number>(100);
  const [logoHeight, setLogoHeight] = useState<number>(60);
  const [gap, setGap] = useState<number>(60);
  const [pauseOnHover, setPauseOnHover] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(true);
  const [scaleOnHover, setScaleOnHover] = useState<boolean>(true);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // Technology logos for the carousel
  const techLogos = [
    { node: <SiPython size={logoHeight} />, title: "Python", href: "https://python.org" },
    { node: <SiJavascript size={logoHeight} />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiReact size={logoHeight} />, title: "React", href: "https://react.dev" },
    { node: <SiAmazonwebservices size={logoHeight} />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiGooglecloud size={logoHeight} />, title: "GCP", href: "https://cloud.google.com" },
    { node: <SiDocker size={logoHeight} />, title: "Docker", href: "https://docker.com" },
    { node: <SiVercel size={logoHeight} />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGithub size={logoHeight} />, title: "GitHub", href: "https://github.com" },
    { node: <SiTypescript size={logoHeight} />, title: "TypeScript", href: "https://typescriptlang.org" },
    { node: <SiNextdotjs size={logoHeight} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiOpenai size={logoHeight} />, title: "Machine Learning", href: "https://openai.com" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Enhanced LogoLoop Showcase
      </h1>
      
      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Customization Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Speed: {speed}px/s</label>
            <input
              type="range"
              min="20"
              max="200"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Logo Height: {logoHeight}px</label>
            <input
              type="range"
              min="30"
              max="100"
              value={logoHeight}
              onChange={(e) => setLogoHeight(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Gap: {gap}px</label>
            <input
              type="range"
              min="20"
              max="100"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={pauseOnHover}
                onChange={(e) => setPauseOnHover(e.target.checked)}
                className="mr-2"
              />
              Pause on Hover
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={fadeOut}
                onChange={(e) => setFadeOut(e.target.checked)}
                className="mr-2"
              />
              Fade Out
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={scaleOnHover}
                onChange={(e) => setScaleOnHover(e.target.checked)}
                className="mr-2"
              />
              Scale on Hover
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Direction</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="direction"
                  value="left"
                  checked={direction === 'left'}
                  onChange={() => setDirection('left')}
                  className="mr-2"
                />
                Left
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="direction"
                  value="right"
                  checked={direction === 'right'}
                  onChange={() => setDirection('right')}
                  className="mr-2"
                />
                Right
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* LogoLoop Showcase */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Logo Carousel</h2>
        <div className="h-32 flex items-center">
          <LogoLoop
            logos={techLogos}
            speed={speed}
            direction={direction}
            logoHeight={logoHeight}
            gap={gap}
            pauseOnHover={pauseOnHover}
            fadeOut={fadeOut}
            scaleOnHover={scaleOnHover}
            fadeOutColor="var(--background)"
            ariaLabel="Technology stack"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
        <p>Interactive LogoLoop component with customizable properties</p>
      </div>
    </div>
  );
};

export default TestComponent;