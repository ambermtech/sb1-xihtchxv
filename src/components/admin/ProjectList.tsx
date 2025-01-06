import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../types/project';
import { Edit, Trash2 } from 'lucide-react';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }

  if (loading) {
    return <div className="text-[#0ff]">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-white text-2xl mb-8">Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111] rounded-lg p-6 border border-white/10 hover:border-[#0ff]/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'in_progress' 
                      ? 'bg-[#0ff]/10 text-[#0ff]' 
                      : 'bg-green-500/10 text-green-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/admin/projects/${project.id}/edit`}
                  className="p-2 text-gray-400 hover:text-[#0ff] transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}