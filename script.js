const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentExpression = '';

function updateDisplay() {
  display.innerText = currentExpression;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'C') {
      currentExpression = '';
    } else if (button.id === 'back') {
      currentExpression = currentExpression.slice(0, -1);
    } else if (button.id === 'equal') {
      currentExpression = eval(currentExpression);
    } else {
      currentExpression += button.innerText;
    }
    updateDisplay();
  });
});
