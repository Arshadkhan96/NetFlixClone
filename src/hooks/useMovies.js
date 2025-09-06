import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movieService';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  return { movies, loading };
};