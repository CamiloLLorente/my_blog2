import { useState, useEffect } from 'react';
import Search from '../components/Search';
import BlogPost from '../components/Card';
import { getPosts, Post } from '../data/posts';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#004694] mb-8 ">Blog</h1>
      <Search onSearch={handleSearch} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            tags={post.tags}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;