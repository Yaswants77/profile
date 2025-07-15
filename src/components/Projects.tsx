import React from 'react';
import { Github, ExternalLink, Code, Star, Heart, Coffee } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "You're looking at it right now! Built this responsive portfolio from scratch to showcase my journey and skills. It's my digital home on the web.",
      story: "This was my first major web project. I wanted to create something that truly represents who I am as a person and developer.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: true,
      emoji: "🏠",
      status: "Live & Learning"
    },
    {
      title: "Student Management System",
      description: "A web application to help manage student records, grades, and course information. Built during my learning journey with HTML, CSS, and JavaScript.",
      story: "Created this to solve a real problem I saw in my college. It taught me about user experience and data management.",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: false,
      emoji: "📚",
      status: "Completed"
    },
    {
      title: "C++ Problem Solutions",
      description: "My collection of Data Structures and Algorithms solutions in C++. Each problem taught me something new about efficient coding.",
      story: "Started this repo to track my problem-solving journey. Every solution has comments explaining my thought process.",
      tags: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: false,
      emoji: "🧩",
      status: "Growing Daily"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects & Journey
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some projects I've built during my learning journey. Each one taught me something new 
            and helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 ${
                project.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-blue-100' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{project.emoji}</div>
                    <div>
                      {project.featured && (
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 mb-1">
                          <Star size={12} />
                          Featured
                        </div>
                      )}
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {project.status}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors group/link"
                      title="View on GitHub"
                    >
                      <Github className="text-gray-700 group-hover/link:text-black" size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors group/link"
                      title="Live Demo"
                    >
                      <ExternalLink className="text-gray-700 group-hover/link:text-blue-600" size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-700 italic">
                    💭 {project.story}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal note about projects */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-red-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">A Personal Note</h3>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Each project here represents hours of learning, debugging, and small victories. 
              I'm not just building code - I'm building my understanding of how technology 
              can solve real problems. Every bug I fix makes me a better developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full">
                <Coffee className="text-amber-500" size={18} />
                <span className="text-gray-700 font-medium">Built with lots of coffee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full">
                <Code className="text-blue-500" size={18} />
                <span className="text-gray-700 font-medium">And even more curiosity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Yaswants77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Github size={20} />
            Explore More on GitHub
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Follow my coding journey and see what I'm working on next!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;