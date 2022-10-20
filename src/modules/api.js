/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Likes from './showLikes';
import ShowMovie from './showMovies';

const apikey = localStorage.getItem('apikey');
/* eslint-disable linebreak-style */
const apiUrl = 'https://api.tvmaze.com/';
const invApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let movies;
let likes;
let displayMovies;

export default class MovieApi {
  static getApiKey = async () => {
    await fetch(`${invApiUrl}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    })
      .then((resp) => resp.text())
      .then((result) => {
        this.apikey = result;
        localStorage.setItem('apikey', this.apikey);
      });
  };

  // static countComments = async (display) => {

  // }
  static getLikes = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      await fetch(`${invApiUrl}${apikey}/likes/`)
        .then((response) => response.json())
        .then((likes) => {
          this.likes = likes;
          ShowMovie.showMovies(this.movies, this.displayMovies, likes);
        });
    } catch (error) { throw error; }
  };

  static addNewLikes = async (likeBtnDisplay, like) => {
    const url = `${invApiUrl}${apikey}/likes/`;
    let result;
    try {
      await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
        }),
        body: JSON.stringify(like),
      }).then((response) => {
        result = response.status;
        if (result === 201) {
          this.getLikes(likeBtnDisplay);
        }
      });
    } catch (error) {
      Likes.showLikes(error, likeBtnDisplay);
    }
    return result;
  };

  static getMovies = async (display) => {
    if (!apikey) this.getApiKey();
    this.displayMovies = display;
    try {
      // eslint-disable-next-line linebreak-style
      await fetch(`${apiUrl}shows`)
        .then((response) => response.json())
        .then((movies) => {
          this.movies = movies;
          this.likes = likes;
          ShowMovie.showMovies(movies, display, likes);
        });
    } catch (error) {
      ShowMovie.showError(error, display);
    }
  };
}
