import React from 'react';
import { Shield, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About VM Fitness', href: '#' },
    { label: 'Training Programs', href: '#' },
    { label: 'Nutrition Plans', href: '#' },
    { label: 'Success Stories', href: '#' },
    { label: 'Become a Trainer', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  const programs = [
    { label: 'Spartan Strength', href: '#' },
    { label: 'Warrior Cardio', href: '#' },
    { label: 'Flexibility Flow', href: '#' },
    { label: 'South Indian Nutrition', href: '#' },
    { label: 'Transformation Challenge', href: '#' },
    { label: 'Online Coaching', href: '#' }
  ];

  const support = [
    { label: 'Help Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Community Guidelines', href: '#' },
    { label: 'App Download', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-yellow-400" />
              <div className="text-2xl font-bold">
                <span className="text-red-600">VM</span>
                <span className="text-yellow-400"> FITNESS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your life with the power of Spartan discipline. Join thousands of warriors who chose strength, nutrition, and community over mediocrity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-red-400" />
                <span>warriors@vmfitness.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-red-400" />
                <span>+91 9876 543 210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-xl mb-4">Join the Warrior Community</h3>
            <p className="text-gray-400 mb-6">
              Get exclusive workout tips, nutrition guides, and motivational content delivered weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Join Warriors
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 VM Fitness. All rights reserved. Built with Spartan discipline.
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="p-2 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Spartan Quote */}
        <div className="py-6 border-t border-zinc-800">
          <div className="text-center">
            <p className="text-yellow-400 italic font-medium">
              "Come back with your shield, or on it." - Spartan Motto
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Every workout is a battle. Every meal is a choice. Every day is a chance to become legendary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;