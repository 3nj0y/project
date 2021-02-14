"use strict";

//1
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
//3
 const questionOne = prompt("Один из последних просмотренных фильмов?",""),
       questionTwo = prompt("На сколько оцените его?",""),
       questionThree = prompt("Один из последних просмотренных фильмов?",""),
       questionFour = prompt("На сколько оцените его?","");
    

personalMovieDB.movies[questionOne] = questionTwo
personalMovieDB.movies[questionThree] = questionFour

console.log(numberOfFilms);
console.log(personalMovieDB);
console.log(questionOne);
console.log(questionTwo);
console.log(personalMovieDB.movies);

