import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById, Post } from '../data/posts';

const PostView = () => {
  const { id } = useParams<{ id: string }>();
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

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-8 rounded-lg" />
      <h1 className="text-4xl font-bold text-[#004694] mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Link
        to="/blog"
        className="bg-[#004694] text-white px-4 py-2 rounded-md hover:bg-[#003674] transition-colors"
      >
        Volver al blog
      </Link>
    </div>
  );
};

export default PostView;