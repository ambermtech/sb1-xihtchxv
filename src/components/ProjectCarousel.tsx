import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types/project';

const ProjectCarousel = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  return (
    <section className="p-4">
      <div className="bg-[#111111] rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-80 group"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image_url || 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <span className="text-white flex items-center gap-2 hover:text-[#0ff]">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;