import React from 'react';

const BioSection = () => {
  return (
    <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
      <p className="text-gray-400 leading-relaxed mb-6">
        With over 4 years of experience in software development, I've had the privilege 
        of working on diverse projects that challenge conventional thinking and push 
        technological boundaries.
      </p>
      <p className="text-gray-400 leading-relaxed">
        My focus lies in creating scalable, user-centric applications that solve real-world 
        problems. I'm particularly passionate about AI, cloud architecture, and building 
        high-performance web applications.
      </p>
    </div>
  );
};

export default BioSection;