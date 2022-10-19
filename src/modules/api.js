/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import ShowMovie from './showMovies';

/* eslint-disable linebreak-style */
const apiUrl = 'https://api.tvmaze.com/';
const invApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

export default class MovieApi {
  static getMovies = async (display) => {
    try {
      // eslint-disable-next-line linebreak-style
      await fetch(`${apiUrl}shows?_limit=10'
      `).then((response) => response.json())
        .then((res) => {
          ShowMovie.showMovies(res, display);
        });
      // const response = await axios.get(`${apiUrl}shows`);
    } catch (error) {
      ShowMovie.showError(error);
    }
  }
}