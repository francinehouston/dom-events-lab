/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let displayValue = "";
let operator
let firstNumber
let secondNumber
let result
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
})
/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(event) {
    //console.log(event.target.innerText);
    const clickedButton = event.target.innerText
    if (!isNaN(parseFloat(clickedButton))) {
        //console.log("it's a number")
        displayValue += clickedButton
        display.innerText = displayValue
    } else if (clickedButton) {
        switch (clickedButton) {
            case "+":
                firstNumber = Number(displayValue)
                operator = '+';
                displayValue = "";
                display.innerText = "";

                // first number + second number =
                //console.log(firstNumber, operator);
                break
            case "-":
                firstNumber = Number(displayValue)
                operator = '-';
                displayValue = "";
                display.innerText = "";
                // first number - second number =
                //console.log(firstNumber, operator);
                break
            case "*":
                firstNumber = Number(displayValue)
                operator = '*';
                displayValue = "";
                display.innerText = "";
                // first number * second number =
                //console.log(firstNumber, operator);
                break
            case "/":
                firstNumber = Number(displayValue)
                operator = '/';
                displayValue = "";
                display.innerText = "";
                // first number / second number =
                //console.log(firstNumber, operator);
                break
            case "C":
                //console.log(event.target.innerText);
                display.innerText = "";
                displayValue = "";
                break
            case "=":
                secondNumber = Number(displayValue)
                //console.log(Number(firstNumber), operator, Number(secondNumber))
                switch (operator) {
                    case "+":
                        result = firstNumber + secondNumber
                        break
                    case "-":
                        result = firstNumber - secondNumber
                        break
                    case "*":
                        result = firstNumber * secondNumber
                        break
                    case "/":
                        result = firstNumber / secondNumber
                        break
                }
                display.innerText = result;
        }
    }

}

// have two or three functions when the click button variable is number
