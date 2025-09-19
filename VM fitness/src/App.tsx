import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExerciseLibrary from './components/ExerciseLibrary';
import NutritionTips from './components/NutritionTips';
import FitnessTalks from './components/FitnessTalks';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'exercises':
        return <ExerciseLibrary />;
      case 'nutrition':
        return <NutritionTips />;
      case 'talks':
        return <FitnessTalks />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;