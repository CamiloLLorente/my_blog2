import './SectionCard.css';


interface SectionCardProps {
    title: string;
    description: string;
    color: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, color }) => {

    return (
        <div className="cardSection">
            <div className="circle" style={{ backgroundColor: color }}>
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{description}</p>
                <a href="#" style={{background:color}}>Read More</a>
             </div>
        </div>
    );
}
export default SectionCard;






