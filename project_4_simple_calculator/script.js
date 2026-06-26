// display ke expressioin line ko pakro jaha 0 + 5 likha ha
const expressionDisplay = document.getElementById("expression");

// display ke result line ko pakru jaha answer dikhy ga
const resultDisplay = document.getElementById("result");

//  ye variable expression store kry ga jo user enter kry ga
let expression = "";

// sary buttons ko pakro jin ka be class .btn ha
const allButtons = document.querySelectorAll(".btn");

// har button par ek ek kar ke event listner lagao
allButtons.forEach(function (button) {
  // jab be koy button click hu tu ye function chaly
  button.addEventListener("click", function () {
    // us button ka text pakro jo likha ha os pe jese ke "6" ya "+"
    const buttonText = button.textContent;

    // agar C button dabay tu koch mat kro abi bad ma krengy
    if (buttonText === "C") {
      return;
    }

    // agar = button dabay tu koch mat kro abi bad ma krengy
    if (buttonText === "=") {
      return;
    }

    // baki sary buttons klia expression ma add kro
    expression = expression + buttonText;

    // expression display ma dekaho
    expressionDisplay.textContent = expression;
  });
});

// Clear button ko alag se pakdo
const clearButton = document.getElementById("clear");

// Equal button ko alag se pakdo
const equalButton = document.getElementById("equal");

// Clear button click hone par sab reset karo
clearButton.addEventListener("click", function () {
  // expression variable ko khali karo
  expression = "";
  // expression display khali karo
  expressionDisplay.textContent = "0";
  // result display khali karo
  resultDisplay.textContent = "0";
});

// Equal button click hone par calculation karo
equalButton.addEventListener("click", function () {
  // Agar expression khali hai toh kuch mat karo
  if (expression === "") {
    return;
  }
  // eval() function expression calculate karta hai — "5+3" ko 8 banata hai
  const answer = eval(expression);
  // result display mein answer dikhao
  resultDisplay.textContent = answer;
  // expression display mein poora expression dikhao
  expressionDisplay.textContent = expression + " =";
  // expression reset karo agla calculation ke liye
  expression = "";
});
