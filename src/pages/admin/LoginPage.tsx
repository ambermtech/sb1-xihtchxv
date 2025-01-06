import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-[#0ff]">Loading...</div>
    </div>;
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl mb-8 text-center">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}