
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-width px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-in">
              Reimagining Mumbai's Dabbawalas with Drones
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Home-cooked Meals,
              <br />
              <span className="text-gradient">Delivered by Drones</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Experience the perfect blend of tradition and technology. Fresh homemade food from local chefs, delivered right to your doorstep by our cutting-edge drone fleet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => handleNavigation("/menu")} 
                className="button-primary flex items-center justify-center gap-2 px-8 py-3.5"
              >
                Order Now <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleNavigation("/how-it-works")} 
                className="button-outline flex items-center justify-center gap-2 px-8 py-3.5"
              >
                How It Works
              </button>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium ring-2 ring-background">
                      {i}
                    </div>
                  ))}
                </div>
                <span>300+ Home Cooks</span>
              </div>
              
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 hidden sm:block"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                </div>
                <span>4.9 Average Rating</span>
              </div>
              
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 hidden sm:block"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Fast Drone Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-square relative">
              {/* Main image with mask */}
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                <img 
                  src="photoooo.jpeg" 
                  alt="Drone carrying food delivery" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 backdrop-blur-md bg-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Fastest Delivery</p>
                      <p className="text-white/70 text-sm">5-10 minutes by drone</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements
              <div className="absolute -top-8 -right-8 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Drone flying" 
                  className="w-28 h-20 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>
              
              <div className="absolute -bottom-12 -left-12 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Home cooked food" 
                  className="w-28 h-20 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
