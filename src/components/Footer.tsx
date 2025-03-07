
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-width px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <button 
              onClick={() => handleNavigation("/")} 
              className="flex items-center gap-2 mb-5 focus:outline-none"
            >
              {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
            
              </div> */}
              <span className="font-bold text-xl font-mono w-50">FEASTABLES</span>
            </button>
            
            <p className="text-muted-foreground mb-5">
              Reimagining Mumbai's iconic dabba delivery system with cutting-edge drone technology to bring you the best home-cooked meals.
            </p>
            
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("/")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/menu")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Food Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/cooks")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home Cooks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/how-it-works")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Join Us</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Become a Home Cook
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/how-it-works")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Drone Program
                </button>
              </li>
              {/* <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Careers
                </button>
              </li> */}
              {/* <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Affiliate Program
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Investor Relations
                </button>
              </li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Innovation Drive, Hyderabad Tech Park, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+918279298376" className="text-muted-foreground hover:text-primary transition-colors">+91 7837882</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@feastables.com" className="text-muted-foreground hover:text-primary transition-colors">info@feastables.com</a>
              </li>
            </ul>
            
            <div className="mt-5">
              <h5 className="font-medium mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                <button className="px-5 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 active:scale-95 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} Drone Dabba. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <button onClick={() => handleNavigation("/contact")} className="hover:text-primary transition-colors">Terms of Service</button>
            <button onClick={() => handleNavigation("/contact")} className="hover:text-primary transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavigation("/contact")} className="hover:text-primary transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
