/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
export default class ShowMovie {
  static sortingFunction = (a, b) => parseFloat(a.id) - parseFloat(b.id);

  // eslint-disable-next-line no-unused-vars
  static showMovies = (movies, display) => {
    const listOfMovies = movies.sort(this.sortingFunction);
    display.innerHTML = '';
    listOfMovies.forEach((element) => {
      display.innerHTML += `  
        <div>
        <img src="${element.image.medium}">
        <ul>
            <li class="name">${element.name}</li>
            <li class="lang">${element.language}</li>
        </ul>        
        <div>
        <button>Comments</button> <br>
        <button>Reservations</button>
        </div>
        </div>
        `;
    });
  }

  // eslint-disable-next-line no-unused-vars
  static showError = (displayError) => {
    
  }
}