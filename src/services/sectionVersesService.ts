import { sectionsVerses, verses } from "../data/data";
import { SectionVerses, Verse } from "../data/interfaces";

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

export const setFavorite = (slug: string, id: number,favorite: boolean) => {
    const storedVerse = localStorage.getItem(`verse_${slug}`);
    if (storedVerse) {
        const versesArray = JSON.parse(storedVerse) as Verse[];
        const verseIndex = versesArray.findIndex((v) => v.id === id);
        if (verseIndex !== -1) {
            versesArray[verseIndex].favorite = favorite;
            localStorage.setItem(`verse_${slug}`, JSON.stringify(versesArray));
        }
    }
}