/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
export default class ItemsCounter {
  static countItems = (displayCounter) => {
    const movies = document.querySelectorAll('.img');
    displayCounter.innerHTML = `${movies.length} ${movies.length !== 1 ? 'Movies' : 'Movie'}`;
  }
}