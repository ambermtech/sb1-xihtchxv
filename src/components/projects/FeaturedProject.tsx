import React from 'react';
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#0ff]">
            <Code2 className="w-5 h-5" />
            <span className="text-sm font-medium">Featured Project</span>
          </div>
          
          <h3 className="text-4xl font-bold text-white">AI-Powered Analytics Dashboard</h3>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>In Progress (Est. Q2 2024)</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg">
            Real-time analytics platform that leverages AI to provide predictive insights
            and automated reporting. Currently implementing advanced visualization features
            and machine learning models for trend analysis.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Real-time data processing pipeline</li>
              <li>AI-powered predictive analytics</li>
              <li>Custom visualization engine</li>
              <li>Automated report generation</li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Python', 'TensorFlow', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#0a0a0a] text-[#0ff]/80 text-sm rounded-full border border-[#0ff]/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Source</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-[#0ff] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
        
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            alt="Project Preview"
            className="rounded-xl w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;