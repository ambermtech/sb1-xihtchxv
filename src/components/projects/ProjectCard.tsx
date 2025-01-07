import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-[#0ff]/50 transition-all duration-500 group">
        <div className="relative">
          <img
            src={project.image_url || 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'}
            alt={project.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(project.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
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
          
          <div className="flex gap-4 pt-2">
            {project.github_url && (
              <a
                href={project.github_url}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Source</span>
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;