"use strict";

const displayElement = document.querySelector(".screen");
const numericButtons = document.querySelectorAll(".btn-grey");
const operatorButtons = document.querySelectorAll(".btn-yellow");
const equalButton = document.querySelector(".btn-equal");
const clearButton = document.querySelector(".btn-clear");

// Initialize a variable to keep track of the current input expression
let currentInput = "";

// Function to update the calculator display with the current input
function updateDisplay() {
  displayElement.value = currentInput;
}

// Function to handle numeric button clicks
function handleNumericButtonClick(event) {
  const number = event.target.textContent;
  currentInput += number;
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorButtonClick(event) {
  const operator = event.target.textContent;
  currentInput += operator;
  updateDisplay();
}

// Function to handle the equal button click
function handleEqualButtonClick() {
    try {
      // Check if the last character is an equal sign (=) and remove it if present
      if (currentInput.endsWith("=")) {
        currentInput = currentInput.slice(0, -1);
      }
  
      // Log the current input before evaluation
      console.log("Current Input:", currentInput);
  
      // Evaluate the expression using the JavaScript eval() function
      let result = eval(currentInput);
  
      // Log the result of evaluation
      console.log("Result:", result);
  
      if (Number.isFinite(result)) {
        // If the result is a finite number, display it as a string
        currentInput = result.toString();
      } else {
        // If the result is not a finite number, display "Error"
        currentInput = "Error";
      }
    } catch (error) {
      // If there's an error in the expression, display "Error"
      console.log("Error:", error);
      currentInput = "Error";
    }
    updateDisplay();
  }
  

// Function to handle the clear button click
function handleClearButtonClick() {
  currentInput = "";
  updateDisplay();
}

numericButtons.forEach((button) => {
  button.addEventListener("click", handleNumericButtonClick);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorButtonClick);
});

// Add event listener to the equal button
equalButton.addEventListener("click", handleEqualButtonClick);

// Add event listener to the clear button
clearButton.addEventListener("click", handleClearButtonClick);

// Initial display update
updateDisplay();