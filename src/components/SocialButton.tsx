import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  className?: string;
}

const SocialButton = ({ icon: Icon, label, href, className = '' }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-14 h-14 rounded-full flex items-center justify-center
        bg-[#111111] border border-white/10
        hover:border-[#0ff]/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]
        transition-all duration-300 group
        ${className}
      `}
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#0ff] transition-colors" />
    </a>
  );
};

export default SocialButton;