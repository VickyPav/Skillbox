let firstNumber = + prompt('Enter the first number')
   
    if (isNaN(firstNumber) || firstNumber == '') {
      do {
        alert('Not a number')
        firstNumber = + prompt('Enter the first number')
      } while (isNaN(firstNumber) || firstNumber == '' )
    }
   
    let secondNumber = + prompt('Enter the second number')
   
    if (isNaN(secondNumber ) || secondNumber == '') {
      do {
        alert('Not a number')
        secondNumber  = + prompt('Enter the second number')
      } while (isNaN(secondNumber ) || secondNumber == '')
    }
   
    switch(true) {
 
        case (firstNumber > secondNumber ):
        alert('The first number is more than the second number');
        break;
 
        case (firstNumber < secondNumber ):
        alert('The second number is more than the first number');
        break;
 
        case (firstNumber == secondNumber ):
        alert('The numbers are equal');
        break;
 
    }