import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageTransition from './LanguageTransition';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container-width px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="flex items-center">
            <img src="FEASTABLES.jpeg" alt="Logo" className="h-20 w-auto" />
          </div>
          {/* <div className="overflow-hidden">
            <LanguageTransition />
          </div> */}
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/cooks" className="text-foreground font-medium hover:text-primary transition-colors">Cooks</Link>
          <Link to="/menu" className="text-foreground font-medium hover:text-primary transition-colors">Menu</Link>
          <Link to="/how-it-works" className="text-foreground font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link to="/contact" className="text-foreground font-medium hover:text-primary transition-colors">Contact</Link>
          <Link to="/login" className="text-foreground font-medium hover:text-primary transition-colors">Login</Link>
        </nav>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus-ring text-foreground rounded-full p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          
          <div className="pt-4 mt-4 border-t">
            <button onClick={() => handleNavigation("/login")} className="text-left text-foreground font-medium text-lg px-4 py-2 hover:bg-muted rounded-lg w-full">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
