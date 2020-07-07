// document.querySelectorAll(':hover')
// document.querySelectorAll(':active')

document.querySelector(".calculator").addEventListener("click", clickResult);
document.querySelector(".calculator").addEventListener('keydown',pressedKey);

function pressedKey(event) {
  console.log(event.keyCode);
  let valueInput = document.querySelector(".input").value;
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
    }

      function writeInput(digit){
        ( valueInput === '0' ) ?  document.querySelector('.input').value = digit :
                                  document.querySelector('.input').value = valueInput + digit;
      }
}

function clickResult(event) {
    // console.log(event.type + " на " + event.currentTarget);
    // console.log("Координаты: " + event.clientX + ":" + event.clientY);
  // console.log(event);
  // console.log(event.srcElement);
  // console.log(pressedButton);
  // console.log(valueInput);
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
    case 'plus': writeInput('+');
        break;
    case 'minus': writeInput('-');
        break;
    case 'multiply': writeInput('*');
        break;
    case 'divide': writeInput('/');
        break;
    case 'backspace': backspace();
        break;
    case 'equal': calculate();
        break;
    }

  function writeInput(digit){
    ( valueInput === '0' ) ?  document.querySelector('.input').value = digit :
                              document.querySelector('.input').value = valueInput + digit;
  }

  function backspace(){
    let textInput = document.querySelector('.input').value;

    if (textInput.length === 1) {
      document.querySelector('.input').value = '0';
      return;
    }
    // console.log(`backspace! \n ${textInput} \n ${textInput.length}`);
    textInput = textInput.substring(0,textInput.length - 1);

    document.querySelector('.input').value = textInput;
  }

  function calculate(){
    let exp = document.querySelector('.input').value;

    if (exp) {
      document.querySelector('.input').value = eval(exp);
    }
  }
}
