import { PlusCircle } from "lucide-react";
import React from 'react';
import { setFavorite } from "../../services/sectionVersesService";

interface CardFavoriteProps {
    id: number;
    title: string;
    description: string;
    favorite: boolean;
    slug: string;
    onFavoriteUpdate: () => void; // Nueva prop para notificar cambios
}

const CardFavorite: React.FC<CardFavoriteProps> = ({ id, title, description, favorite, slug, onFavoriteUpdate }) => {

    const handleFavoriteClick = async () => {
        // await setFavorite(slug, id, !favorite, title, description);
        onFavoriteUpdate(); // Notificar al componente padre
    };

    return (
        <div className="relative w-full max-w-[500px] p-4 bg-white rounded-2xl shadow-lg border">
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
          >
            {favorite ? <PlusCircle size={30} color='green'/> : <PlusCircle size={30}  color='grey'/>}
          </button>
          <div className="flex flex-col items-center">
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
};

export default CardFavorite;