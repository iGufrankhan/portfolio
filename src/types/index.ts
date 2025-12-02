export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
  date?: string;
image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  url?: string;
  tags?: string[];
  platform?: string;
}


