
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface EmailSignupProps {
  className?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! We\'ll notify you when we launch.');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "w-full max-w-md mx-auto opacity-0 animate-fade-in", 
        className
      )}
    >
      <div className="relative flex items-center w-full">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 pr-36 bg-ausasi-muted border border-white/10 rounded-lg focus:ring-ausasi-accent focus:border-ausasi-accent text-white placeholder:text-gray-400"
        />
        <div className="absolute right-1.5">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="h-9 bg-gradient-to-r from-ausasi-accent to-blue-500 hover:opacity-90 text-white rounded-md transition-all-smooth"
          >
            {isSubmitting ? 'Submitting...' : 'Notify Me'}
          </Button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  );
};

export default EmailSignup;
