
import { useState } from 'react';
import { Heart, Star, PlusCircle, ChefHat } from 'lucide-react';
import { toast } from "sonner";

interface FoodCardProps {
  id: string;
  name: string;
  chef: string;
  description: string;
  price: number;
  cuisine: string;
  rating: number;
  image: string;
  vegetarian: boolean;
}

const FoodCard = ({
  id,
  name,
  chef,
  description,
  price,
  cuisine,
  rating,
  image,
  vegetarian
}: FoodCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  const handleAddToCart = () => {
    toast.success(`${name} added to cart`);
  };

  // Fallback image in case the original doesn't load
  const fallbackImage = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
  
  return (
    <div className="glass-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={imgError ? fallbackImage : image} 
          alt={name} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
        
        {/* Favorite button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110 focus-ring"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
        </button>
        
        {/* Veg/Non-veg indicator */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm bg-white/80 border-l-4 border-solid border-l-green-500 text-gray-800">
          {vegetarian ? 'Veg' : 'Non-Veg'}
        </div>
        
        {/* Chef tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm bg-white/80 text-gray-800">
          <ChefHat className="w-3.5 h-3.5" />
          <span>{chef}</span>
        </div>
        
        {/* Cuisine tag */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm bg-white/80 text-gray-800">
          {cuisine}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-primary font-semibold">₹{price.toFixed(2)}</div>
          
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary/10 text-primary font-medium transition-colors hover:bg-primary hover:text-white focus-ring"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
