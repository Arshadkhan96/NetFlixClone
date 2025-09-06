import api from '../utils/api';

export const getPopularMovies = () => api.get('/movies/popular');
export const searchMovies = (query) => api.get(`/movies/search?q=${query}`);