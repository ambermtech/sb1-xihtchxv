export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'in_progress' | 'completed';
  image_url: string;
  technologies: string[];
  github_url?: string;
  demo_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectUpdate {
  id: string;
  project_id: string;
  title: string;
  content: string;
  created_at: string;
}