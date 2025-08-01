import { useState, useEffect, useCallback } from 'react';
import { FavoriteList } from '../data/interfaces';
import { setFavoriteStorage, updateVersesStorage } from '../services/sectionVersesService';



const FAVORITES_KEY = 'favorite';

const  useFavorite = () => {
     const [favorites, setFavorites] = useState<FavoriteList>({}); // 👈 CAMBIADO AQUÍ
     const [refresh, setRefresh] = useState(false);

    const getFavorites = useCallback( async () => {
        const storedFavorites = await localStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites);
            setFavorites(parsedFavorites);
        } else {
            setFavorites({});
        }
    }, []);

    const toggleFavorite = useCallback(async (id: number, favorite: boolean,title:string,description:string, slug: string) => {
        if (!slug) return;
        try {
            await updateVersesStorage(slug, id, !favorite);
            await setFavoriteStorage(slug, id, !favorite, title,description);
            setRefresh((prev) => !prev); // Forzar actualización
        } catch (error) {
            console.error("Error updating favorite:", error);
        }
    },[]
    );
 

    useEffect(() => {
       getFavorites();
    }, [getFavorites, refresh]);

    

    return {
        favorites,
        toggleFavorite,
    };
}
export default useFavorite;