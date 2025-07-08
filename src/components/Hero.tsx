import React from 'react';
import { MapPin, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e0f2fe%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3Ccircle cx=%2213%22 cy=%2213%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
                Yaswant Kumar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              Final Year B.Tech Student | Aspiring Software Developer
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={20} />
            <span className="text-lg">Jaipur, India</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            "Exploring code, building ideas, and learning every day."
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Code className="text-sky-600" size={20} />
              <span className="text-gray-700 font-medium">Problem Solver</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Zap className="text-sky-600" size={20} />
              <span className="text-gray-700 font-medium">Fast Learner</span>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get to Know Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;