import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  completionDate: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  achievements: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-[#0ff]/50 transition-all duration-500 group">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        
        <p className="text-gray-400">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#0a0a0a] text-[#0ff]/80 text-xs rounded-full border border-[#0ff]/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {project.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        
        <div className="flex gap-4 pt-2">
          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Source</span>
          </a>
          <a
            href={project.demoUrl}
            className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;