import { FavoriteList } from "../../data/interfaces";
import  useFavorite  from "../../hook/useFavorite";
import CardFavorite from "../../components/CardFavorite";
const FavoriteVerses = () => {
  const { favorites } = useFavorite();
  const favoritesObject = favorites as FavoriteList;

  console.log(favorites);
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      {Object.entries(favoritesObject).map(([category, verses]) => (
        <div key={category}>
            <h2 className="text-2xl font-semibold text-[#004694] mb-4">
            {category.toUpperCase().replace(/_/g, " ")}
            </h2>
          {verses.map((verse) => ( 
            <CardFavorite
              key={verse.id}
              id={verse.id}
              title={verse.title}
              favorite={verse.favorite}
              description={verse.description}
              slug={category || ""}
              onFavoriteUpdate={() => {}}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FavoriteVerses;
