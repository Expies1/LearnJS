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

//3 
const a = prompt('Один из последних просмотренных фильмов', '');
const b = prompt('Оценка данного фильма', '');
const c = prompt('Один из последних просмотренных фильмов', '');
const d = prompt('Оценка данного фильма', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);

