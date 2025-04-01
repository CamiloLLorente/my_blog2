import { sectionsVerses, verses } from "../data/data";
import { SectionVerses, Verse } from "../data/interfaces";

export const getSectionsVerses = async (): Promise<SectionVerses[]> => {
    return sectionsVerses;
 };

export const getVerseById = async (id: string): Promise<Verse[] | undefined> => {
    const verse = verses[id];
    if (!verse) {
        throw new Error(`Verse with id ${id} not found`);
    }   
    return verse;
};