// script.js
document.querySelector('h1 > a').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('Hello World!');
  });