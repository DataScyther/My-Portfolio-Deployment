import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiFramer, 
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiGooglecloud
} from 'react-icons/si';

const ImprovedLogoLoopShowcase: React.FC = () => {
  // Custom SVG components for AWS and Azure since specific icons aren't available
  const AwsIcon = ({ size = 60, color = "#FF9900" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke={color} strokeWidth="2"/>
      <path d="M6 6V18" stroke={color} strokeWidth="2"/>
      <path d="M18 6V18" stroke={color} strokeWidth="2"/>
      <path d="M2 10H22" stroke={color} strokeWidth="2"/>
      <path d="M2 14H22" stroke={color} strokeWidth="2"/>
      <text x="12" y="13" textAnchor="middle" fill={color} fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">AWS</text>
    </svg>
  );

  const AzureIcon = ({ size = 60, color = "#0078D4" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M8 8L16 16M16 8L8 16" stroke={color} strokeWidth="2"/>
      <text x="12" y="13" textAnchor="middle" fill={color} fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">AZURE</text>
    </svg>
  );

  // Technology logos using react-icons with custom colors and sizes
  const techLogos = [
    { node: <SiReact size={60} color="#61DAFB" />, title: "React", href: "https://react.dev" },
    { node: <SiTypescript size={60} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={60} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVite size={60} color="#646CFF" />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiFramer size={60} color="#0055FF" />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
    { node: <SiNextdotjs size={60} color="#000000" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiNodedotjs size={60} color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython size={60} color="#3776AB" />, title: "Python", href: "https://python.org" },
    { node: <SiGooglecloud size={60} color="#4285F4" />, title: "Google Cloud", href: "https://cloud.google.com" },
    { node: <AwsIcon size={60} />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <AzureIcon size={60} />, title: "Azure", href: "https://azure.microsoft.com" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Improved LogoLoop Showcase
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Customized with 100px/s speed, 60px logo height, and 60px gap
      </p>

      {/* Main Showcase with Your Customizations */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600 dark:text-purple-400">
            Custom Configuration Showcase
          </h2>
          <div className="h-32 relative overflow-hidden rounded-xl border-2 border-purple-500/30 bg-white dark:bg-gray-900 shadow-lg">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology partners with custom settings"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400">Speed</h3>
              <p className="text-2xl font-bold">100px/s</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400">Logo Height</h3>
              <p className="text-2xl font-bold">60px</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400">Gap</h3>
              <p className="text-2xl font-bold">60px</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Fast Speed Example */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">
            High Speed (200px/s)
          </h2>
          <div className="h-24 relative overflow-hidden rounded-lg border border-blue-500/30">
            <LogoLoop
              logos={techLogos.slice(0, 6)}
              speed={200}
              direction="left"
              logoHeight={40}
              gap={40}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Fast technology partners"
            />
          </div>
        </div>

        {/* Right Direction Example */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
          <h2 className="text-xl font-semibold mb-4 text-center text-green-600 dark:text-green-400">
            Reverse Direction
          </h2>
          <div className="h-24 relative overflow-hidden rounded-lg border border-green-500/30">
            <LogoLoop
              logos={techLogos.slice(2, 8)}
              speed={80}
              direction="right"
              logoHeight={40}
              gap={40}
              pauseOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Reverse direction technology partners"
            />
          </div>
        </div>
      </div>

      {/* Color Customization Examples */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-pink-600 dark:text-pink-400">
          Color Customization Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Colors */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">Brand Colors</h3>
            <div className="h-20 relative overflow-hidden rounded-lg">
              <LogoLoop
                logos={[
                  { node: <SiReact size={40} color="#61DAFB" />, title: "React", href: "https://react.dev" },
                  { node: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                  { node: <SiTailwindcss size={40} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                ]}
                speed={60}
                logoHeight={40}
                gap={40}
                ariaLabel="Brand colored logos"
              />
            </div>
          </div>

          {/* Gradient Effect */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-white">Gradient Effect</h3>
            <div className="h-20 relative overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm">
              <LogoLoop
                logos={techLogos.slice(3, 6)}
                speed={70}
                logoHeight={40}
                gap={40}
                ariaLabel="Gradient background logos"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-white">Dark Theme</h3>
            <div className="h-20 relative overflow-hidden rounded-lg">
              <LogoLoop
                logos={[
                  { node: <SiNextdotjs size={40} color="#FFFFFF" />, title: "Next.js", href: "https://nextjs.org" },
                  { node: <SiNodedotjs size={40} color="#FFFFFF" />, title: "Node.js", href: "https://nodejs.org" },
                  { node: <SiPython size={40} color="#FFFFFF" />, title: "Python", href: "https://python.org" },
                ]}
                speed={60}
                logoHeight={40}
                gap={40}
                ariaLabel="Dark theme logos"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
          LogoLoop Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold">Smooth Animation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">60fps performance</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold">Infinite Loop</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Seamless repetition</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold">Customizable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fully configurable</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold">Responsive</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Mobile optimized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedLogoLoopShowcase;