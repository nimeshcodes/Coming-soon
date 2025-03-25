
import React, { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  // Set future launch date (3 months from now)
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative section-padding">
        <div className="max-w-4xl mx-auto text-center z-10">
          {/* Logo */}
          <div 
            className={`flex justify-center mb-8 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative h-16 md:h-20">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                <span className="text-gradient">AUSASI</span>
              </h1>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-ausasi-accent to-transparent" />
            </div>
          </div>
          
          {/* Main Headline */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '200ms' }}
          >
            Something Big is Coming<span className="text-ausasi-accent">...</span> <br/>
            <span className="relative inline-block">
              Stay Tuned!
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-ausasi-accent/50 to-transparent"></span>
            </span>
          </h2>
          
          {/* Subheadline */}
          <p 
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            AUSASI is Gift more. Be the first to experience what's next.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-16">
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          {/* Email Signup Form */}
          <div className="mb-12">
            <h3 
              className={`text-xl font-medium mb-4 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '500ms' }}
            >
              Want to be the first to know?
            </h3>
            <EmailSignup className={isLoaded ? undefined : ''} style={{ animationDelay: '600ms' }} />
          </div>
          
          {/* Social Media Links */}
          <SocialLinks />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 border-t border-white/5 text-center text-sm text-gray-500 z-10">
        <div 
          className={`opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '900ms' }}
        >
          © 2025 AUSASI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
