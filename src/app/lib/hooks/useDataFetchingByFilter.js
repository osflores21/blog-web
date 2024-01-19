// useDataFetchingByFilter.js
import { useState, useEffect } from 'react';
import { getDataByFilter, getData } from '@/app/lib/services';

const useDataFetchingByFilter = (filterTerm) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = filterTerm.trim() === '' ? await getData() : await getDataByFilter(filterTerm);
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterTerm]);

  return { data, isLoading };
};

export default useDataFetchingByFilter;
