import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Users, 
  MessageCircle, 
  Clock, 
  Target,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: Globe, level: 85 },
    { name: 'CSS', icon: Globe, level: 80 },
    { name: 'JavaScript', icon: Code, level: 75 },
    { name: 'C', icon: Code, level: 80 },
    { name: 'C++', icon: Code, level: 85 },
    { name: 'Java', icon: Database, level: 78 }
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: Lightbulb },
    { name: 'Teamwork', icon: Users },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Adaptability', icon: Target },
    { name: 'Time Management', icon: Clock }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-sky-50/50 to-indigo-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-sky-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A combination of technical proficiency and soft skills that drive my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Code className="text-sky-600" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-sky-600" size={20} />
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-sky-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="text-sky-600" size={28} />
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-sky-100 p-2 rounded-lg group-hover:bg-sky-200 transition-colors">
                        <skill.icon className="text-sky-600" size={24} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;