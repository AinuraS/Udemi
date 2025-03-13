'use strict';

const numberOfFilms = +prompt('Яку кількість фільмів ви вже подивилися?', (''));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів, які ви дивились?', ''),
      b = prompt('Яку оцінку дасте йому?', ''),
      c = prompt('Один з останніх фільмів, які ви дивились?', ''),
      d = prompt('Яку оцінку дасте йому?', '');

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);

