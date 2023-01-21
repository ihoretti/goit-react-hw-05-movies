import axios from 'axios';

const KEY = 'eacf035cadfc4bc3c80cf18ea34eda45';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  return await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&page=1`);
};

export const getMovieById = async id => {
  return await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
};

export const getCredits = async id => {
  return await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);
};

export const getReviewsMovies = async id => {
  return await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`);
};

export const getSearchMovie = async query => {
  return await axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${KEY}`
  );
};
