import React from 'react';
import { MapPin, Coffee, BookOpen, ArrowDown, Github, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200/30 rounded-full blur-xl animate-float"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Code Snippets */}
        <div className="absolute top-32 left-4 text-blue-500/40 font-mono text-sm transform rotate-12 animate-pulse">
          {'{ coding: "passion" }'}
        </div>
        <div className="absolute bottom-32 right-8 text-green-500/40 font-mono text-sm transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
          console.log("Hello World!");
        </div>
        <div className="absolute top-1/2 right-1/4 text-purple-500/40 font-mono text-sm transform rotate-6 animate-pulse" style={{ animationDelay: '2s' }}>
          while(learning) {'{ grow(); }'}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Greeting with Animation */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-medium">Available for opportunities</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block animate-fade-in">👋 Hello I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in-delayed">
                    Yaswant Kumar
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
                    Final Year B.Tech Student
                  </p>
                  <p className="text-lg sm:text-xl text-gray-600">
                    Aspiring Software Developer from <span className="text-green-600 font-semibold">Jaipur</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Status Cards */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <MapPin className="text-blue-500" size={20} />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Jaipur, India</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <BookOpen className="text-green-500" size={20} />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Currently Learning</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Coffee className="text-amber-500" size={20} />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Fueled by Coffee</span>
              </div>
            </div>

            {/* Tagline with Code Block */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
                <p className="text-lg sm:text-xl text-gray-700 italic mb-6 font-medium">
                  "Exploring code, building ideas, and learning every day."
                </p>
                
                {/* Code Block */}
                <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 font-mono text-sm sm:text-base overflow-x-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">developer.js</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-400">const developer = {'{'}</div>
                    <div className="text-green-400 ml-4">name: <span className="text-yellow-300">"Yaswant Kumar"</span>,</div>
                    <div className="text-green-400 ml-4">passion: <span className="text-yellow-300">"coding"</span>,</div>
                    <div className="text-green-400 ml-4">status: <span className="text-yellow-300">"learning"</span>,</div>
                    <div className="text-green-400 ml-4">fuel: <span className="text-yellow-300">"coffee"</span></div>
                    <div className="text-blue-400">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                <Sparkles size={20} className="group-hover:animate-spin" />
                Let's Connect!
                <ArrowDown size={18} className="animate-bounce" />
              </button>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Yaswants77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Github className="text-gray-700 group-hover:text-black" size={20} />
                </a>
                <a
                  href="mailto:yaswantsingh589@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Mail className="text-gray-700 group-hover:text-blue-600" size={20} />
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Ready to start something amazing together
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;