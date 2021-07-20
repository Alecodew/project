'use strict';

/* alert("I am javascript");
alert('you'); */

/* let message = 'hello world';

alert(message); */

/* let $kat = 'byba';

let _sosya;

_sosya = $kat;
alert(_sosya); */

/* 
let myName = prompt('Как тебя зовут?');
alert(`Тебя зовут ${myName}`); */

/* let year = prompt('Какое официальное название JavaScript');

if(year == 'ECMAScript') {
    alert('Верно');
} else {
    alert('Не знаете? ECMAScript');
} */

/* 
let login = prompt('Кто там?');

if (login == 'Админ') {
    let pss = prompt('Пароль?');

    if (pss == 'Я Главный') {
        alert ('Здравствуйте');
     }else if (pss == ''){
         alert ('Отменено');
     }
     else{
         alert('Неверный пароль');}
    
}else if (login =='') {
    alert('Отменено');
}else if (login == null) {
    alert('Отм');
}else{
    alert ('Я вас не знаю.');
 }
 
  */


 /* let poo = 10;

 while (poo<50) {
     alert (poo);
     poo++;
 } */

 /* for (let i = 1; i<10; i++) {
     if (i=== 6) {
         continue;
     }
alert(i);
 } */

 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 for (let i=0; i<2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?',''),
          b = prompt ('На сколько оцените его?','');

    if(a != null && b !=null && a !='' && b !='' && a.length<50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
 }

 if(personalMovieDB.count<10){
     console.log('Просмотрено довольно мало фильмов');
 } else if(personalMovieDB.count>=10 && personalMovieDB<30) {
    console.log('Вы классический зритель');
 } else if(personalMovieDB.count>=30) {
     console.log('Вы киноман');
 }else {
     console.log('Произошла ошибка');
 }

console.log(personalMovieDB);