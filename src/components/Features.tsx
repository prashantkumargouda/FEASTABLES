
import { ArrowUpRight, ChefHat, Repeat, Clock, Heart, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: "Authentic Home Cooking",
    description: "Enjoy daily fresh meals prepared by local home chefs with authentic family recipes and traditions."
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Regular Deliveries",
    description: "Subscribe for regular deliveries of your favorite home-cooked meals at your preferred schedule."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Swift Drone Delivery",
    description: "Experience ultra-fast delivery within 30 minutes directly to your doorstep or office."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health Conscious",
    description: "Filter by dietary preferences, allergies, and nutritional goals to find your perfect meal."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Real-time Tracking",
    description: "Follow your delivery drone in real-time on the map from pickup to your delivery location."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safety & Quality",
    description: "All home cooks are verified and regularly inspected to maintain the highest standards."
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-width px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Traditional Dabba Service, <br />
            <span className="text-gradient">Modern Drone Technology</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            We've reimagined Mumbai's iconic dabba delivery system with cutting-edge drone technology to bring you the best home-cooked meals with unprecedented speed and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 group card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <Link 
                to="#" 
                className="inline-flex items-center text-primary font-medium focus-ring"
              >
                Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
