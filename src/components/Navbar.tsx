import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import LanguageTransition from './LanguageTransition';
import SubscribeModal from './SubscribeModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm' : 'py-5 bg-transparent'}`}>
        <div className="container-width px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation("/")} 
              className="flex items-center gap-2 focus:outline-none"
            >
              {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
            
              </div> */}
              <span className="font-bold text-xl font-mono">FEASTABLES</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => handleNavigation("/cooks")} className="text-foreground hover:text-primary transition-colors">Cooks</button>
              <button onClick={() => handleNavigation("/menu")} className="text-foreground hover:text-primary transition-colors">Menu</button>
              <button onClick={() => handleNavigation("/how-it-works")} className="text-foreground hover:text-primary transition-colors">How It Works</button>
              <button onClick={() => handleNavigation("/contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setIsSubscribeModalOpen(true)}
                className="button-outline flex items-center gap-2 px-4 py-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
              <button onClick={() => handleNavigation("/login")} className="button-primary px-6 py-2">Login</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 top-[70px] bg-background z-40 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-6 space-y-6">
            <button onClick={() => handleNavigation("/")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg">Home</button>
            <button onClick={() => handleNavigation("/cooks")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg">Cooks</button>
            <button onClick={() => handleNavigation("/menu")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg">Menu</button>
            <button onClick={() => handleNavigation("/how-it-works")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg">How It Works</button>
            <button onClick={() => handleNavigation("/contact")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg">Contact</button>
            
            <div className="pt-4 mt-4 border-t space-y-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSubscribeModalOpen(true);
                }} 
                className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg w-full flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
              <button onClick={() => handleNavigation("/login")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg w-full">Login</button>
            </div>
          </div>
        </div>
      </header>

      {/* Subscribe Modal */}
      <SubscribeModal 
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
