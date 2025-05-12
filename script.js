'use strict';

let numberOfFilms =0; 

function start() {
    numberOfFilms = +prompt('Яку кількість фільмів ви вже подивилися?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Яку кількість фільмів ви вже подивилися?', '');
        }
    }

start();

const questionNumber = 3;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

numberOfFilms = +prompt('Яку кількість фільмів ви вже подивилися?', (''));
while (isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Яку кількість фільмів ви вже подивилися?', (''));
}

personalMovieDB.count = numberOfFilms;


for (let i = 0; i < questionNumber; i++) {
    const a = prompt('Один з останніх фільмів, які ви дивились?', '').trim(),
          b = prompt('Яку оцінку дасте йому?', '');
    
    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
       
}

if (personalMovieDB.count < 10) {
    console.log('Ви передивились досить мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log('Ви чудовий глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман!');
} else {
    console.log('Виникла помилка...')
}

console.log(personalMovieDB);
/*
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 8));
console.log(calc(5, 6));
console.log(calc(10, 3));

function ret() {
    let num = 50;

    //

    return num
}

const anotherNum = ret();
console.log(anotherNum);

function sayHello(name) {
    return 'Привет ' + name + '!';
    }

sayHello('Антон');

function kvadrat(a) {
return a * a;
}

console.log(kvadrat(5));


function bigger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }        
    
}

console.log(bigger(5, 33));

function MaxNumber (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b; 
    } else if (c > a && c > b){
        return c;
    } else if (a=b=c) {
        return a;
    }
}

 console.log(MaxNumber(2, 2, 1));

 */
