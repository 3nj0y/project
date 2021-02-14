"use strict";

//1
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
//3
let questionOne = prompt("Один из последних просмотренных фильмов?","");
let questionTwo = prompt("На сколько оцените его?","");
let filmName = questionOne;

personalMovieDB.movies = {
    filmName: questionTwo
};

console.log(numberOfFilms);
console.log(personalMovieDB);
console.log(questionOne);
console.log(questionTwo);
console.log(personalMovieDB.movies);

