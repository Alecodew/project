"use strict";

const numderOfFilms = +prompt ('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последний просмотренных фильмов?',''),
      b = prompt ('На сколько оцените его?',''),
      c = prompt ('Один из последний просмотренных фильмов?',''),
      d = prompt ('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(numderOfFilms);