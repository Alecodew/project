'use strict';



/*
let myName = prompt('Как тебя зовут?');
alert(`Тебя зовут ${myName}`); */

/* let year = prompt('Какое официальное название JavaScript');

if(year == 'ECMAScript') {
    alert('Верно');
} else {
    alert('Не знаете? ECMAScript');
} */



/* let browser = prompt('Какой у тебя браузер?');

if (browser == 'Edge') {
    alert('У тебя есть приемущество');
}else if (browser == 'Chrome' || browser =='Firefox' || browser =='Safari' || browser =='Opera') {
    alert('Хорошо,мы тоже поддерживаем эти браузеры');
}else if (browser ==' ') {
    alert('Ошибка');
}else  {
    alert ('Мы надеемся что эта страница выгдяит нормально');
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




/* const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count=='' || personalMovieDB.count==null || isNaN(personalMovieDB.count))   {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel:function () {
        if(personalMovieDB.count<10){
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count>=10 && personalMovieDB<30) {
           console.log('Вы классический зритель');
        } else if(personalMovieDB.count>=30) {
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB:function (hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat) {
            personalMovieDB.privat=false;
        }else {
            personalMovieDB.privat=true;
        }
    
    },



    writeYourGenres:function () {
        for (let i=1; i<=3;i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre==='' || genre== null){
                console.log('вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach( (item, i) => {
            console.log(`Любимый жанр ${i+1} -это ${item}`);

        });

        
    },
};
 */













/* const numder = +prompt('Введите число между 0 и 3', '');

switch (numder) {
    case 0:
        alert ('Вы ввели число 0');
        break;
    case 1:
        alert ('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert ('Вы ввели число 2, а может и 3 ');
        break;

} */

/* function checkAge (age) {
    return age>18 || confirm('родители разрешили?');

}
checkAge(age); */

/* function All () {
    console.log('message');
}

All(); */
/*
let num = 20;
function showFirstmessage(text){
    console.log(text);
    num = 10;
}

showFirstmessage('hello world');
console.log(num); */

/* function calc(a,b) {
    return (a+b);
}
console.log(calc(4,6));
console.log(calc(4,11));
console.log(calc(3,6)); */


/* function ret () {
    let num = 50;




    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
    console.log('hello');
};
logger();


const calc = (a,b) => a+b; */
/* let Pets = {
    cat: 2,
    dog:1,
    parrot:3,
    rabbit:2,
};

console.log(Pets.dog);
 */

