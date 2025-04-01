import { sectionsVerses } from "../data/data";
import { SectionVerses } from "../data/interfaces";

export const getSectionsVerses = async (): Promise<SectionVerses[]> => {
    return sectionsVerses;
 };