
import { useState, useEffect } from 'react';

const HoveringDrone = () => {
  const [position, setPosition] = useState({
    x: Math.random() * 80,
    y: Math.random() * 40 + 10,
  });
  
  useEffect(() => {
    // Animation interval for hovering effect
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() * 2 - 1) * 0.5,
        y: prev.y + (Math.random() * 2 - 1) * 0.5
      }));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed w-full h-full pointer-events-none z-0">
      <div 
        className="absolute animate-float"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transition: 'all 1s ease-in-out'
        }}
      >
        <div className="relative">
          {/* Drone body */}
          <div className="w-20 h-8 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-4 bg-gray-800 rounded-full"></div>
          </div>
          
          {/* Propellers */}
          <div className="absolute -top-3 -left-8 w-8 h-2 bg-gray-600 rounded animate-spin-slow origin-right"></div>
          <div className="absolute -top-3 -right-8 w-8 h-2 bg-gray-600 rounded animate-spin-slow origin-left"></div>
          <div className="absolute -bottom-3 -left-8 w-8 h-2 bg-gray-600 rounded animate-spin-slow origin-right"></div>
          <div className="absolute -bottom-3 -right-8 w-8 h-2 bg-gray-600 rounded animate-spin-slow origin-left"></div>
          
          {/* Food container */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-orange-400 rounded-lg border border-orange-500 shadow-md"></div>
          
          {/* Connection string */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default HoveringDrone;
