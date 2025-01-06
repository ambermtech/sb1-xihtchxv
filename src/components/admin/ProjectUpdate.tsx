import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../types/project';

interface ProjectUpdateProps {
  project: Project;
  onUpdateAdded: () => void;
}

export default function ProjectUpdate({ project, onUpdateAdded }: ProjectUpdateProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('project_updates')
        .insert([{
          project_id: project.id,
          ...formData
        }]);

      if (error) throw error;
      
      setFormData({ title: '', content: '' });
      onUpdateAdded();
    } catch (error) {
      console.error('Error adding update:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">Update Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          required
          placeholder="What did you work on?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Details</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md bg-[#111111] border border-white/10 
                   text-white focus:border-[#0ff]/50 focus:ring-1 focus:ring-[#0ff]/50"
          required
          placeholder="Describe what you accomplished..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-[#111111] text-[#0ff] border border-[#0ff]/30 
                 rounded-md hover:bg-[#0ff]/10 transition-all duration-300
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Adding Update...' : 'Add Update'}
      </button>
    </form>
  );
}