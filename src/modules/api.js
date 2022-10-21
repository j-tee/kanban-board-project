import ShowMovie from './showMovies.js';

const apikey = localStorage.getItem('apikey');
const apiUrl = 'https://api.tvmaze.com/';
const invApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

let likes;

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

  static getLikes = async () => {
    await fetch(`${invApiUrl}${apikey}/likes/`)
      .then((response) => response.json())
      .then((likes) => {
        this.likes = likes;
        ShowMovie.showMovies(this.movies, this.displayMovies, likes);
      });
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
      return error;
    }
    return result;
  };

  static getMovies = async (display) => {
    if (!apikey) this.getApiKey();
    this.displayMovies = display;
    try {
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