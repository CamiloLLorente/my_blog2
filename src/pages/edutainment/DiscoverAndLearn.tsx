import { useEffect, useState } from "react";
// import Search from "../../components/Search";
import {Edutainment, getEdutainment } from "../../data/posts";
import Card from '../../components/Card';

const DiscoverAndLearn = () => {
  // const [edutainment, setEdutainment] = useState<Edutainment[]>([]);
  const [edutainmentFilter, setEdutainmentFilter] = useState<Edutainment[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchEdutainment = await getEdutainment();
      // setEdutainment(fetchEdutainment);
      setEdutainmentFilter(fetchEdutainment);
    };
    fetchPosts();
  }, []);

  // const handleSearch = (query: string) => {
  //   console.log('Buscando:', query);
  // }
  
  return (
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#004694] mb-8 ">Aprende y Diviertete</h1>
      {/* <Search onSearch={handleSearch} /> */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {edutainmentFilter.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            tags={post.tags}
            image={post.image}
            link={`/blog/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverAndLearn;
