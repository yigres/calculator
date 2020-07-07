// document.querySelectorAll(':hover')
// document.querySelectorAll(':active')

document.querySelector(".calculator").addEventListener("click", clickResult);


function clickResult(event) {

  const pressedButton = event.srcElement.dataset.key;
  const valueInput = document.querySelector(".input").value;
  
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
