import React, { useState } from 'react';
import { Filter, Heart, Clock, Target } from 'lucide-react';

interface Exercise {
  id: number;
  name: string;
  category: string;
  bodyPart: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  equipment: string;
  image: string;
  reps: string;
  description: string;
}

const ExerciseLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [favoriteExercises, setFavoriteExercises] = useState<number[]>([]);

  const exercises: Exercise[] = [
    {
      id: 1,
      name: 'Spartan Push-ups',
      category: 'Strength Training',
      bodyPart: ['Chest', 'Arms', 'Core'],
      difficulty: 'Intermediate',
      duration: '15 mins',
      equipment: 'None',
      image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '3 sets x 15 reps',
      description: 'Build upper body strength like a warrior'
    },
    {
      id: 2,
      name: 'Warrior Squats',
      category: 'Strength Training',
      bodyPart: ['Legs', 'Glutes'],
      difficulty: 'Beginner',
      duration: '12 mins',
      equipment: 'None',
      image: 'https://images.pexels.com/photos/4162591/pexels-photo-4162591.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '4 sets x 20 reps',
      description: 'Forge powerful legs with this fundamental movement'
    },
    {
      id: 3,
      name: 'Spartan Burpees',
      category: 'Cardio',
      bodyPart: ['Full Body'],
      difficulty: 'Advanced',
      duration: '20 mins',
      equipment: 'None',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '5 rounds x 10 reps',
      description: 'Ultimate full-body conditioning exercise'
    },
    {
      id: 4,
      name: 'Plank of Honor',
      category: 'Core Workouts',
      bodyPart: ['Core', 'Arms'],
      difficulty: 'Intermediate',
      duration: '10 mins',
      equipment: 'None',
      image: 'https://images.pexels.com/photos/4325447/pexels-photo-4325447.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '3 sets x 60 sec hold',
      description: 'Build core strength and stability'
    },
    {
      id: 5,
      name: 'Battle Rope Fury',
      category: 'Cardio',
      bodyPart: ['Arms', 'Core', 'Cardio'],
      difficulty: 'Advanced',
      duration: '25 mins',
      equipment: 'Battle Ropes',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '6 rounds x 30 sec',
      description: 'High-intensity rope training for warriors'
    },
    {
      id: 6,
      name: 'Flexibility Flow',
      category: 'Flexibility & Recovery',
      bodyPart: ['Full Body'],
      difficulty: 'Beginner',
      duration: '18 mins',
      equipment: 'Yoga Mat',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
      reps: '8 poses x 45 sec hold',
      description: 'Restore and recover with gentle stretching'
    }
  ];

  const categories = ['All', 'Warm-ups', 'Cardio', 'Strength Training', 'Core Workouts', 'Flexibility & Recovery'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredExercises = exercises.filter(exercise => {
    return (selectedCategory === 'All' || exercise.category === selectedCategory) &&
           (selectedDifficulty === 'All' || exercise.difficulty === selectedDifficulty);
  });

  const toggleFavorite = (exerciseId: number) => {
    setFavoriteExercises(prev => 
      prev.includes(exerciseId)
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">EXERCISE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
              ARSENAL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master your body with our comprehensive collection of warrior-tested exercises
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 p-6 bg-zinc-800/50 rounded-xl backdrop-blur-sm">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map(exercise => (
            <div
              key={exercise.id}
              className="bg-zinc-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(exercise.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favoriteExercises.includes(exercise.id)
                        ? 'text-red-500 fill-current'
                        : 'text-white'
                    }`}
                  />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{exercise.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{exercise.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{exercise.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Target className="w-4 h-4 text-red-400" />
                    <span>{exercise.reps}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {exercise.bodyPart.map((part, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-700 text-yellow-400 text-xs rounded-full"
                    >
                      {part}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                  Add to Routine
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseLibrary;