
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-[-1] overflow-hidden bg-ausasi-dark",
        className
      )}
    >
      {/* Gradient Orb - Top Right */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-ausasi-accent/20 blur-3xl animate-pulse-soft"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Gradient Orb - Center Left */}
      <div 
        className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl animate-pulse-soft" 
        style={{ animationDelay: '1.2s' }}
      />
      
      {/* Small particles */}
      <div className="absolute w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse-soft ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '70px 70px' }}
      />
    </div>
  );
};

export default AnimatedBackground;
