import { Link } from 'react-router-dom';
import './SectionCard.css';


interface SectionCardProps {
    title: string;
    description: string;
    color: string;
    url: string
    slug: string;
}



const SectionCard: React.FC<SectionCardProps> = ({ title, description, color, url }) => {
  const colorStyles = {
  yellow: {
    bg: '#FACC15',
    hoverBg: '#EAB308',
  },
  purple: {
    bg: '#A855F7',
    hoverBg: '#9333EA',
  },
  pink: {
    bg: '#F472B6',
    hoverBg: '#EC4899',
  },
  green: {
    bg: '#4ADE80',      // verde brillante
    hoverBg: '#22C55E',  // verde más oscuro
  },
  blue: {
    bg: '#60A5FA',       // azul claro
    hoverBg: '#3B82F6',  // azul intenso
  },
  red: {
    bg: '#F87171',       // rojo suave
    hoverBg: '#EF4444',  // rojo intenso
  },
};

    const styles = colorStyles[color]; // Cambia "purple" por el color deseado

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 w-full h-full" 
    onMouseLeave={(e) => {
      const child = e.currentTarget.children[0] as HTMLElement;
      child.style.backgroundColor = styles.bg;
    }}
    onMouseEnter={(e) => {
      const child = e.currentTarget.children[0] as HTMLElement;
      child.style.backgroundColor = styles.hoverBg;
    }}
    >
      <div
        className="text-white flex items-center justify-center p-8 h-40 rounded-t-2xl transition-all"
        style={{ backgroundColor: styles.bg }}
        
      >
        <h3 className="text-2xl font-bold text-center">{title}</h3>
      </div>
      <div className="bg-white p-6 flex flex-col justify-between text-center items-center">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={url}
          className="text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-300"
          style={{ backgroundColor: styles.bg }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.hoverBg)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.bg)}
        >
          Leer más
        </Link>

      </div>
    </div>


  );
}
export default SectionCard;
