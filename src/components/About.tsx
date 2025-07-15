import React from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-sky-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-sky-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm currently pursuing my B.Tech degree at{' '}
                <span className="font-semibold text-sky-600">Vivekananda Global University, Jaipur</span>,
                where I'm in my final year. My journey in technology started with curiosity 
                and has grown into a passionate pursuit of software development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-sky-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm deeply passionate about software development, problem-solving, and 
                learning new technologies. Every day brings new challenges that I embrace 
                with enthusiasm and determination.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-sky-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Learning Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm actively expanding my technical skills across multiple programming 
                languages and technologies. My current focus includes:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <div key={tech} className="bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                    <span className="text-sm font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Looking Forward</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm excited to contribute to innovative projects and continue growing 
                as a developer. My goal is to build solutions that make a difference 
                while constantly learning and adapting to new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;