// useDataFetching.js
import { useState, useEffect } from 'react';
import { getEntrieById } from '@/app/lib/services';

const useDataFetching = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getEntrieById(id);
        setData(fetchedData[0]);
      } catch (error) {
        console.error('Error fetching entry:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { data, loading };
};

export default useDataFetching;
