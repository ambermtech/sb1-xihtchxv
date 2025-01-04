import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';
import FeaturedProject from '../components/projects/FeaturedProject';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';

const technologies = ['All', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-white mb-4">selected works</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            a collection of projects that showcase my expertise in building
            digital products and experiences
          </p>
        </div>

        <FeaturedProject />
        
        <div className="mt-32">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-white mb-6 md:mb-0">past projects</h2>
            <ProjectFilter 
              technologies={technologies}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => activeFilter === 'All' || project.technologies.includes(activeFilter))
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and AI-powered product recommendations.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    completionDate: '2024-02',
    technologies: ['React', 'Node.js', 'AWS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    achievements: [
      'Increased conversion rate by 45%',
      'Reduced load time by 60%',
      'Implemented AI recommendations'
    ]
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Enterprise task management platform with real-time collaboration and automated workflow features.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    completionDate: '2023-11',
    technologies: ['TypeScript', 'React', 'Node.js'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    achievements: [
      'Automated 75% of routine tasks',
      'Reduced project completion time by 30%',
      'Seamless integration with existing tools'
    ]
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Advanced content generation platform using GPT-4 for creating marketing copy and social media posts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    completionDate: '2023-09',
    technologies: ['Python', 'React', 'AWS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    achievements: [
      'Generated 10k+ unique articles',
      'Achieved 98% user satisfaction',
      'Reduced content creation time by 80%'
    ]
  }
];

export default Projects;