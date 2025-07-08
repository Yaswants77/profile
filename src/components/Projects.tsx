import React from 'react';
import { Github, ExternalLink, Code, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, mobile-first design, and optimized performance.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: true
    },
    {
      title: "Learning Management System",
      description: "A comprehensive web application for managing educational content, student progress, and course materials. Built with modern web technologies.",
      tags: ["HTML", "CSS", "JavaScript", "Database Design"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: false
    },
    {
      title: "Data Structures & Algorithms",
      description: "Collection of DSA implementations in C++ and Java, including sorting algorithms, search techniques, and problem-solving approaches.",
      tags: ["C++", "Java", "Algorithms", "Problem Solving"],
      github: "https://github.com/Yaswants77",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and learning journey in software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-sky-200 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-sky-100 p-2 rounded-lg group-hover:bg-sky-200 transition-colors">
                      <Code className="text-sky-600" size={24} />
                    </div>
                    {project.featured && (
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github className="text-gray-700" size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink className="text-gray-700" size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Yaswants77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;