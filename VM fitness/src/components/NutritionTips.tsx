import React, { useState } from 'react';
import { Apple, Clock, TrendingUp, Heart } from 'lucide-react';

interface MealPlan {
  id: number;
  name: string;
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  cuisine: 'South Indian' | 'Continental' | 'Mediterranean';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  description: string;
  ingredients: string[];
  prepTime: string;
}

const NutritionTips: React.FC = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedMealType, setSelectedMealType] = useState('All');

  const mealPlans: MealPlan[] = [
    {
      id: 1,
      name: 'Warrior\'s Idli Bowl',
      type: 'Breakfast',
      cuisine: 'South Indian',
      calories: 320,
      protein: 12,
      carbs: 58,
      fat: 4,
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Traditional steamed rice cakes with protein-rich sambar and coconut chutney',
      ingredients: ['Idli batter', 'Sambar dal', 'Coconut chutney', 'Curry leaves', 'Mustard seeds'],
      prepTime: '20 mins'
    },
    {
      id: 2,
      name: 'Spartan Protein Dosa',
      type: 'Lunch',
      cuisine: 'South Indian',
      calories: 450,
      protein: 25,
      carbs: 52,
      fat: 12,
      image: 'https://images.pexels.com/photos/5560754/pexels-photo-5560754.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Crispy fermented crepe with spiced lentils and vegetables',
      ingredients: ['Dosa batter', 'Moong dal', 'Vegetables', 'Spices', 'Coconut oil'],
      prepTime: '25 mins'
    },
    {
      id: 3,
      name: 'Mediterranean Power Bowl',
      type: 'Lunch',
      cuisine: 'Mediterranean',
      calories: 520,
      protein: 28,
      carbs: 42,
      fat: 24,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Quinoa bowl with grilled chicken, vegetables, and tahini dressing',
      ingredients: ['Quinoa', 'Grilled chicken', 'Mediterranean vegetables', 'Tahini', 'Olive oil'],
      prepTime: '30 mins'
    },
    {
      id: 4,
      name: 'Champion\'s Rasam Rice',
      type: 'Dinner',
      cuisine: 'South Indian',
      calories: 380,
      protein: 14,
      carbs: 68,
      fat: 6,
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tangy tamarind soup with rice, perfect for recovery',
      ingredients: ['Brown rice', 'Tamarind', 'Toor dal', 'Tomatoes', 'Curry leaves'],
      prepTime: '35 mins'
    },
    {
      id: 5,
      name: 'Warrior Smoothie Bowl',
      type: 'Snack',
      cuisine: 'Continental',
      calories: 290,
      protein: 18,
      carbs: 32,
      fat: 12,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Protein-packed acai bowl with nuts and seeds',
      ingredients: ['Acai puree', 'Protein powder', 'Banana', 'Almonds', 'Chia seeds'],
      prepTime: '10 mins'
    },
    {
      id: 6,
      name: 'Grilled Salmon Power',
      type: 'Dinner',
      cuisine: 'Mediterranean',
      calories: 480,
      protein: 35,
      carbs: 28,
      fat: 26,
      image: 'https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Omega-3 rich salmon with roasted vegetables',
      ingredients: ['Salmon fillet', 'Sweet potato', 'Broccoli', 'Olive oil', 'Herbs'],
      prepTime: '25 mins'
    }
  ];

  const cuisines = ['All', 'South Indian', 'Continental', 'Mediterranean'];
  const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const filteredMeals = mealPlans.filter(meal => {
    return (selectedCuisine === 'All' || meal.cuisine === selectedCuisine) &&
           (selectedMealType === 'All' || meal.type === selectedMealType);
  });

  const nutritionTips = [
    {
      icon: Apple,
      title: 'Pre-Workout Fuel',
      tip: 'Consume 30-60g carbs 1-2 hours before training for optimal energy',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Post-Workout Recovery',
      tip: 'Within 30 minutes: 20-40g protein + 40-80g carbs for muscle repair',
      color: 'text-red-400'
    },
    {
      icon: TrendingUp,
      title: 'Hydration Goal',
      tip: 'Drink 35-40ml per kg body weight daily, plus 500-750ml per hour of exercise',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Meal Timing',
      tip: 'Eat every 3-4 hours to maintain steady energy and support metabolism',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">FUEL YOUR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
              WARRIOR
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover nutrition plans that power your journey from traditional South Indian cuisine to global favorites
          </p>
        </div>

        {/* Nutrition Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nutritionTips.map((tip, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <tip.icon className={`w-8 h-8 ${tip.color} mb-4`} />
              <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
              <p className="text-gray-400 text-sm">{tip.tip}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 p-6 bg-zinc-800/50 rounded-xl backdrop-blur-sm">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Cuisine Type</label>
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            >
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Meal Type</label>
            <select
              value={selectedMealType}
              onChange={(e) => setSelectedMealType(e.target.value)}
              className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            >
              {mealTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Meal Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map(meal => (
            <div
              key={meal.id}
              className="bg-zinc-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-yellow-400 text-sm font-medium">{meal.cuisine}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {meal.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{meal.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{meal.description}</p>
                
                {/* Macros */}
                <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-zinc-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-lg">{meal.calories}</div>
                    <div className="text-gray-400 text-xs">Cal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-lg">{meal.protein}g</div>
                    <div className="text-gray-400 text-xs">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg">{meal.carbs}g</div>
                    <div className="text-gray-400 text-xs">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">{meal.fat}g</div>
                    <div className="text-gray-400 text-xs">Fat</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{meal.prepTime}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionTips;