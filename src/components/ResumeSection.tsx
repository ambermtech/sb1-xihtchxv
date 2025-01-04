import React from 'react';
import { FileText, Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-colors duration-300">
      <div className="flex flex-col items-center text-center">
        <FileText className="w-12 h-12 text-[#0ff] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">Resume</h2>
        <p className="text-gray-400 mb-6">Download my resume to learn more about my experience and skills</p>
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] text-[#0ff] border border-[#0ff]/30 rounded-full 
                   hover:bg-[#0ff]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;