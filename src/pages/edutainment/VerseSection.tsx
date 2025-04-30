import { useParams } from "react-router-dom";
import CardFavorite from "../../components/CardFavorite";
import useVerses from "../../hook/useVerses";

const VerseSection = () => {
  const { name } = useParams<{ name?: string }>();
  const { verses, toggleFavorite } = useVerses(name);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      {verses.map((verse) => (
        <CardFavorite
          key={verse.id}
          id={verse.id}
          title={verse.title}
          favorite={verse.favorite}
          description={verse.description}
          slug={name || ""}
          onFavoriteUpdate={() => toggleFavorite(verse.id, verse.favorite)}
        />
      ))}
    </div>
  );
};

export default VerseSection;
