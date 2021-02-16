"use strict";

//1
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//3

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

    // switch (true) {
    //     case a == '':
    //     case a == null:
    //     case a.length > 50:
    //         console.log("Error");
    //         i--;
    //         break;
    //     default:
    //         switch (true) {
    //             case b == '':
    //             case b == null:
    //                 console.log("Error");
    //                 i--;
    //                 break;
    //             default:
    //                 personalMovieDB.movies[a] = b;
    //         }  
    // }

    // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //     personalMovieDB.movies[a] = b;
    //     console.log("done");
    // } else {
    //     console.log("Error");
    //     i--;
    // }
    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}

console.log(personalMovieDB);

// const questionOne = prompt("Один из последних просмотренных фильмов?",""),
//       questionTwo = prompt("На сколько оцените его?",""),
//       questionThree = prompt("Один из последних просмотренных фильмов?",""),
//       questionFour = prompt("На сколько оцените его?","");
    



// console.log(numberOfFilms);
// console.log(personalMovieDB);
// console.log(questionOne);
// console.log(questionTwo);
// console.log(personalMovieDB.movies);

