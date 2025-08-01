import { sectionsVerses, verses } from "../data/data";
import { SectionVerses, Verse, FavoriteList } from "../data/interfaces";



export const getSectionsVerses = async (): Promise<SectionVerses[]> => {
    return sectionsVerses;
 };

export const getVerseBySlug = async (slug: string): Promise<Verse[] | undefined> => {
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

export const setFavoriteStorage = async (slug: string, id: number,favorite: boolean, title:string,description:string) => {
    
    const storedFavorite = localStorage.getItem(`favorite`);
 
    if (storedFavorite) {
        const favorites = JSON.parse(storedFavorite) as FavoriteList;
        if (!favorites[slug]) {
            favorites[slug] = [];
        }

        const index = favorites[slug].findIndex(v => v.id === id);

        if (favorite && index === -1) {
            const newFavorite = { id, title, description, favorite };
            favorites[slug].push(newFavorite);
            
        } else if (!favorite && index !== -1) {
            favorites[slug].splice(index, 1);
            if (favorites[slug].length === 0) {
                delete favorites[slug];
            }
        }

        console.log(favorites);
        localStorage.setItem(`favorite`, JSON.stringify(favorites));
    }else {
        const favorites: FavoriteList = {
            [slug]: [{ id, title, description, favorite }],
            
        };
        localStorage.setItem(`favorite`, JSON.stringify(favorites));
    }
}

export const updateVersesStorage = async (slug: string, id: number,favorite: boolean) => {
    const storedVerse =  localStorage.getItem(`verse_${slug}`);
    
    if (storedVerse) {
        const versesArray = JSON.parse(storedVerse) as Verse[];
        const verseIndex = versesArray.findIndex((v) => v.id === id);
        if (verseIndex !== -1) {
            versesArray[verseIndex].favorite = favorite;
            localStorage.setItem(`verse_${slug}`, JSON.stringify(versesArray));
        }
    }
 
}