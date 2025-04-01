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

    return (
        <Link to={url} className="cardSection">
            <div className="circle" style={{ backgroundColor: color }}>
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{description}</p>
                <a href="#" style={{background:color}}>Read More</a>
             </div>
        </Link>
    );
}
export default SectionCard;






