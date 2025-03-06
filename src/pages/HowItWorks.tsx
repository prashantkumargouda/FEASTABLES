
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Drone, Package, Phone, Map, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Browse & Select",
      icon: <Phone className="w-6 h-6" />,
      description: "Browse our selection of home-cooked meals from local chefs. Select your favorite dishes based on cuisine, dietary preferences, or chef ratings."
    },
    {
      id: 2,
      title: "Place Your Order",
      icon: <Package className="w-6 h-6" />,
      description: "Complete your order by selecting delivery time, address details, and making a secure payment through our platform."
    },
    {
      id: 3,
      title: "Chef Prepares Meal",
      icon: <Clock className="w-6 h-6" />,
      description: "Your selected home chef receives your order and prepares your meal fresh, using authentic recipes and quality ingredients."
    },
    {
      id: 4,
      title: "Drone Pickup",
      icon: <Drone className="w-6 h-6" />,
      description: "Our drone arrives at the chef's location and carefully picks up your meal in a temperature-controlled container."
    },
    {
      id: 5,
      title: "Aerial Delivery",
      icon: <Map className="w-6 h-6" />,
      description: "The drone navigates the fastest route to your location, avoiding traffic and ensuring your food arrives hot and fresh."
    },
    {
      id: 6,
      title: "Enjoy Your Meal!",
      icon: <Check className="w-6 h-6" />,
      description: "Receive your delivery directly at your doorstep or designated drop point. Enjoy your authentic home-cooked meal!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container-width px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              How Drone Dabba <span className="text-gradient">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Experience the future of food delivery with our innovative drone-powered system,
              bringing you fresh home-cooked meals in record time.
            </p>
            <Link to="/menu" className="button-primary inline-flex items-center justify-center gap-2 px-8 py-3.5">
              Order Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
        
        {/* Steps Section */}
        <section className="py-16 relative">
          <div className="container-width px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {steps.map((step) => (
                  <div 
                    key={step.id}
                    className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                      activeStep === step.id ? 'ring-2 ring-primary scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep === step.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-lg">Step {step.id}: {step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="relative py-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1 bg-muted"></div>
                </div>
                <div className="relative flex justify-between">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep >= step.id ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      {step.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-width px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about our drone delivery service</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-2">How far can drones deliver?</h3>
                <p className="text-muted-foreground">Our drones can deliver within a 10 km radius from each home chef's location, ensuring your food arrives hot and fresh.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-2">What happens if it's raining?</h3>
                <p className="text-muted-foreground">Our drones are weather-resistant and can operate in light rain. In case of severe weather conditions, we'll switch to our backup ground delivery system.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-2">How is the food kept hot during delivery?</h3>
                <p className="text-muted-foreground">We use specially designed thermal containers that maintain the temperature of your food throughout the delivery journey.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-2">Is drone delivery safe?</h3>
                <p className="text-muted-foreground">Yes! Our drones are equipped with obstacle avoidance technology, secure food compartments, and follow strict flight regulations approved by aviation authorities.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-2">Can I track my delivery in real-time?</h3>
                <p className="text-muted-foreground">Absolutely! Our app provides real-time tracking so you can watch your drone's journey from the chef's kitchen to your doorstep.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
