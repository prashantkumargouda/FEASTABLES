
import { useState, useEffect, useRef } from 'react';

const translations = [
  { language: 'English', text: 'Drone Dabba' },
  { language: 'Hindi', text: 'ड्रोन डब्बा' },
  { language: 'Marathi', text: 'ड्रोन डबा' },
  { language: 'Tamil', text: 'டிரோன் டாப்பா' },
  { language: 'Telugu', text: 'డ్రోన్ డబ్బా' },
  { language: 'Bengali', text: 'ড্রোন ডাব্বা' },
  { language: 'Gujarati', text: 'ડ્રોન ડબ્બા' },
  { language: 'Punjabi', text: 'ਡਰੋਨ ਡੱਬਾ' },
];

const LanguageTransition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  const startTransition = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // Set timeout for next transition
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
      setIsTransitioning(false);
    }, 300); // Match this with animation duration
  };
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isHovering) {
      interval = window.setInterval(() => {
        startTransition();
      }, 1500);
    }
    
    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovering]);
  
  return (
    <div 
      className="relative font-bold text-xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span 
        className={`inline-block ${isTransitioning ? 'animate-text-blur-out' : 'animate-text-blur-in'}`}
      >
        {translations[currentIndex].text}
      </span>
      <span className="ml-1 text-xs text-primary font-normal opacity-60">
        {translations[currentIndex].language !== 'English' && `(${translations[currentIndex].language})`}
      </span>
    </div>
  );
};

export default LanguageTransition;
