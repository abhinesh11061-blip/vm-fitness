import React, { useState } from 'react';
import { Search, Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'talks', label: 'Talks' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <div className="text-xl font-bold">
              <span className="text-red-600">VM</span>
              <span className="text-yellow-400"> FITNESS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-yellow-400 ${
                  activeSection === item.id
                    ? 'text-yellow-400 bg-red-900/20'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-yellow-400 bg-red-900/20'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Search exercises..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-600"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;