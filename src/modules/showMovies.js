const modal = document.getElementById('popUpModal')
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
export default class ShowMovie {
  static sortingFunction = (a, b) => parseFloat(a.id) - parseFloat(b.id);

  static createModal = (element) => {
    const modalContent = document.createElement('div');
        modalContent.innerHTML = `
        <div class='modalStyle container'>
            <img src="${element.image.medium}">
            <span class="name">${element.name}</span>
            <span>${element.summary}</span>
            <div class="properties">
            <span>Rating:${element.rating.average}</span>
            <span>Status:${element.status}</span>
            <span>Runtime:${element.runtime}</span>
            <span>Show Time:${element.schedule.time}</span>
            </div>
        </div>        
        <div>
        <button type="button" class="closeBtn btn btn-outline-dark">X</button>
        </div>
        `
        modal.innerHTML = '';
        modal.appendChild(modalContent);

        const closeBtn = document.querySelector('.closeBtn')
        closeBtn.addEventListener('click', () => {
          modal.className = 'hide';
        })
  } 

  // eslint-disable-next-line no-unused-vars
  static showMovies = (movies, display) => {
    const listOfMovies = movies.sort(this.sortingFunction);
    display.innerHTML = "";
    listOfMovies.forEach((element) => {
      const item = `  
      <div>
      <img src="${element.image.medium}">
      <ul>
          <li class="name">${element.name}</li>
          <li class="lang">${element.language}</li>
      </ul>        
      <div>
      <button id=${element.id}>Comments</button> <br>
      <button>Reservations</button>
      </div>
      </div>
      `;
      display.insertAdjacentHTML("beforeend", item);
      // const popUpMenu = document.querySelector(".menu");
      const popUpMenu = document.getElementById(`${element.id}`)
      popUpMenu.addEventListener("click", () => 
      {modal.className = 'show';
        this.createModal(element)});
    });
  };

  // eslint-disable-next-line no-unused-vars
  static showError = (displayError) => {};
}
