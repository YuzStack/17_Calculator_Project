'use strict';

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.textContent = currentInput || '0';
  });
});

/* // Understanding the heavy part...
console.log(eval('1+2*3'));
console.log(eval('1+2*3').toString());

display.textContent = currentInput || '0' 
// sets the text content to currentInput if currentInput is not empty (''), else, sets the text content to '0'
 */
