import React from 'react';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Docker', 'CI/CD', 'Agile'],
  },
];

const SkillsSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;