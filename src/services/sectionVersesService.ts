import { sectionsVerses, verses } from "../data/data";
import { SectionVerses, Verse, FavoriteList } from "../data/interfaces";



export const getSectionsVerses = async (): Promise<SectionVerses[]> => {
    return sectionsVerses;
 };

export const getVerseByName = async (slug: string): Promise<Verse[] | undefined> => {
    const storedVerse = localStorage.getItem(`verse_${slug}`);
    if (storedVerse) {
        return JSON.parse(storedVerse) as Verse[];
    }

    const verse = verses[slug];
    if (!verse) {
        throw new Error(`Verse with slug ${slug} not found`);
    }

    localStorage.setItem(`verse_${slug}`, JSON.stringify(verse));
    return verse;
};

export const setFavorite = (slug: string, id: number,favorite: boolean, title:string,description:string) => {
    const storedVerse = localStorage.getItem(`verse_${slug}`);
    
    const storedFavorite = localStorage.getItem(`favorite`);
    if (storedVerse) {
        const versesArray = JSON.parse(storedVerse) as Verse[];
        const verseIndex = versesArray.findIndex((v) => v.id === id);
        if (verseIndex !== -1) {
            versesArray[verseIndex].favorite = favorite;
            localStorage.setItem(`verse_${slug}`, JSON.stringify(versesArray));
        }
    }
    if (storedFavorite) {
        const favorites = JSON.parse(storedFavorite) as FavoriteList;
        if (!favorites[slug]) {
            favorites[slug] = [];
        }

        const index = favorites[slug].findIndex(v => v.id === id);

        if (favorite && index === -1) {
            const newFavorite = { id, title, description, favorite };
            console.log("newFavorite",newFavorite);
            favorites[slug].push(newFavorite);
            console.log("favorites",favorites);
            
        } else if (!favorite && index !== -1) {
            favorites[slug].splice(index, 1);
        }
        console.log("favorite",favorites);
        localStorage.setItem(`favorite`, JSON.stringify(favorites));
       
    }else {
        const favorites: FavoriteList = {
            [slug]: [{ id }]
        };
        localStorage.setItem(`favorite`, JSON.stringify(favorites));
    }
}