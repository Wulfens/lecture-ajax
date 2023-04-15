// console.log("Hello from src/index.js!");

// ========Révision========
const button = document.querySelector("#clickme");
// const button = document.getElementById("clickme");

console.log(button);

// button.addEventListener("EVENT_TYPE", "CALLBACK");
// button.addEventListener("click", (event) => {});

button.addEventListener("click", (event) => {
  event.currentTarget.innerText = "Hold Still...";
  event.currentTarget.setAttribute("disabled", "");
  // event.currentTarget.disable = true;
});


// ==============Search Movies===================
const searchMovies = (query) => {
  const moviesList = document.getElementById("movies-list");
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search);
      moviesList.innerHTML = "";
      data.Search.forEach((movie) => {
        const movieHtml = `<li class="list-inline-item">
                            <img src="${movie.Poster}" alt="">
                            <p>${movie.Title}</p>
                          </li>`;
        moviesList.insertAdjacentHTML('beforeend', movieHtml);
      });
    });
};

const form = document.querySelector("#search-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputQuery = form.querySelector("#search-input").value;
  searchMovies(inputQuery);
});


// ============Post Request================

const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

const signUpForm = document.querySelector("#form");
signUpForm.addEventListener("submit", signUp);
