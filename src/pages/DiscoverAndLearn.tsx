import { useEffect, useState } from "react";
import Search from "../components/Search";
import { getPosts, Post } from "../data/posts";
import Card from '../components/Card';

const DiscoverAndLearn = () => {
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
    console.log('Buscando:', query);
  }
    

  return (
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#004694] mb-8 ">Blog</h1>
      <Search onSearch={handleSearch} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card
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

export default DiscoverAndLearn;
