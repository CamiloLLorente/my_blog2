export interface BlogPostProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date?: string;
  image: string;
  link: string;
}