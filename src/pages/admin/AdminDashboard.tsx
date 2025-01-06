import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/auth/LoginForm';
import ProjectList from '../../components/admin/ProjectList';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminDashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-[#0ff]">Loading...</div>
    </div>;
  }

  if (!user) {
    return <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl mb-8 text-center">Admin Login</h1>
        <LoginForm />
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AdminNav />
      <div className="max-w-7xl mx-auto py-32 px-4">
        <ProjectList />
      </div>
    </div>
  );
}