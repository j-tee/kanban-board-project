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
      <span>${element.id} ${element.name} ${element.language} ${element.status}</span> 
        `;
    });
  }

  // eslint-disable-next-line no-unused-vars
  static showError = (displayError) => {
    
  }
}