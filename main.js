console .log("JavaScript")

// The "document" object stands for DOM (Document Object Model)
// The "DOM" is another way of calling the "HTML tree structure"

let calculatorForm = document.getElementById('calculator-form')
let inputX = document.getElementById('number-x')
let inputY = document.getElementById('number-y')
let resultElement = document.getElementById('result')

function onCalculate (event) {
  event.preventDefault()

  let sum = Number(inputX.value) + Number(inputY.value)
  resultElement.innerHTML = sum
}

calculatorForm.onsubmit = onCalculate 