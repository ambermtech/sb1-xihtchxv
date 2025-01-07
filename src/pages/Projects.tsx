import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import FeaturedProject from '../components/projects/FeaturedProject';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import type { Project } from '../types/project';

const technologies = ['All', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-white mb-4">selected works</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            a collection of projects that showcase my expertise in building
            digital products and experiences
          </p>
        </div>

        {projects.length > 0 && <FeaturedProject project={projects[0]} />}
        
        <div className="mt-32">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-white mb-6 md:mb-0">past projects</h2>
            <ProjectFilter 
              technologies={technologies}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => activeFilter === 'All' || project.technologies.includes(activeFilter))
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;