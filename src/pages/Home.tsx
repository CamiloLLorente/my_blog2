import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import {ArrowRightCircle} from 'lucide-react';
import { getPosts, Post } from '../data/posts';
import image from "../../public/image/jesus.png";
import image2 from "../../public/image/pexels-photo-64779.webp";

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
          src={image2}
          alt="Hero image"
          className="w-full h-[85vh] object-cover "
        />
      
        <div className="absolute container mx-auto inset-0 flex flex-col items-start justify-start px-5 py-20 text-center text-white">
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
            <h2 className="text-4xl text-center text-[#FFA400] mb-4">Blogs</h2>
            <h2 className="text-4xl font-bold text-center text-[#004694] mb-5">LO MÁS VISTO</h2>
            <p className="text-center text-lg text-gray-500 mb-[50px] max-w-[800px] mx-auto">
            Explora nuestros blogs más recientes y populares. Encuentra inspiración, conocimiento y descubre nuevas perspectivas en cada artículo.
            </p>

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

      <section className="bg-[#E8E6E6]  py-[60px]">
        <div className="container mx-auto px-6 ">
          <h2 className="text-4xl text-center text-[#FFA400] mb-2">Descubre y Aprende</h2>
          <h2 className="text-4xl font-bold text-center text-[#004694] mb-5"> Enriquese tus conocimientos</h2>
          <p className="text-center text-lg text-gray-500 mb-[80px] max-w-[800px] mx-auto">
            Explora nuestros blogs más recientes y populares. Encuentra inspiración, conocimiento y descubre nuevas perspectivas en cada artículo.</p>
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