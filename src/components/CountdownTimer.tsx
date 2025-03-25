
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeBoxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className={cn("flex justify-center space-x-4 md:space-x-6", className)}>
      {timeBoxes.map((item, index) => (
        <div 
          key={item.label} 
          className="flex flex-col items-center opacity-0 animate-fade-in"
          style={{ animationDelay: `${400 + (index * 100)}ms` }}
        >
          <div className="glass-panel w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 relative overflow-hidden">
            <span className="text-2xl md:text-3xl font-bold">
              {formatNumber(item.value)}
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ausasi-accent/50 to-transparent" />
          </div>
          <span className="text-xs uppercase tracking-wider text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
