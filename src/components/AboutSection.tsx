import React from 'react';
import ProfileCard from './ProfileCard';
import CurrentProject from './CurrentProject';
import ResumeSection from './ResumeSection';
import SocialButton from './SocialButton';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <ProfileCard />

      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <CurrentProject />
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <ResumeSection />
      </div>

      <div className="col-span-12 flex justify-center gap-6 py-4">
        <SocialButton icon={Github} label="GitHub" href="https://github.com" />
        <SocialButton icon={Twitter} label="Twitter" href="https://twitter.com" />
        <SocialButton icon={Instagram} label="Instagram" href="https://instagram.com" />
        <SocialButton icon={Youtube} label="YouTube" href="https://youtube.com" />
      </div>
    </div>
  );
};

export default AboutSection;