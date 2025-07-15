import React from 'react';
import { MapPin, Code, BookOpen, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Personal touch background elements */}
      <div className="absolute inset-0">
        {/* Subtle code-like pattern */}
        <div className="absolute top-20 left-10 text-blue-200/30 font-mono text-sm transform rotate-12">
          {'{ coding: "passion" }'}
        </div>
        <div className="absolute bottom-32 right-16 text-indigo-200/30 font-mono text-sm transform -rotate-12">
          console.log("Hello World!");
        </div>
        <div className="absolute top-1/3 right-1/4 text-sky-200/30 font-mono text-xs transform rotate-6">
          while(learning) {'{ grow(); }'}
        </div>
        
        {/* Floating elements representing interests */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-indigo-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-sky-400/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Personal greeting */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-lg text-gray-600 font-medium">👋 Hello there! I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Yaswant</span> Kumar
            </h1>
            
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                Final Year B.Tech Student
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                Aspiring Software Developer from Jaipur 🏛️
              </p>
            </div>
          </div>

          {/* Personal location and status */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <MapPin size={18} className="text-blue-500" />
              <span>Jaipur, India</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <BookOpen size={18} className="text-green-500" />
              <span>Currently Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Coffee size={18} className="text-amber-500" />
              <span>Fueled by Coffee</span>
            </div>
          </div>

          {/* Personal tagline */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed">
              "Exploring code, building ideas, and learning every day."
            </p>
            <p className="text-sm text-gray-500 mt-2">
              — My journey in tech
            </p>
          </div>

          {/* Personal interests/traits */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2">
              <Code size={18} />
              <span className="font-medium">Problem Solver</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2">
              <BookOpen size={18} />
              <span className="font-medium">Continuous Learner</span>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-8 space-y-4">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect!
            </button>
            <p className="text-sm text-gray-500">
              Scroll down to know more about my journey
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;