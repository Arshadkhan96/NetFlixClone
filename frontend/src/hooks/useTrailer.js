import { useEffect, useState } from 'react';
import { getMovieVideos } from '../services/movieService';

const useTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTrailer = async () => {
      if (!movieId) {
        setTrailerKey(null);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      setTrailerKey(null);

      try {
        const data = await getMovieVideos(movieId);
        if (!isMounted) return;

        const trailer = data.results?.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );

        setTrailerKey(trailer?.key ?? null);
        if (!trailer) {
          setError('No YouTube trailer found for this movie.');
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || 'Failed to load trailer.');
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    };

    fetchTrailer();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return { trailerKey, loading, error };
};

export default useTrailer;
