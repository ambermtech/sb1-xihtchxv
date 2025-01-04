import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/about')}
      className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#111111] rounded-3xl p-8 border border-white/10 
                hover:border-[#0ff]/50 transition-all duration-300 cursor-pointer group"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate('/about');
        }
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#0ff]/30 p-1 
                      group-hover:ring-[#0ff] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="hero-text text-white mb-2 group-hover:text-[#0ff] transition-colors duration-300">amberm</h1>
        <p className="text-[#0ff]/80 mb-4">@ambermtech</p>
        <p className="text-gray-400 text-xl">Developer with 4+ years of experience</p>
      </div>
    </div>
  );
};

export default ProfileCard;