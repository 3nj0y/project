"use strict";

//1
let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//3

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?",""),
              b = prompt("На сколько оцените его?","");
    
        while (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
            break;
        }
        while (a == null || b == null || a == '' || b == '' || a.length > 50) {
            i--;
            console.log("Error");
            break;
        }    
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) console.log(personalMovieDB);  
}

showMyDB(personalMovieDB.private);

function writeYourGenres () {
    let genres = [];
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + i + " ?","");
    }
}

writeYourGenres();