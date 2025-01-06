/*
  # Project Management Schema

  1. New Tables
    - `projects`
      - Core project information
      - Status tracking
      - Timestamps
    - `project_updates`
      - Timeline/blog entries for projects
      - Links to parent project
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL CHECK (status IN ('in_progress', 'completed')),
  image_url text,
  technologies text[] DEFAULT '{}',
  github_url text,
  demo_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project updates table
CREATE TABLE IF NOT EXISTS project_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
CREATE POLICY "Allow public read access to projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated admin to manage projects"
  ON projects
  USING (auth.role() = 'authenticated');

-- Create policies for project updates
CREATE POLICY "Allow public read access to project updates"
  ON project_updates
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated admin to manage project updates"
  ON project_updates
  USING (auth.role() = 'authenticated');

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating timestamp
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();