
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import FoodCard from '../components/FoodCard';

// Reusing the same food items data from CooksList component
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
    description: 'Mumbai\'s favorite street food - spicy vegetable mash served with buttered pav bread.',
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
  },
  {
    id: '7',
    name: 'Chole Bhature',
    chef: 'Amar Singh',
    description: 'Spicy chickpea curry served with deep-fried bread. A beloved Punjabi classic.',
    price: 180,
    cuisine: 'Punjabi',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626132827459-e2551fc84de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '8',
    name: 'Vada Pav',
    chef: 'Sanjay Patil',
    description: 'Mumbai\'s favorite street food - spicy potato fritter in a bun with chutneys.',
    price: 60,
    cuisine: 'Maharashtrian',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '9',
    name: 'Bengali Fish Curry',
    chef: 'Riya Sen',
    description: 'Traditional Bengali fish curry with mustard and poppy seed paste.',
    price: 260,
    cuisine: 'Bengali',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  }
];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [dietFilter, setDietFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  
  const applyFilters = (item: any) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCuisine = cuisineFilter === '' || item.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase());
    
    const matchesDiet = dietFilter === '' || 
      (dietFilter === 'vegetarian' && item.vegetarian) ||
      (dietFilter === 'non-vegetarian' && !item.vegetarian);
    
    const matchesPrice = priceFilter === '' ||
      (priceFilter === 'budget' && item.price < 150) ||
      (priceFilter === 'mid' && item.price >= 150 && item.price <= 250) ||
      (priceFilter === 'premium' && item.price > 250);
    
    return matchesSearch && matchesCuisine && matchesDiet && matchesPrice;
  };
  
  const filteredItems = foodItems.filter(applyFilters);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-width px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Food Menu</span></h1>
            <p className="text-muted-foreground text-lg">
              Explore our diverse selection of authentic home-cooked meals prepared with love by local chefs
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3 w-full md:max-w-md">
              <div className="relative flex-1">
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
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{filteredItems.length} items found</span>
            </div>
          </div>
          
          {/* Filters (collapsed by default) */}
          <div className={`mb-10 overflow-hidden transition-all duration-300 ${filterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="glass-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Cuisine Type</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={cuisineFilter}
                    onChange={(e) => setCuisineFilter(e.target.value)}
                  >
                    <option value="">All Cuisines</option>
                    <option value="north indian">North Indian</option>
                    <option value="south indian">South Indian</option>
                    <option value="gujarati">Gujarati</option>
                    <option value="maharashtrian">Maharashtrian</option>
                    <option value="bengali">Bengali</option>
                    <option value="punjabi">Punjabi</option>
                    <option value="kerala">Kerala</option>
                    <option value="hyderabadi">Hyderabadi</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Dietary Preference</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={dietFilter}
                    onChange={(e) => setDietFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  >
                    <option value="">All Prices</option>
                    <option value="budget">Budget (Under ₹150)</option>
                    <option value="mid">Mid-Range (₹150-₹250)</option>
                    <option value="premium">Premium (Above ₹250)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
