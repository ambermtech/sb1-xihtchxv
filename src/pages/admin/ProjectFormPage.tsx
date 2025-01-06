import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import ProjectForm from '../../components/admin/ProjectForm';
import ProjectUpdate from '../../components/admin/ProjectUpdate';
import type { Project, ProjectUpdate as ProjectUpdateType } from '../../types/project';

export default function ProjectFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [updates, setUpdates] = useState<ProjectUpdateType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProject();
      fetchUpdates();
    } else {
      setLoading(false);
    }
  }, [id]);

  async function fetchProject() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  }

  async function fetchUpdates() {
    try {
      const { data, error } = await supabase
        .from('project_updates')
        .select('*')
        .eq('project_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUpdates(data);
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  }

  if (loading) {
    return <div className="text-[#0ff]">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-2xl mb-8">
          {id ? 'Edit Project' : 'Create New Project'}
        </h1>

        <div className="bg-[#111111] rounded-lg p-6 border border-white/10">
          <ProjectForm project={project || undefined} mode={id ? 'edit' : 'create'} />
        </div>

        {project?.status === 'in_progress' && (
          <div className="mt-8">
            <h2 className="text-white text-xl mb-4">Project Updates</h2>
            
            <div className="bg-[#111111] rounded-lg p-6 border border-white/10 mb-6">
              <ProjectUpdate project={project} onUpdateAdded={fetchUpdates} />
            </div>

            <div className="space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-[#111111] rounded-lg p-6 border border-white/10"
                >
                  <h3 className="text-white font-medium mb-2">{update.title}</h3>
                  <p className="text-gray-400 mb-2">{update.content}</p>
                  <time className="text-sm text-gray-500">
                    {new Date(update.created_at).toLocaleDateString()}
                  </time>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}