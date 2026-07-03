import axios from 'axios';
import api from '../utlis/api';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || '378ebd2998e8b4163761fafa522db0fa';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US'
  }
});

export const getPopularMovies = () => api.get('/movies/popular');
export const searchMovies = (query) => api.get(`/movies/search?q=${query}`);

export const getMovieVideos = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/videos`);
  return response.data;
};