import { useState, useEffect } from 'react';
import { getEdutainment } from '../data/data';
import { Edutainment } from '../data/interfaces';

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
