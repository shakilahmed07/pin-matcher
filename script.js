// pin matcher
function getPinMatcher() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];

  if (pin.length === 4) {
    return pin;
  } else {
    console.log("3 digit number", pin);
    return getPinMatcher();
  }
}
// display Generator pin
function generatorPin() {
  document.getElementById("pin-generator").value = getPinMatcher();
}
// calculate function
document
  .getElementById("button-container")
  .addEventListener("click", function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
      if (digit == "C") {
        const typePin = document.getElementById("type-pin");
        typePin.value = "";
      }
    } else {
      const typePin = document.getElementById("type-pin");
      typePin.value = typePin.value + digit;
    }
  });

// verify Pin
function verifyPin() {
  const pin = document.getElementById("pin-generator").value;
  const type = document.getElementById("type-pin").value;

  if (pin === type) {
    matchResult("block", "none");
  } else {
    matchResult("none", "block");
  }
}
// matchResult
function matchResult(isCorrect, isIncorrect) {
  // correct pin
  const correctPin = document.getElementById("correct-pin");
  correctPin.style.display = isCorrect;
  // incorrect pin
  const incorrectPin = document.getElementById("incorrect-pin");
  incorrectPin.style.display = isIncorrect;
}
