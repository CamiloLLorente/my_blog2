import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePostView } from '../../hook/post';
import NotFound from '../NotFound';

const PostView = () => {
  const { id } = useParams<{ id?: string }>(); // Hacemos que id sea opcional
  const navigate = useNavigate();

  
  if (!id) {
    navigate("/404_no_found"); // Redirige sin recargar la página
  }
 

  const { post } = usePostView(id || ""); // Usamos `||` en lugar de `??` para simplificar

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
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