import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[#004694] mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
      <Link
        to="/"
        className="bg-[#004694] text-white px-4 py-2 rounded-md hover:bg-[#003674] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
