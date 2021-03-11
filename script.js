"use strict";

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//2
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Error");
}

//3 

for (let i = 1; i < 3; i++) { 

  const a = prompt('Один из последних просмотренных фильмов', '');
  const b = prompt('Оценка данного фильма', '');
  

  if (a != '' && b != '' && a != null && b != null && a.length <= 50) {
    personalMovieDB.movies[a] = b;
  } else {
     i--;
     console.log("Error please write pole");
  }
}

console.log(personalMovieDB.movies);

