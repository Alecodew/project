'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('heart'),
      wrapper = document.querySelector('.wrapper');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = 'background-color: blue; width: 700px;

btns [1].style.borderRadius = '100%';

circle[1].style.backgroundColor = 'red';


/* for (let i=0; i<hearts.length;i++){
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});



