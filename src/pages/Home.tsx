import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import image from "../../public/image/jesus.png";
import image2 from "../../public/image/fondo2.jpeg";
import Card from '../components/Card';
import { useEdutainment } from '../hook/edutainment';
import { usePosts } from '../hook/post';

const Home = (): JSX.Element => {
 
  const {posts} = usePosts();
  const {edutainmentFilter} = useEdutainment();
  const recentPosts = posts.slice(0, 3);
  const edutainment = edutainmentFilter.slice(0, 3);
 

  return (
    <div>
     
      <section className="bg-[#004694]  text-white">
        <div className="container mx-auto px-6 pt-40 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bienvenido a tu Espacio de Fe
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Un lugar para crecer y reflexionar. Genera un tema de estudio bíblico ¡y profundiza en tu camino espiritual!
          </p>
          <button
            className="bg-[#FFA400] mt-8 inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-8 rounded-full "
          >
            Generar Idea de Proyecto
          </button>
        </div>
      </section>

      <section className="bg-[#f2f2f2]  py-[100px]">
        <div className="container mx-auto px-6 ">
            <h2 className="text-4xl text-center text-[#FFA400] mb-4">Blogs</h2>
            <h2 className="text-4xl font-bold text-center text-[#004694] mb-5">LO MÁS VISTO</h2>
            <p className="text-center text-lg text-gray-500 mb-[50px] max-w-[800px] mx-auto">
            Explora nuestros blogs más recientes y populares. Encuentra inspiración, conocimiento y descubre nuevas perspectivas en cada artículo.
            </p>

          <div className="grid gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                tags={post.tags}
                date={post.date}
                image={post.image}
                link={`/post/${post.id}`}
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
            {edutainment.map((edutainment) => (
              <Card
                key={edutainment.id}
                id={edutainment.id}
                title={edutainment.title}
                description={edutainment.description}
                tags={edutainment.tags}
                image={edutainment.image}
                link={edutainment.link}
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