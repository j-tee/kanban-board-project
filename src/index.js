/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import MovieApi from './modules/api';
import './styles.css';

const displayMovies = document.getElementById('movies');
MovieApi.getMovies(displayMovies);