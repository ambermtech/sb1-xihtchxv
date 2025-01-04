import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const CurrentProject = () => {
  return (
    <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-colors duration-300">
      <div className="flex items-start gap-4">
        <Code2 className="w-8 h-8 text-[#0ff]" />
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Currently Working On</h2>
          <p className="text-gray-400 mb-4">Building an AI-powered code analysis tool</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0ff] hover:text-[#0ff]/80 transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;