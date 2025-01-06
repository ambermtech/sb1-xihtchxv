import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../types/project';

interface ProjectFormProps {
  project?: Project;
  mode: 'create' | 'edit';
}

export default function ProjectForm({ project, mode }: ProjectFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    status: project?.status || 'in_progress',
    image_url: project?.image_url || '',
    technologies: project?.technologies || [],
    github_url: project?.github_url || '',
    demo_url: project?.demo_url || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'create') {
        const { error } = await supabase
          .from('projects')
          .insert([formData]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .update(formData)
          .eq('id', project!.id);
        if (error) throw error;
      }
      
      navigate('/admin');
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as 'in_progress' | 'completed' })}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
        >
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Image URL</label>
        <input
          type="url"
          value={formData.image_url}
          onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Technologies (comma-separated)</label>
        <input
          type="text"
          value={formData.technologies.join(', ')}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()) })}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">GitHub URL</label>
          <input
            type="url"
            value={formData.github_url}
            onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
            className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                     text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Demo URL</label>
          <input
            type="url"
            value={formData.demo_url}
            onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
            className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                     text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#111111] text-[#0ff] border border-[#0ff]/30 
                   rounded-md hover:bg-[#0ff]/10 transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : mode === 'create' ? 'Create Project' : 'Update Project'}
        </button>
      </div>
    </form>
  );
}