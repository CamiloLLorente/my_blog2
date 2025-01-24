import { posts } from '../data/data';
import { Post } from '../data/interfaces';

export const getPosts = (): Promise<Post[]> => {
  return Promise.resolve(posts);
};

export const getPostById = (id: number): Promise<Post | undefined> => {
  const post = posts.find(p => p.id === id);
  return Promise.resolve(post);
};

export const fetchPosts = async (): Promise<Post[]> => {
  return await getPosts();
};


