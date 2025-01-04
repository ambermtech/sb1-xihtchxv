import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    link: '#'
  }
];

const ProjectCarousel = () => {
  return (
    <section className="p-4">
      <div className="bg-[#111111] rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-80 group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <a href={project.link} className="text-white flex items-center gap-2 hover:text-[#0ff]">
                    View Project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-white font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;