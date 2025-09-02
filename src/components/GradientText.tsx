import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'orange-purple' | 'orange-pink' | 'warm' | 'sunset' | 'flow' | 'pulse' | 'premium' | 'wave';
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  variant = 'default',
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  // Map variants to CSS classes
  const variantClasses = {
    default: 'gradient-text',
    'orange-purple': 'gradient-text-orange-purple',
    'orange-pink': 'gradient-text-orange-pink',
    'warm': 'gradient-text-warm',
    'sunset': 'gradient-text-sunset',
    'flow': 'gradient-text-flow',
    'pulse': 'gradient-text-pulse',
    'premium': 'gradient-text-premium',
    'wave': 'gradient-text-wave'
  };

  const selectedVariant = variantClasses[variant] || variantClasses.default;
  const gradientStyle = {
    animationDuration: `${animationSpeed}s`
  };

  return (
    <>
      <div
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${selectedVariant} ${className}`}
        style={showBorder ? gradientStyle : undefined}
      >
        {showBorder && (
          <div
            className="absolute inset-0 bg-cover z-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, hsl(270 100% 70%), hsl(320 100% 70%))',
              backgroundSize: '300% 100%',
              animation: `gradient ${animationSpeed}s linear infinite`
            }}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: 'calc(100% - 2px)',
                height: 'calc(100% - 2px)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          </div>
        )}
        <div
          className="inline-block relative z-2"
          style={showBorder ? {
            background: 'linear-gradient(135deg, hsl(270 100% 70%), hsl(320 100% 70%))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundSize: '300% 100%',
            animation: `gradient ${animationSpeed}s linear infinite`
          } : undefined}
        >
          {children}
        </div>
      </div>
    </>
  );
}