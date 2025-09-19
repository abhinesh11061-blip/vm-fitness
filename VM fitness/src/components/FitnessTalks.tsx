import React from 'react';
import { Calendar, User, MessageCircle, Eye, BookOpen, Zap, Brain } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: 'Motivation' | 'Training' | 'Psychology' | 'Lifestyle';
  author: string;
  date: string;
  readTime: string;
  views: string;
  comments: number;
  image: string;
  excerpt: string;
  featured: boolean;
}

const FitnessTalks: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: 'The Spartan Mindset: Mental Training for Physical Excellence',
      category: 'Psychology',
      author: 'Dr. Vikram Menon',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      views: '12.3K',
      comments: 45,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Discover how ancient Spartan warriors developed unbreakable mental fortitude and how you can apply these principles to modern fitness...',
      featured: true
    },
    {
      id: 2,
      title: 'From Couch to Warrior: A Complete Transformation Guide',
      category: 'Motivation',
      author: 'Meera Sharma',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      views: '8.7K',
      comments: 32,
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'A step-by-step journey from sedentary lifestyle to peak physical condition, featuring real transformation stories...',
      featured: false
    },
    {
      id: 3,
      title: 'Science of Progressive Overload: Building Strength Systematically',
      category: 'Training',
      author: 'Raj Patel, PhD',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      views: '15.2K',
      comments: 67,
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Understanding the scientific principles behind muscle adaptation and how to structure your training for optimal results...',
      featured: true
    },
    {
      id: 4,
      title: 'Balancing Traditional Indian Diet with Modern Fitness Goals',
      category: 'Lifestyle',
      author: 'Priya Krishnan',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
      views: '9.1K',
      comments: 28,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'How to maintain cultural food traditions while achieving your fitness objectives with smart adaptations...',
      featured: false
    },
    {
      id: 5,
      title: 'Overcoming Plateaus: When Progress Stalls',
      category: 'Training',
      author: 'Coach Arjun Singh',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      views: '11.8K',
      comments: 54,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Strategic approaches to break through training plateaus and reignite your fitness progress...',
      featured: false
    },
    {
      id: 6,
      title: 'The Psychology of Habit Formation in Fitness',
      category: 'Psychology',
      author: 'Dr. Anita Reddy',
      date: 'Dec 3, 2024',
      readTime: '11 min read',
      views: '7.9K',
      comments: 41,
      image: 'https://images.pexels.com/photos/4162591/pexels-photo-4162591.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Scientific insights into building lasting fitness habits and the neurological changes that make them stick...',
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Motivation': return Zap;
      case 'Training': return BookOpen;
      case 'Psychology': return Brain;
      case 'Lifestyle': return User;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Motivation': return 'text-yellow-400 bg-yellow-400/20';
      case 'Training': return 'text-red-400 bg-red-400/20';
      case 'Psychology': return 'text-purple-400 bg-purple-400/20';
      case 'Lifestyle': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">FITNESS </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
              TALKS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, motivational stories, and training wisdom from fitness professionals and warriors
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span>Featured Articles</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map(article => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <div
                    key={article.id}
                    className="bg-zinc-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                          <CategoryIcon className="w-4 h-4" />
                          <span>{article.category}</span>
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <span className="text-yellow-400">{article.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-red-400" />
            <span>Latest Articles</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map(article => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <div
                  key={article.id}
                  className="bg-zinc-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        <CategoryIcon className="w-3 h-3" />
                        <span>{article.category}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <span className="text-yellow-400">{article.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white text-sm font-medium transition-colors">
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-2xl p-8 text-center backdrop-blur-sm border border-red-600/30">
          <h3 className="text-2xl font-bold text-white mb-4">Join the Warrior's Knowledge Circle</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get expert fitness insights, motivational content, and exclusive training tips delivered to your inbox weekly
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessTalks;