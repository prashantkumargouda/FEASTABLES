
import { useEffect, useState } from 'react';

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
  const [direction, setDirection] = useState({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1
  });
  
  // Different speeds for different drones
  const speed = 0.1 + index * 0.02;
  const scale = 0.7 + (initialPosition.z / 100) * 0.6;
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Update position with directions
      setPosition(prev => {
        const newX = prev.x + direction.x * speed;
        const newY = prev.y + direction.y * speed;
        
        // Change direction if reaching the edges
        if (newX > 90 || newX < 10) {
          setDirection(prev => ({ ...prev, x: -prev.x }));
        }
        
        if (newY > 80 || newY < 20) {
          setDirection(prev => ({ ...prev, y: -prev.y }));
        }
        
        // Add subtle hover effect
        const hoverY = prev.y + (Math.random() * 2 - 1) * 0.2;
        
        return {
          x: newX,
          y: hoverY,
          z: prev.z
        };
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [direction, speed]);
  
  // Calculate opacity based on z-position
  const opacity = 0.7 + (position.z / 100) * 0.3;
  
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `scale(${scale})`,
        opacity,
        transition: 'top 1s ease-in-out, left 1s ease-in-out',
        zIndex: Math.floor(position.z)
      }}
    >
      <div className="relative">
        {/* Drone body */}
        <div className="w-16 h-5 bg-gray-800 rounded-full flex items-center justify-center shadow-xl">
          <div className="w-10 h-3 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Propellers */}
        <div className="absolute -top-2 -left-6 w-6 h-1 bg-gray-500 rounded animate-spin-slow origin-right"></div>
        <div className="absolute -top-2 -right-6 w-6 h-1 bg-gray-500 rounded animate-spin-slow origin-left"></div>
        <div className="absolute -bottom-2 -left-6 w-6 h-1 bg-gray-500 rounded animate-spin-slow origin-right"></div>
        <div className="absolute -bottom-2 -right-6 w-6 h-1 bg-gray-500 rounded animate-spin-slow origin-left"></div>
        
        {/* Food container - different colors for visual variety */}
        <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-lg shadow-md border 
          ${index % 3 === 0 ? 'bg-orange-400 border-orange-500' : 
            index % 3 === 1 ? 'bg-green-400 border-green-500' : 
            'bg-red-400 border-red-500'}`}>
        </div>
        
        {/* Connection string */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-gray-400"></div>
      </div>
    </div>
  );
};

const MultipleDrones = ({ count = 8, opacity = 0.2 }: DroneProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ opacity }}>
      {Array(count).fill(0).map((_, i) => (
        <DroneItem key={i} index={i} />
      ))}
    </div>
  );
};

export default MultipleDrones;
