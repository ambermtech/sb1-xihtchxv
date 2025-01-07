import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types/project';

const CurrentProject = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchCurrentProject();
  }, []);

  async function fetchCurrentProject() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'in_progress')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      setCurrentProject(data);
    } catch (error) {
      console.error('Error fetching current project:', error);
    }
  }

  if (!currentProject) return null;

  return (
    <div 
      onClick={() => navigate(`/projects/${currentProject.id}`)}
      className="bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 
                transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <Code2 className="w-8 h-8 text-[#0ff]" />
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Currently Working On</h2>
          <p className="text-gray-400 mb-4">{currentProject.description}</p>
          <div className="inline-flex items-center gap-2 text-[#0ff] hover:text-[#0ff]/80 transition-colors">
            View Project <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;