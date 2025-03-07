
import { useEffect, useState, useRef } from 'react';

interface DroneProps {
  count?: number;
  opacity?: number;
}

const DroneItem = ({ index }: { index: number }) => {
  const initialPosition = {
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
    z: Math.random() * 100
  };
  
  const [position, setPosition] = useState(initialPosition);
  const [rotation, setRotation] = useState(0);
  const directionRef = useRef({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1
  });
  
  // Calculate personalized characteristics for each drone
  const baseSpeed = 0.05 + (Math.random() * 0.08);
  const scale = 0.6 + (initialPosition.z / 100) * 0.6;
  const hoverAmplitude = 0.1 + Math.random() * 0.2;
  const hoverFrequency = 0.05 + Math.random() * 0.05;
  const timeOffsetRef = useRef(Math.random() * 1000);
  
  useEffect(() => {
    let animationFrame: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Movement with time-based animation
      setPosition(prev => {
        // Get current direction from ref
        const direction = directionRef.current;
        
        // Calculate new position with time-based movement
        const moveAmount = baseSpeed * deltaTime * 0.1;
        let newX = prev.x + direction.x * moveAmount;
        let newY = prev.y + direction.y * moveAmount;
        
        // Check boundaries and update direction if needed
        if (newX > 95 || newX < 5) {
          directionRef.current.x = -direction.x;
          newX = prev.x; // Bounce back
          
          // Add slight rotation when changing direction
          setRotation(prev => prev + (direction.x > 0 ? 10 : -10));
        }
        
        if (newY > 85 || newY < 15) {
          directionRef.current.y = -direction.y;
          newY = prev.y; // Bounce back
          
          // Add slight rotation when changing direction
          setRotation(prev => prev + (direction.y > 0 ? 5 : -5));
        }
        
        // Add realistic hovering effect (sine wave)
        const hoverTime = (timestamp + timeOffsetRef.current) * hoverFrequency;
        const hoverOffset = Math.sin(hoverTime) * hoverAmplitude;
        
        return {
          x: newX,
          y: newY + hoverOffset,
          z: prev.z
        };
      });
      
      // Continue animation loop
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [baseSpeed, hoverAmplitude, hoverFrequency]);
  
  // Calculate opacity based on z-position
  const opacity = 0.7 + (position.z / 100) * 0.3;
  
  // Determine propeller animation speed based on movement
  const propellerSpeed = Math.abs(directionRef.current.x) + Math.abs(directionRef.current.y);
  const propellerClass = `animate-spin-${propellerSpeed > 1.5 ? 'fast' : 'slow'}`;
  
  return (
    <div
      className="absolute transform-gpu"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        zIndex: Math.floor(position.z),
        transition: 'transform 0.5s ease-out',
        willChange: 'transform, opacity, top, left'
      }}
    >
      <div className="relative">
        {/* Drone body with shadow effect */}
        <div className="w-16 h-5 bg-gray-800 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {/* Camera */}
          <div className="absolute -bottom-1 w-2 h-2 bg-black rounded-full border border-gray-600">
            <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-0.5 left-0.5 animate-pulse-slow"></div>
          </div>
          
          <div className="w-10 h-3 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Propellers with different animation speeds */}
        <div className={`absolute -top-2 -left-7 w-7 h-1 bg-gray-400 rounded ${propellerClass} origin-right shadow-sm`}></div>
        <div className={`absolute -top-2 -right-7 w-7 h-1 bg-gray-400 rounded ${propellerClass} origin-left shadow-sm`}></div>
        <div className={`absolute -bottom-2 -left-7 w-7 h-1 bg-gray-400 rounded ${propellerClass} origin-right shadow-sm`}></div>
        <div className={`absolute -bottom-2 -right-7 w-7 h-1 bg-gray-400 rounded ${propellerClass} origin-left shadow-sm`}></div>
        
        {/* Food container with subtle shine effect */}
        <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-lg shadow-md border 
          ${index % 5 === 0 ? 'bg-orange-400 border-orange-500' : 
            index % 5 === 1 ? 'bg-green-400 border-green-500' : 
            index % 5 === 2 ? 'bg-red-400 border-red-500' :
            index % 5 === 3 ? 'bg-blue-400 border-blue-500' :
            'bg-yellow-400 border-yellow-500'}`}>
          {/* Shine effect */}
          <div className="absolute top-0 left-1 w-1 h-1 bg-white opacity-60 rounded-full"></div>
        </div>
        
        {/* Connection string with shadow */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-gray-300 shadow-sm"></div>
      </div>
    </div>
  );
};

const MultipleDrones = ({ count = 8, opacity = 0.2 }: DroneProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      {Array(count).fill(0).map((_, i) => (
        <DroneItem key={i} index={i} />
      ))}
    </div>
  );
};

export default MultipleDrones;
