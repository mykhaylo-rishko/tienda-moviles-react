import { useState, useEffect } from 'react';
import { getCachedData, setCachedData } from '../utils/cache';

export default function useFetchWithCache(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //Intentar obtener datos de la caché
      const cachedData = getCachedData(url);
      if (cachedData) {
        setData(cachedData);
        setIsLoading(false);
        return;
      }

      // Si no hay caché, hacer la llamada a la API
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }
        const freshData = await response.json();
        setData(freshData);
        setCachedData(url, freshData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}