import { useState, useEffect, useCallback } from "react";
import { getVerseByName, setFavorite } from "../services/sectionVersesService";
import { Verse } from "../data/interfaces";

const useVerses = (name?: string) => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchVerses = useCallback(async () => {
    if (!name) return;
    try {
      const response = await getVerseByName(name);
      setVerses(response || []);
    } catch (error) {
      console.error("Error fetching verses:", error);
    }
  }, [name]);

  const toggleFavorite = useCallback(
    async (id: number, favorite: boolean,title:string,description:string) => {
      if (!name) return;
      try {
        await setFavorite(name, id, !favorite, title,description);
        setRefresh((prev) => !prev); // Forzar actualización
      } catch (error) {
        console.error("Error updating favorite:", error);
      }
    },
    [name]
  );

  useEffect(() => {
    fetchVerses();
  }, [fetchVerses, refresh]);

  return { verses, toggleFavorite };
};

export default useVerses;