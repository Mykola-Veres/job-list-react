import axios from 'axios';

// API Key: e00a8fe96730262954d4fe74242d0bb1

// https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu

export function fetchJobData() {
  const fetchJobData = axios
    .get(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
    )
    .then(response => response.data);
  return fetchJobData;
}

export function fetchMoviesById(id) {
  const fetchMoviesId = axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e00a8fe96730262954d4fe74242d0bb1&append_to_response=images`
    )
    .then(response => response.data);
  return fetchMoviesId;
}

export function fetchMoviesCredits(id) {
  const fetchMoviesCredits = axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e00a8fe96730262954d4fe74242d0bb1&language=en-US`
    )
    .then(response => response.data);
  return fetchMoviesCredits;
}
