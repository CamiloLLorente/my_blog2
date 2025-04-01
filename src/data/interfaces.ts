export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  views: number;
  tags: string[];
  image: string;
  content: string;
}

export interface Edutainment {
  id: number;
  title: string;
  description: string;
  views: number;
  tags: string[];
  image: string;
  content: string;
  link: string;
}
export interface SectionVerses {
  title: string;
  description: string;
  color: string;
  slug: string;
}
