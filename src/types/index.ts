
export interface Education {
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  cgpa?: string;
  percentage?: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  period: string;
  technologies: string[];
  link?: string;
  points: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface Social {
  platform: string;
  url: string;
  username: string;
}
