let currentInput = "";
let previousInput = "";
let operator = "";

const display = document.getElementById("display");

function appendToDisplay(clickedNumber) {
  if (currentInput === "0" && clickedNumber !== ".") {
    currentInput = clickedNumber;
  } else {
    currentInput += clickedNumber;
  }
  display.value = currentInput;
}

function onClickOperator(evt) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = evt;
  previousInput = currentInput;
  currentInput = "";
}

function onClickCancel() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
}

function onClickEquals() {
  if (currentInput === "" || previousInput === "") return;
  calculate();
  operator = "";
  currentInput = display.value;
  previousInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "x":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result;
}

function onClickToggleSign() {
  if (currentInput.startsWith("-")) {
    currentInput = currentInput.substring(1);
  } else {
    currentInput = "-" + currentInput;
  }
  display.value = currentInput;
}

function onClickPercent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  display.value = currentInput + "%";
}
