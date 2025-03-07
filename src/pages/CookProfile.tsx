import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, MapPin, Award, ChefHat, Clock, Calendar, Users, Heart, ThumbsUp, MessageCircle } from 'lucide-react';
import FoodCard from '../components/FoodCard';

// Sample cook data
const cooks = [
  {
    id: '1',
    name: 'Priya Sharma',
    specialty: 'North Indian',
    rating: 4.8,
    reviews: 124,
    area: 'Andheri West',
    bio: 'Passionate about authentic Punjabi cuisine with 15 years of experience cooking for family and friends.',
    image: 'one.jpeg',
    tags: ['North Indian', 'Punjabi', 'Vegetarian'],
    featured: true,
    yearsOfExperience: 15,
    ordersCompleted: 2500,
    specialities: ['Butter Chicken', 'Dal Makhani', 'Naan', 'Biryani'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM - 8:00 PM',
    about: `I've been cooking North Indian cuisine for over 15 years, learning the art from my grandmother and mother. My passion lies in creating authentic Punjabi dishes that bring the true flavors of Punjab to your table. Every dish is prepared with love, using traditional methods and hand-ground spices.

I specialize in both vegetarian and non-vegetarian Punjabi cuisine, with a particular expertise in curry dishes and tandoor specialties. My butter chicken and dal makhani have won local cooking competitions, and I take pride in maintaining consistent quality across all my dishes.

In addition to cooking, I also conduct weekend cooking workshops where I share traditional recipes and cooking techniques passed down through generations in my family.`
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
    featured: true,
    yearsOfExperience: 20,
    ordersCompleted: 3000,
    specialities: ['Hyderabadi Biryani', 'Haleem', 'Nihari', 'Kebabs'],
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTime: '11:00 AM - 9:00 PM',
    about: `Coming from a family of renowned Hyderabadi chefs, I carry forward a legacy of authentic Nizami cuisine. Our family's secret recipes have been preserved and perfected over three generations, making our biryani and other dishes truly unique.

Each dish I prepare follows traditional cooking methods, using carefully sourced ingredients and spice blends that are ground fresh daily. My specialty lies in slow-cooked dishes that bring out the rich, complex flavors of Hyderabadi cuisine.

I believe in maintaining the authenticity of each recipe while ensuring the highest standards of quality and taste.`
  }
];

// Sample food items
const foodItems = [
  {
    id: '1',
    name: 'Butter Chicken Thali',
    chef: 'Priya Sharma',
    description: 'Classic butter chicken with naan, rice, dal, and raita. A complete meal with authentic spices.',
    price: 250,
    cuisine: 'North Indian',
    rating: 4.8,
    image: 'one.jpeg',
    vegetarian: false
  },
  {
    id: '2',
    name: 'Dal Makhani Special',
    chef: 'Priya Sharma',
    description: 'Creamy black lentils slow-cooked overnight with rich spices and butter.',
    price: 180,
    cuisine: 'North Indian',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: true
  },
  {
    id: '3',
    name: 'Hyderabadi Biryani',
    chef: 'Ahmed Khan',
    description: 'Aromatic basmati rice layered with tender meat and authentic Hyderabadi spices.',
    price: 300,
    cuisine: 'Hyderabadi',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  },
  {
    id: '4',
    name: 'Special Haleem',
    chef: 'Ahmed Khan',
    description: 'Slow-cooked wheat, lentils, and meat, garnished with fried onions and mint.',
    price: 220,
    cuisine: 'Hyderabadi',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    vegetarian: false
  }
];

// Sample reviews data
const reviews = [
  {
    id: '1',
    cookId: '1',
    userName: 'Rahul Mehta',
    rating: 5,
    date: '2024-03-15',
    comment: 'The butter chicken was absolutely amazing! Authentic taste and generous portions.',
    helpful: 24,
    replies: 2,
    userImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '2',
    cookId: '1',
    userName: 'Sneha Patel',
    rating: 4,
    date: '2024-03-10',
    comment: 'Love the dal makhani! Reminds me of home cooking. The naan was slightly hard though.',
    helpful: 15,
    replies: 1,
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '3',
    cookId: '2',
    userName: 'Zara Khan',
    rating: 5,
    date: '2024-03-12',
    comment: 'Best biryani in the city! The meat was tender and the spices were perfectly balanced.',
    helpful: 32,
    replies: 3,
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
];

const CookProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'menu' | 'about' | 'reviews'>('menu');
  const [isFollowing, setIsFollowing] = useState(false);

  // Find the cook data
  const cook = cooks.find(c => c.id === id);

  // Find food items by this cook
  const cookFoodItems = foodItems.filter(item => item.chef === cook?.name);

  if (!cook) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-width px-4 md:px-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Cook not found</h1>
            <button 
              onClick={() => navigate('/cooks')}
              className="button-primary px-6 py-2"
            >
              View All Cooks
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-width px-4 md:px-6">
          {/* Hero Section */}
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={cook.image} 
                    alt={cook.name}
                    className="w-full h-full object-cover"
                  />
                  {cook.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      Featured Cook
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{cook.name}</h1>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <ChefHat className="w-4 h-4" />
                        <span>{cook.specialty}</span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{cook.area}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`button-outline flex items-center gap-2 px-4 py-2 ${
                      isFollowing ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFollowing ? 'fill-primary' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{cook.rating}</div>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      Rating
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{cook.reviews}</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{cook.yearsOfExperience}+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{cook.ordersCompleted}+</div>
                    <div className="text-sm text-muted-foreground">Orders</div>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Available: {cook.availableDays.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Hours: {cook.availableTime}</span>
                  </div>
                </div>

                {/* Specialities */}
                <div>
                  <h3 className="font-medium mb-3">Specialities</h3>
                  <div className="flex flex-wrap gap-2">
                    {cook.specialities.map((item, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b mb-8">
            <button
              onClick={() => setActiveTab('menu')}
              className={`pb-4 px-2 font-medium transition-colors relative ${
                activeTab === 'menu' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-4 px-2 font-medium transition-colors relative ${
                activeTab === 'about' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 px-2 font-medium transition-colors relative ${
                activeTab === 'reviews' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'menu' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cookFoodItems.map((item) => (
                <FoodCard key={item.id} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4">About {cook.name}</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {cook.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {reviews
                .filter(review => review.cookId === cook.id)
                .map((review) => (
                  <div key={review.id} className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={review.userImage} 
                        alt={review.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-medium">{review.userName}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-none'}`}
                                  />
                                ))}
                              </div>
                              <span>•</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {review.comment}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>Reply ({review.replies})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookProfile; 