import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Users, 
  MessageCircle, 
  Clock, 
  Target,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'C Programming', icon: Code, level: 80, description: 'My first love in programming' },
    { name: 'C++', icon: Code, level: 85, description: 'Object-oriented problem solving' },
    { name: 'Java', icon: Database, level: 75, description: 'Learning enterprise development' },
    { name: 'HTML', icon: Globe, level: 85, description: 'Building web foundations' },
    { name: 'CSS', icon: Globe, level: 80, description: 'Making things beautiful' },
    { name: 'JavaScript', icon: Code, level: 70, description: 'Bringing websites to life' }
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: Lightbulb, description: 'Love breaking down complex challenges' },
    { name: 'Teamwork', icon: Users, description: 'Believe in collaborative success' },
    { name: 'Communication', icon: MessageCircle, description: 'Explaining code in simple terms' },
    { name: 'Adaptability', icon: Target, description: 'Quick to learn new technologies' },
    { name: 'Time Management', icon: Clock, description: 'Balancing studies and projects' },
    { name: 'Curiosity', icon: Heart, description: 'Always asking "how does this work?"' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Skills & Strengths
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's what I bring to the table - a mix of technical knowledge and personal qualities 
            that help me grow every day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Code className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
                <p className="text-gray-600">Languages & technologies I'm learning</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-blue-600" size={20} />
                      <div>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <p className="text-xs text-gray-500">{skill.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700 italic">
                💡 Currently expanding my knowledge in web development and exploring new frameworks!
              </p>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-3 rounded-lg">
                <Heart className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Personal Strengths</h3>
                <p className="text-gray-600">Qualities that define my approach</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-100 hover:border-green-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                        <skill.icon className="text-green-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 italic">
                🌱 I believe that soft skills are just as important as technical skills in building great software!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-indigo-600" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">My Learning Philosophy</h3>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "Every expert was once a beginner. I embrace challenges, learn from failures, 
            and celebrate small wins. My goal isn't just to write code, but to understand 
            the 'why' behind every solution."
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="bg-white/70 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
              Growth Mindset
            </span>
            <span className="bg-white/70 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Continuous Learning
            </span>
            <span className="bg-white/70 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Problem-First Approach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;