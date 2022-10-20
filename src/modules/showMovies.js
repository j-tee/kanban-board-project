/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

// eslint-disable-next-line import/no-cycle
import _ from "lodash";
import MovieApi from './api.js';
import Like from './like.js';

/* eslint-disable linebreak-style */
export default class ShowMovie {
  static sortingFunction = (a, b) => parseFloat(a.id) - parseFloat(b.id);

  // eslint-disable-next-line no-unused-vars
  static showMovies = (movies, display, likes) => {
    // console.log(likes)
    const listOfMovies = movies.sort(this.sortingFunction);
    display.innerHTML = '';
    listOfMovies.forEach((element) => {
      const obj = _.find(likes, { item_id: element.id });
      const item = `  
      <div>
      <img src="${element.image.medium}">
      <ul>
          <li class="name">${element.name}</li>
          <li class="lang">${element.language}</li>
      </ul>        
      <div>
      <button>Comments</button> <br>
      <button id=id${element.id}>${obj ? obj.likes : 0} ${obj ? obj.likes > 1 ? 'likes' : 'Like' : 'Likes'}</button>
      </div>
      </div>
      `;
      display.insertAdjacentHTML('beforeend', item);
      const likeBtn = document.getElementById(`id${element.id}`);
      likeBtn.addEventListener('click', () => {
        const like = new Like(element.id);
        MovieApi.addNewLikes(likeBtn, like);
      });
    });
  }

  // eslint-disable-next-line no-unused-vars
  static showError = (error, display) => {
    display.innerHTML = error;
  }
}