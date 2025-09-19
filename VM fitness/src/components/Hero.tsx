import React from 'react';
import { Play, Target, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Workouts', value: '500+' },
    { icon: Users, label: 'Members', value: '10K+' },
    { icon: Award, label: 'Success Stories', value: '1K+' }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">TRAIN LIKE A</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
                WARRIOR
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Strength. Discipline. Nutrition. Community.
              <br />
              <span className="text-yellow-400 font-semibold">Forge your legend with VM Fitness.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Workout</span>
            </button>
            <button className="group bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Tips
            </button>
            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Join Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2 group-hover:bg-red-600/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 mx-auto text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-600/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-full blur-2xl animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;