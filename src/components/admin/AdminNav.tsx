import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, Plus } from 'lucide-react';

export default function AdminNav() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/admin" className="text-white font-bold">
              Admin Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/admin/projects/new"
              className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] text-[#0ff] 
                       border border-[#0ff]/30 rounded-md hover:bg-[#0ff]/10 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Link>
            
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-gray-400 hover:text-[#0ff] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}