import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types/project';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
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
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-[#0a0a0a] py-32 px-4 flex items-center justify-center">
      <div className="text-[#0ff]">Loading...</div>
    </div>;
  }

  if (!project) {
    return <div className="min-h-screen bg-[#0a0a0a] py-32 px-4 flex flex-col items-center justify-center">
      <div className="text-white mb-4">Project not found</div>
      <Link to="/projects" className="text-[#0ff] hover:underline">Back to Projects</Link>
    </div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0ff] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="bg-[#111111] rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{new Date(project.created_at).toLocaleDateString('en-US', { 
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>

              <h1 className="text-4xl font-bold text-white">{project.title}</h1>

              <div className="prose prose-invert">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#0a0a0a] text-[#0ff]/80 text-sm 
                             rounded-full border border-[#0ff]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] text-white 
                             border border-white/10 rounded-lg hover:border-[#0ff]/30 
                             hover:text-[#0ff] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] text-white 
                             border border-white/10 rounded-lg hover:border-[#0ff]/30 
                             hover:text-[#0ff] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div>
              <img
                src={project.image_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"}
                alt={project.title}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}