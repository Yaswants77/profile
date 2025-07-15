import React from 'react';
import { GraduationCap, Heart, MapPin, Calendar, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Little About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's my story - from curiosity to passion, and everything in between
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi! I'm Yaswant, a final-year B.Tech student who fell in love with coding 
                during my first programming class. What started as curiosity has grown into 
                a genuine passion for creating solutions through code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every day, I wake up excited to learn something new, solve challenging problems, 
                and build projects that matter. I believe in the power of technology to make 
                life better, and I want to be part of that change.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Lightbulb className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">What Drives Me</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm driven by the "aha!" moments when a complex problem finally clicks, 
                the satisfaction of writing clean code, and the excitement of seeing an 
                idea come to life. I love collaborating with others and believe that 
                the best solutions come from diverse perspectives.
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Education & Background</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-500 mt-1" size={18} />
                  <div>
                    <h4 className="font-medium text-gray-900">Currently Pursuing</h4>
                    <p className="text-gray-600">B.Tech - Final Year</p>
                    <p className="text-sm text-gray-500">Vivekananda Global University, Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-green-500 mt-1" size={18} />
                  <div>
                    <h4 className="font-medium text-gray-900">Based in</h4>
                    <p className="text-gray-600">Jaipur, Rajasthan, India</p>
                    <p className="text-sm text-gray-500">The Pink City 🏛️</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Currently Learning</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {['C Programming', 'C++', 'Java', 'HTML & CSS', 'JavaScript', 'Data Structures'].map((skill) => (
                  <div key={skill} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm text-gray-600 italic">
                  "I'm always eager to learn new technologies and expand my skill set. 
                  Currently exploring web development and looking forward to diving deeper 
                  into full-stack development!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">☕</div>
              <h4 className="font-semibold text-gray-900">Coffee Lover</h4>
              <p className="text-sm text-gray-600">My code runs on coffee and curiosity</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌙</div>
              <h4 className="font-semibold text-gray-900">Night Owl</h4>
              <p className="text-sm text-gray-600">Best coding happens after midnight</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-900">Goal-Oriented</h4>
              <p className="text-sm text-gray-600">Always working towards the next milestone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;