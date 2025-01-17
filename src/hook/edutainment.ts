import { useState, useEffect } from 'react';
import { getEdutainment, Edutainment } from '../data/posts';

export const useEdutainment = () => {
  const [edutainmentFilter, setEdutainmentFilter] = useState<Edutainment[]>([]);

  useEffect(() => {
    const fetchEdutainment = async () => {
      const fetchedEdutainment = await getEdutainment();
      setEdutainmentFilter(fetchedEdutainment);
    };
    fetchEdutainment();
  }, []);

  return { edutainmentFilter };
};
