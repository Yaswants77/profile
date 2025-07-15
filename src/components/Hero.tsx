import React from 'react';
import { MapPin, Coffee, BookOpen, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Code Snippets */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-blue-400 font-mono text-sm transform rotate-12 animate-pulse">
          {'{ coding: "passion" }'}
        </div>
        <div className="absolute bottom-32 right-16 text-green-400 font-mono text-sm transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
          console.log("Hello World!");
        </div>
        <div className="absolute top-1/3 right-1/4 text-red-400 font-mono text-xs transform rotate-6 animate-pulse" style={{ animationDelay: '2s' }}>
          while(learning) {'{ grow(); }'}
        </div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-lg text-gray-400 font-medium">👋 Hello there! I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-mono">
              <span className="text-blue-400">Yaswant</span> Kumar
            </h1>
            
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                Final Year B.Tech Student
              </p>
              <p className="text-lg sm:text-xl text-gray-400">
                Aspiring Software Developer from <span className="text-green-400">Jaipur</span>
              </p>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <MapPin size={18} className="text-blue-400" />
              <span>Jaipur, India</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <BookOpen size={18} className="text-green-400" />
              <span>Currently Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <Coffee size={18} className="text-red-400" />
              <span>Fueled by Coffee</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 italic leading-relaxed font-mono">
              "Exploring code, building ideas, and learning every day."
            </p>
            <div className="mt-4 flex justify-center">
              <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                <div className="text-blue-400">const developer = {'{'}</div>
                <div className="text-green-400 ml-4">passion: <span className="text-yellow-400">"coding"</span>,</div>
                <div className="text-green-400 ml-4">status: <span className="text-yellow-400">"learning"</span>,</div>
                <div className="text-green-400 ml-4">fuel: <span className="text-yellow-400">"coffee"</span></div>
                <div className="text-blue-400">{'}'}</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
            >
              Let's Connect!
              <ArrowDown size={20} className="animate-bounce" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Ready to start something amazing together
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;