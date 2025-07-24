import { useParams } from "react-router-dom";
import CardFavorite from "../../components/CardFavorite";
import useVerses from "../../hook/useVerses";

const VerseSection = () => {
  const { name } = useParams<{ name?: string }>();
  const { verses, toggleFavorite } = useVerses(name);
  console.log("verses", verses);
  return (
    <div className="container mx-auto px-4 py-[100px]">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center">

        {verses.map((verse) => (
          <CardFavorite
            key={verse.id}
            id={verse.id}
            title={verse.title}
            favorite={verse.favorite}
            description={verse.description}
            slug={name || ""}
            onFavoriteUpdate={() => toggleFavorite(verse.id, verse.favorite,verse.title,verse.description)}
          />
        ))}
      </div>
    </div>
  );
};

export default VerseSection;
