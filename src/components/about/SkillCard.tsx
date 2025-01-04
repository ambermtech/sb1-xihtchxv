import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="text-center">
      <h3 className="text-[#0ff] mb-6 text-xl">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-[#111111] text-gray-300 text-sm rounded-full border border-white/10
                     hover:border-[#0ff]/30 hover:text-[#0ff] transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;