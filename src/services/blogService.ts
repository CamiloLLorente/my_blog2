import { getPosts, Post } from '../data/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  return await getPosts();
};


