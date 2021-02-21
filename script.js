"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    askAboutFilms: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) console.log(personalMovieDB);  
    },
    writeYourGenres: function () {
        let genres = [];
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + i + " ?","");
            if (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == "") {
                i--;
            }
        }
        personalMovieDB.genres.forEach((value, index) => {
                console.log(`Любимый жанр ${index + 1} - это ${value}`);
            }
        );
    },
    toggleVisibleMyDB: function (vision) {
        if (vision) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

personalMovieDB.askAboutFilms();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.private);