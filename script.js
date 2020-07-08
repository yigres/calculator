
document.addEventListener('keydown',pressedKey);
document.querySelector(".calculator").addEventListener("click", clickResult);

function pressedKey(event) {
  // console.log(event.keyCode);
  
  switch(event.keyCode){
    case 97:
    case 49: writeInput('1');
        break;
    case 98:
    case 50: writeInput('2');
        break;
    case 99:
    case 51: writeInput('3');
        break;
    case 100:
    case 52: writeInput('4');
        break;
    case 101:
    case 53: writeInput('5');
        break;
    case 102:
    case 54: writeInput('6');
        break;
    case 103:
    case 55: writeInput('7');
        break;
    case 104:
    case 56: writeInput('8');
        break;
    case 105:
    case 57: writeInput('9');
        break;
    case 96:
    case 48: writeInput('0');
        break;
    case 110: writeInput('.');
        break;
    case 8: backspace();
        break;
    case 187:
    case 107: writeOperator('+');
        break;
    case 189:
    case 109: writeOperator('-');
        break;
    case 106: writeOperator('*');
        break;
    case 111: writeOperator('/');
        break;
    case 13: calculate();
        break;
    }
}

function clickResult(event) {
  const pressedButton = event.srcElement.dataset.key;
  let valueInput = document.querySelector(".input").value;

  switch(pressedButton){
    case '1': writeInput(pressedButton);
        break;
    case '2': writeInput(pressedButton);
        break;
    case '3': writeInput(pressedButton);
        break;
    case '4': writeInput(pressedButton);
        break;
    case '5': writeInput(pressedButton);
        break;
    case '6': writeInput(pressedButton);
        break;
    case '7': writeInput(pressedButton);
        break;
    case '8': writeInput(pressedButton);
        break;
    case '9': writeInput(pressedButton);
        break;
    case 'zero': writeInput('0');
        break;
    case 'point': writeInput('.');
        break;
    case 'reset': document.querySelector(".input").value = '0';
        break;
    case 'plus': writeOperator('+');
        break;
    case 'minus': writeOperator('-');
        break;
    case 'multiply': writeOperator('*');
        break;
    case 'divide': writeOperator('/');
        break;
    case 'backspace': backspace();
        break;
    case 'equal': calculate();
        break;
    }
}

function writeInput(digit){
  let textInput = document.querySelector(".input").value;

  ( textInput === '0' ) ? document.querySelector('.input').value = digit :
                          document.querySelector('.input').value = textInput + digit;
}

function backspace(){
  let textInput = document.querySelector('.input').value;

  if (textInput.length === 1) {
    document.querySelector('.input').value = '0';
    return;
  }
  
  textInput = textInput.substring(0,textInput.length - 1);
  document.querySelector('.input').value = textInput;
}

function calculate(){
  let exp = document.querySelector('.input').value;
  console.log(exp);
  if (exp) {
    document.querySelector('.input').value = eval(exp);
  }
}

function writeOperator(operator){
  // console.log('operator' + operator);

  let textInput = document.querySelector('.input').value;
  let endTextInput = textInput.substring(textInput.length - 1);
  // console.log('textInput' + textInput);
  // console.log('endTextInput' + endTextInput);
  isOperator(endTextInput) ?
    textInput = textInput.substring(0,textInput.length - 1) + operator :
    textInput = textInput + operator;
 
  document.querySelector('.input').value = textInput;
}

function isOperator(val){
// console.log('val' + val);
  if ( val === '+' || val === '-' || val === '*' || val === '/' ) return true;
  return false;
}