/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import MovieApi from './modules/api';
import './styles.css';

let apiKey = JSON.stringify(localStorage.getItem('apikey'));
if (!apiKey) {
  MovieApi.getApiKey().then((resp) => {
    apiKey = resp;
    localStorage.setItem('apikey', apiKey);
  });
}
const displayMovies = document.getElementById('movies');
MovieApi.getMovies(displayMovies);
MovieApi.getLikes();
