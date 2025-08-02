import { FavoriteList } from "../../data/interfaces";
import  useFavorite  from "../../hook/useFavorite";
import CardFavorite from "../../components/CardFavorite";
const FavoriteVerses = () => {
  const { favorites, toggleFavorite } = useFavorite();
  
  const favoritesObject = favorites as FavoriteList;

  console.log(favorites);
  const renderFavorites = () => {
    return (
         <div className="container mx-auto px-4 mt-6" >
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      {Object.entries(favoritesObject).map(([category, verses]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold text-[#004694] my-6">
          {category.toUpperCase().replace(/_/g, " ")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center mb-8">
          {verses.map((verse) => ( 
            <CardFavorite
              key={verse.id}
              id={verse.id}
              title={verse.title}
              favorite={verse.favorite}
              description={verse.description}
              slug={category || ""}
              onFavoriteUpdate={() => toggleFavorite(verse.id, verse.favorite, verse.title, verse.description, category || "")}
            />
          ))}
          </div>
        </div>
      ))}
      <Link to="/bible_verses_section" className="text-blue-600 hover:underline">
        <button className="bg-green-600 text-white px-4 py-3 rounded-md my-6  hover:bg-green-700 hover:text-white transition-colors">
          Añadir mas versículos a favoritos
        </button>
      </Link>
    </div>
    );
  };


  
  return (
    !favorites || Object.keys(favorites).length === 0 ? (
      <div className="container mx-auto px-4 py-[100px]">
        <h1 className="text-3xl font-bold text-[#004694] mb-8">No tienes versículos favoritos</h1>
        <p>Agrega algunos versículos a tus favoritos para verlos aquí.</p>
      </div>
    ) : (
      renderFavorites()
    )
  
 
  );
};

export default FavoriteVerses;
