import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/blogService';
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