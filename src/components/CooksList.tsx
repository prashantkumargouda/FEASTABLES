
import { useState } from 'react';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

// Sample food data
const foodItems = [
  {
    id: '1',
    name: 'Butter Chicken Thali',
    chef: 'Priya Sharma',
    description: 'Classic butter chicken with naan, rice, dal, and raita. A complete meal with authentic spices.',
    price: 250,
    cuisine: 'North Indian',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  },
  {
    id: '2',
    name: 'Gujarati Thali',
    chef: 'Meera Patel',
    description: 'Authentic Gujarati thali with dhokla, khandvi, rotis, dal, and sweet kadhi.',
    price: 220,
    cuisine: 'Gujarati',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '3',
    name: 'Masala Dosa',
    chef: 'Lakshmi Iyer',
    description: 'Crispy dosa filled with spiced potato masala, served with sambar and coconut chutney.',
    price: 180,
    cuisine: 'South Indian',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '4',
    name: 'Chicken Biryani',
    chef: 'Ahmed Khan',
    description: 'Fragrant basmati rice cooked with marinated chicken, aromatic spices, and caramelized onions.',
    price: 280,
    cuisine: 'Hyderabadi',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1633945488458-1612fc02abe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  },
  {
    id: '5',
    name: 'Pav Bhaji',
    chef: 'Raj Malhotra',
    description: 'Mumbai's favorite street food - spicy vegetable mash served with buttered pav bread.',
    price: 150,
    cuisine: 'Maharashtrian',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '6',
    name: 'Kerala Fish Curry',
    chef: 'Mary Thomas',
    description: 'Tangy and spicy fish curry made with coconut milk, tamarind, and kerala spices.',
    price: 290,
    cuisine: 'Kerala',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1614138159368-146b746f9d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  }
];

const CooksList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  
  const filteredItems = foodItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section className="py-20 relative">
      <div className="container-width px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Today's Offerings</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Explore <span className="text-gradient">Home-cooked Meals</span>
            </h3>
            <p className="text-muted-foreground">
              Authentic dishes made with love by local home chefs, delivered by drone.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search meals or chefs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background hover:bg-muted/50 transition-colors"
            >
              Filter
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Filters (collapsed by default) */}
        <div className={`mb-10 overflow-hidden transition-all duration-300 ${filterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Cuisine Type</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option value="">All Cuisines</option>
                  <option value="north-indian">North Indian</option>
                  <option value="south-indian">South Indian</option>
                  <option value="gujarati">Gujarati</option>
                  <option value="maharashtrian">Maharashtrian</option>
                  <option value="bengali">Bengali</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Dietary Preference</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option value="">All Types</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten Free</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option value="">All Prices</option>
                  <option value="budget">Budget (Under ₹150)</option>
                  <option value="mid">Mid-Range (₹150-₹250)</option>
                  <option value="premium">Premium (Above ₹250)</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 active:scale-95">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/menu" className="button-primary inline-flex items-center justify-center gap-2 px-8 py-3.5">
            See All Dishes <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CooksList;
