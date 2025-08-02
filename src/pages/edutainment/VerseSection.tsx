import { useParams } from "react-router-dom";
import CardFavorite from "../../components/CardFavorite";
import useVerses from "../../hook/useVerses";
import useFavorite from "../../hook/useFavorite";
import Breadcrumb, { BreadcrumbItem } from "../../components/Breadcrumb";

const VerseSection = () => {
  const { name } = useParams<{ name?: string }>();
  const { verses, setRefresh } = useVerses(name);
  const { toggleFavorite } = useFavorite();

  const formattedName = name
    ? name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Sección";

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Inicio", path: "/" },
    { label: "Descubre y Aprende", path: "/discover-and-learn" },
    { label: "Sección de Versículos", path: "/bible_verses_section" },
    { label: formattedName },
  ];

  return (
    <div className="container mx-auto px-4 py-[100px]">
      <Breadcrumb items={breadcrumbItems} /> 
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        {formattedName}
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
            onFavoriteUpdate={() => {
              toggleFavorite(verse.id, verse.favorite, verse.title, verse.description, name || "");
              setRefresh((prev) => !prev);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VerseSection;
