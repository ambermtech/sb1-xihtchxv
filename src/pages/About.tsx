import React from 'react';
import BioSection from '../components/about/BioSection';
import SkillsSection from '../components/about/SkillsSection';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-white">about me</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16">
            passionate about crafting digital experiences that make a difference
          </p>
          
          <SkillsSection />
        </div>

        <div className="mt-16">
          <BioSection />
        </div>
      </div>
    </div>
  );
};

export default About;