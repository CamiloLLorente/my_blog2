import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import {ArrowRightCircle} from 'lucide-react';
import { getPosts, Post } from '../data/posts';
import image from "../../public/image/jesus.png";

const Home = (): JSX.Element => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setRecentPosts(fetchedPosts.slice(0, 3));
      setPopularPosts(fetchedPosts.sort((a, b) => b.views - a.views).slice(0, 3));
    };
    fetchPosts();
  }, []);


  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero image"
          className="w-full h-[700px] object-cover filter blur-[1.5px] brightness-50"
        />
      
        <div className="absolute container mx-auto inset-0 flex flex-col items-start justify-start px-20 py-40 text-center text-white">
          <div className=''>
            <img
              src={image}
              alt="Hero image"
              className="w-200 h-[200px] object-cover "
            />
        
          </div>
          <h1 className="text-white text-7xl font-bold  mb-2">
            El camino, la verdad y la vida.
          </h1>
          <h2 className="text-[#FFA400] text-4xl font-bold">
            Un viaje de fe y descubrimiento
          </h2>
        </div>
      </div>

      <section className="bg-[#f2f2f2]  py-[100px]">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl text-center text-[#FFA400] mb-4">Blogs</h2>
          <h2 className="text-5xl font-bold text-center text-[#004694] mb-10">LO MÁS VISTO</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
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
          <div className="flex justify-center g-4 mt-8">
            <Link
              to="/blog"
            >
              <button
                type="submit"
                className="bg-[#004694] text-white px-4 py-2 rounded hover:bg-[#003674] transition-colors flex "
              >
                <span className="mr-2">Ver mas</span> <span className="mt-[1px]"><ArrowRightCircle size={20} /></span>
              </button>
            </Link>
            
            
          </div>
        </div>
      </section>

      <section className="bg-[#E8E6E6]  py-[100px]">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl text-center text-[#FFA400] mb-4">Blogs</h2>
          <h2 className="text-5xl font-bold text-center text-[#004694] mb-10">LO MÁS VISTO</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
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
          <div className="flex justify-center g-4 mt-8">
            <Link
              to="/blog"
            >
              <button
                type="submit"
                className="bg-[#004694] text-white px-4 py-2 rounded hover:bg-[#003674] transition-colors flex "
              >
                <span className="mr-2">Ver mas</span> <span className="mt-[1px]"><ArrowRightCircle size={20} /></span>
              </button>
            </Link>
            
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;