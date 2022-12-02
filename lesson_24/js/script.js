'use strict'
// Functions JS

// Task №4 on functions
console.log("Task №4 on functions");
let showMessage;

if (2>1) {
   showMessage = function() {
      console.log("Повідомлення");
   }
}

showMessage();

// Arrays JS

// Task №1 on arrays

console.log('Task №1 on arrays');
let arr = ['Ваня', 'Иштван', 'Оля',]
let newArr = arr;
newArr.push('Петя');
console.log(arr.length); 

// Task №2 on arrays

console.log('Task №2 on arrays');
let users = ['Ваня', 'Иштван',];
console.log(users);
users.push('Оля');
console.log(users);
users[1] = 'Петя';
console.log(users);
let removed = users.shift();
console.log(removed);
users.unshift('Маша', 'Паша');
console.log(users);

// Task №3 on arrays

console.log('Task №3 on arrays');
arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);
let removedElement = arr.splice(1, 1);
console.log(removedElement);

// Task №4 on arrays

console.log('Task №4 on arrays');
let str = 'Ваня,Иштван,Оля';
console.log(str);
console.log(str.split(','));

// DOM JS

// Task №1 on DOM

console.log('Task №1 on DOM');
const dataElement = document.querySelector('[data-say-hi]');
console.log(dataElement);
console.log(dataElement.dataset.sayHi);

// Task №2 on DOM

console.log('Task №2 on DOM');
const list = document.querySelector('ul');
const listItem = list.lastElementChild;
console.log(listItem);

// Task №3 on DOM

console.log('Task №3 on DOM');
const classLike = document.querySelectorAll('.like');
console.log(classLike);

// Task №4 on DOM

console.log('Task №4 on DOM');
const listSecond = document.querySelectorAll('ul')[1];
console.log(listSecond);
listSecond.insertAdjacentHTML('beforeend', '<li>Текст</li>');

// Coordinates JS

// Task №1 on coordinates

console.log('Task №1 on coordinates');
const documentWidth = document.documentElement.clientWidth;
const entireWidth = window.innerWidth;
console.log(entireWidth - documentWidth);

// Task №2 on coordinates

function scroll() {
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
   });
}

setTimeout(scroll, 1000);

// Task №3 on coordinates

const lessonFirst = document.querySelector('.lesson__first');
const lessonSecond = document.querySelector('.lesson__second')
const lessonThird = document.querySelector('.lesson__third')

function getCoordinates(element) {
   console.log(`Element: ${element.children.item('h2').textContent}\nTop coordinate: ${element.getBoundingClientRect().top}\nLeft coordinate: ${element.getBoundingClientRect().left}`);
}
getCoordinates(lessonFirst);
getCoordinates(lessonSecond);
getCoordinates(lessonThird);