import React, { useState } from 'react';
import { Star, ThumbsUp, Calendar, Award, TrendingUp, Users } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  story: string;
  achievements: string[];
  workoutPlan: string;
  timeframe: string;
  likes: number;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const Reviews: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const transformationStories: Review[] = [
    {
      id: 1,
      name: 'Arjun Menon',
      location: 'Bangalore, India',
      rating: 5,
      date: '6 months ago',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      beforeImage: 'https://images.pexels.com/photos/4944420/pexels-photo-4944420.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'From Software Engineer to Spartan Warrior',
      story: 'Working 12-hour days as a developer left me out of shape and exhausted. VM Fitness changed everything! The Spartan training philosophy resonated with me, and the South Indian nutrition plans made it sustainable. Lost 25kg and gained incredible strength.',
      achievements: ['Lost 25kg', 'Gained 15kg muscle', 'Completed first marathon', 'Increased energy 300%'],
      workoutPlan: 'Spartan Strength Program',
      timeframe: '8 months',
      likes: 234
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      rating: 5,
      date: '4 months ago',
      avatar: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=100',
      beforeImage: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Postpartum Recovery to Peak Fitness',
      story: 'After my second child, I thought I\'d never feel strong again. VM Fitness\' holistic approach combining traditional Indian foods with modern training methods helped me not just lose weight but become the strongest version of myself.',
      achievements: ['Lost 18kg', 'Regained core strength', 'Improved mental health', 'Inspiring other moms'],
      workoutPlan: 'Warrior Mom Recovery',
      timeframe: '10 months',
      likes: 187
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      location: 'Chennai, India',
      rating: 5,
      date: '3 months ago',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      beforeImage: 'https://images.pexels.com/photos/4944421/pexels-photo-4944421.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Diabetes to Warrior Transformation',
      story: 'Diagnosed with Type 2 diabetes at 45, I was devastated. The VM Fitness team created a custom plan respecting my love for South Indian cuisine while reversing my condition. Now I\'m healthier than in my 20s!',
      achievements: ['Reversed diabetes', 'Lost 30kg', 'Blood pressure normalized', 'Medication-free'],
      workoutPlan: 'Metabolic Warrior Plan',
      timeframe: '12 months',
      likes: 312
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Kavitha Nair',
      role: 'Sports Medicine Specialist',
      content: 'VM Fitness combines evidence-based training with cultural sensitivity. Their approach to integrating traditional Indian nutrition with modern fitness science is exceptional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Coach Mike Thompson',
      role: 'Olympic Training Coach',
      content: 'The Spartan methodology at VM Fitness produces real results. I\'ve seen their members achieve remarkable transformations through disciplined training and proper nutrition.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Nutrition Expert Meera',
      role: 'Certified Dietitian',
      content: 'Finally, a fitness platform that understands Indian dietary preferences! Their meal plans are practical, culturally appropriate, and scientifically sound.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const stats = [
    { icon: Users, label: 'Success Stories', value: '1,200+', color: 'text-red-400' },
    { icon: Award, label: 'Average Weight Lost', value: '22kg', color: 'text-yellow-400' },
    { icon: TrendingUp, label: 'Satisfaction Rate', value: '98%', color: 'text-green-400' },
    { icon: Calendar, label: 'Average Timeframe', value: '6 months', color: 'text-blue-400' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const filters = ['All', 'Weight Loss', 'Muscle Gain', 'Health Recovery', 'Athletic Performance'];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">WARRIOR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
              TRANSFORMATIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real warriors who transformed their lives with VM Fitness
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Transformation Stories */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Transformation Stories</h3>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600"
            >
              {filters.map(filter => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>

          <div className="space-y-12">
            {transformationStories.map(story => (
              <div
                key={story.id}
                className="bg-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Before/After Images */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white mb-4">Transformation</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Before</div>
                        <img
                          src={story.beforeImage}
                          alt="Before transformation"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">After</div>
                        <img
                          src={story.afterImage}
                          alt="After transformation"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="bg-zinc-700 p-3 rounded-lg">
                      <div className="text-sm text-gray-300 mb-1">Timeframe</div>
                      <div className="text-yellow-400 font-semibold">{story.timeframe}</div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="text-lg font-bold text-white">{story.name}</h4>
                          <div className="flex space-x-1">
                            {renderStars(story.rating)}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm mb-2">{story.location} • {story.date}</div>
                        <h5 className="text-yellow-400 font-semibold mb-3">{story.title}</h5>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{story.story}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="text-white font-semibold mb-2">Key Achievements</h6>
                        <ul className="space-y-1">
                          {story.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-400" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-white font-semibold mb-2">Program Used</h6>
                        <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3">
                          <div className="text-red-400 font-medium">{story.workoutPlan}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{story.likes} likes</span>
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors">
                        View Full Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Experts Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-zinc-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-2xl p-8 text-center backdrop-blur-sm border border-red-600/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of warriors who transformed their lives. Your journey to greatness starts today.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;