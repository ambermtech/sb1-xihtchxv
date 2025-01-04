import React from 'react';

interface ProjectFilterProps {
  technologies: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter = ({ technologies, activeFilter, onFilterChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
            activeFilter === tech
              ? 'bg-[#0ff]/10 text-[#0ff] border border-[#0ff]/30'
              : 'bg-[#111111] text-gray-400 border border-white/10 hover:border-[#0ff]/30 hover:text-[#0ff]'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;