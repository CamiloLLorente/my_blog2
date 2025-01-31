import { useState, useEffect } from 'react';
import { fetchPosts, getPostById } from '../services/blogService';
import { Post } from '../data/interfaces';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };
    getPosts();
  }, []);

  return { posts, filteredPosts, setFilteredPosts };
};


export const usePostView = (id:string) => {

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const fetchedPost = await getPostById(parseInt(id, 10));
        if (fetchedPost) {
          setPost(fetchedPost);
        }
      }
    };
    fetchPost();
  }, [id]);

  return { post };
}