import { useState, useEffect, useCallback } from 'react';
import { FavoriteList } from '../data/interfaces';



const FAVORITES_KEY = 'favorite';

const  useFavorite = () => {
     const [favorites, setFavorites] = useState<FavoriteList>({}); // 👈 CAMBIADO AQUÍ

    const getFavorites = useCallback( async () => {
        const storedFavorites = await localStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
            const parsedFavorites = JSON.parse(storedFavorites);
            setFavorites(parsedFavorites);
        } else {
            setFavorites({});
        }
    }, []);
 

    useEffect(() => {
       getFavorites();
    }, [getFavorites]);

    

    return {
        favorites,
    };
}
export default useFavorite;