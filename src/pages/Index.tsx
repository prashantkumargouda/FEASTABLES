
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CooksList from '../components/CooksList';
import Footer from '../components/Footer';
import MultipleDrones from '../components/MultipleDrones';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-muted animate-spin"></div>
          <div className="w-16 h-16 rounded-full border-4 border-t-primary absolute top-0 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background drones with better animation */}
      <MultipleDrones count={12} opacity={0.15} />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <CooksList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
