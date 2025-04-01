import { useEffect, useState } from "react";
import CardFavorite from "../../components/CardFavorite";
import { getVerseById } from "../../services/sectionVersesService";
import { Verse } from "../../data/interfaces";
import { useParams } from "react-router-dom";

const VerseSection = () => {
  const [verses, setVerses] = useState<Verse[]>([]);

  const { name } = useParams<{ name?: string }>(); // Hacemos que id sea opcional

  useEffect(() => {
    if (!name) return;

    const getVerses = async () => {
      try {
        const response = await getVerseById(name);
        setVerses(response || []);
      } catch (error) {
        console.error("Error fetching verses:", error);
      }
    };

    getVerses();
  }, [name]);
  

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      
      {verses.map((verse) => (
        <CardFavorite
          key={verse.id}
          title={verse.title}
          description={verse.description}
        />
      ))}
    </div>
  );
};

export default VerseSection;
