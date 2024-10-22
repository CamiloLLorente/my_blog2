import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import BlogPost from '../components/BlogPost';
import { getPosts, Post } from '../data/posts';

const Home = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setAllPosts(fetchedPosts);
      setRecentPosts(fetchedPosts.slice(0, 3));
      setPopularPosts(fetchedPosts.sort((a, b) => b.views - a.views).slice(0, 3));
    };
    fetchPosts();
  }, []);

  const handleSearch = (query: string) => {
    // Implementar la lógica de búsqueda aquí si es necesario
    console.log('Búsqueda:', query);
  };

  return (
    <div>
      <div className="relative mb-12">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero image"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">Bienvenido a MyBlog</h1>
        </div>
      </div>

      <p className="text-xl mb-8 text-center">Descubre nuestros últimos artículos y mantente informado.</p>
      
      <Search onSearch={handleSearch} />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#004694] mb-4">Lo más reciente</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#004694] mb-4">Lo más visto</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {popularPosts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link
          to="/blog"
          className="bg-[#004694] text-white px-6 py-3 rounded-md text-lg hover:bg-[#003674] transition-colors"
        >
          Ver todos los artículos
        </Link>
      </div>
    </div>
  );
};

export default Home;