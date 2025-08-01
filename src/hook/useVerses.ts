import { useState, useEffect, useCallback } from "react";
import { getVerseBySlug, setFavoriteStorage,updateVersesStorage } from "../services/sectionVersesService";
import { Verse } from "../data/interfaces";

const useVerses = (slug?: string) => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchVerses = useCallback(async () => {
    if (!slug) return;
    try {
      const response = await getVerseBySlug(slug);
      setVerses(response || []);
    } catch (error) {
      console.error("Error fetching verses:", error);
    }
  }, [slug]);
  



  useEffect(() => {
    fetchVerses();
  }, [fetchVerses, refresh]);

  return { verses, setRefresh };
};

export default useVerses;