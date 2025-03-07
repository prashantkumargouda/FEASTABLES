import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Star, MapPin, Award } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for home cooks
const cooks = [
  {
    id: '1',
    name: 'Priya',
    specialty: 'North Indian',
    rating: 4.8,
    reviews: 124,
    area: 'Andheri West',
    bio: 'Passionate about authentic Punjabi cuisine with 15 years of experience cooking for family and friends.',
    image: 'one.jpeg',
    tags: ['North Indian', 'Punjabi', 'Vegetarian'],
    featured: true
  },
  {
    id: '2',
    name: 'Ahmed Khan',
    specialty: 'Hyderabadi',
    rating: 4.7,
    reviews: 98,
    area: 'Bandra East',
    bio: 'Third-generation biryani expert with secret family recipes passed down through generations.',
    image: 'three.jpeg',
    tags: ['Biryani', 'Hyderabadi', 'Non-Veg'],
    featured: true
  },
  {
    id: '3',
    name: 'Meeras Patel',
    specialty: 'Gujarati',
    rating: 4.6,
    reviews: 87,
    area: 'Borivali',
    bio: 'Specializing in authentic Gujarati thalis with a modern twist. Known for fresh ingredients and balanced flavors.',
    image: 'two.jpeg', 
    tags: ['Gujarati', 'Vegetarian', 'Thali'],
    featured: false
  },
  {
    id: '4',
    name: 'Raj Malhotra',
    specialty: 'Maharashtrian',
    rating: 4.5,
    reviews: 73,
    area: 'Dadar',
    bio: 'Born and raised in Mumbai, bringing authentic street food flavors to home-cooked meals.',
    image: 'four.jpeg',
    tags: ['Street Food', 'Maharashtrian', 'Spicy'],
    featured: false
  },
  {
    id: '5',
    name: 'Lakshmi Iyer',
    specialty: 'South Indian',
    rating: 4.9,
    reviews: 156,
    area: 'Powai',
    bio: 'Chef with 20 years of experience in authentic Tamil and Kerala cuisine. Specializes in dosas and idlis.',
    image: 'two.jpeg',
    tags: ['South Indian', 'Tamil', 'Kerala'],
    featured: true
  },
  {
    id: '6',
    name: 'Mary Thomas',
    specialty: 'Kerala',
    rating: 4.9,
    reviews: 112,
    area: 'Bandra West',
    bio: 'Specializes in coastal Kerala cuisine with emphasis on fresh seafood and coconut-based curries.',
    image: 'four.jpeg',
    tags: ['Kerala', 'Seafood', 'Coastal'],
    featured: false
  }
];

const Cooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCooks = cooks.filter(cook => 
    cook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cook.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cook.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cook.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-width px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Home Cooks</span></h1>
            <p className="text-muted-foreground text-lg">
              Meet the talented home chefs who bring authentic flavors and family recipes to your doorstep
            </p>
          </div>
          
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by name, cuisine, or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          
          {/* Featured Cooks */}
          {filteredCooks.some(cook => cook.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Cooks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCooks
                  .filter(cook => cook.featured)
                  .map((cook) => (
                    <Link 
                      to={`/cook/${cook.id}`} 
                      className="glass-card overflow-hidden group"
                    >
                      <div className="relative h-48">
                        <img 
                          src={cook.image} 
                          alt={cook.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-xl">{cook.name}</h3>
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="fill-current w-4 h-4" />
                            <span className="font-medium">{cook.rating}</span>
                            <span className="text-muted-foreground text-xs">({cook.reviews})</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{cook.area}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                          <span>{cook.specialty}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">{cook.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cook.tags.map((tag, index) => (
                            <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="button-outline w-full flex justify-center items-center py-2">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
          
          {/* All Cooks */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Cooks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCooks.map((cook) => (
                <Link 
                  to={`/cook/${cook.id}`} 
                  className="glass-card overflow-hidden group"
                >
                  <div className="relative h-48">
                    <img 
                      src={cook.image} 
                      alt={cook.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {cook.rating >= 4.8 && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" /> Top Rated
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{cook.name}</h3>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="fill-current w-4 h-4" />
                        <span className="font-medium">{cook.rating}</span>
                        <span className="text-muted-foreground text-xs">({cook.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{cook.area}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                      <span>{cook.specialty}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{cook.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cook.tags.map((tag, index) => (
                        <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="button-outline w-full flex justify-center items-center py-2">
                      View Profile
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cooks;
