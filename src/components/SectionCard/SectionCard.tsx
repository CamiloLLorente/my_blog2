
interface SectionCardProps {
    title: string;
    description: string;
    color: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, color }) => {

    return (
        <div className={`max-w-sm rounded-lg shadow-lg overflow-hidden ${color} text-white`}>
            <div className="px-4 py-2 bg-black bg-opacity-20 text-sm font-semibold">Header</div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    );

}
export default SectionCard;






