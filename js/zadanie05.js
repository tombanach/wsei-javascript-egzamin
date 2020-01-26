const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');

const showText = text => container.textContent = text;

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => showText(button.getAttribute('data-text')));
});