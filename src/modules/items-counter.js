/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
export default class ItemsCounter {
  static countItems = (likeBtn) => {
    const movies = document.querySelectorAll('.img');
    likeBtn.innerHTML = `${movies ? movies.length : 0}  ${movies.length !== 1 ? 'Movies' : 'Movie'}`;
  }
}