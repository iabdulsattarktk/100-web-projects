let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let calculateBtn = document.getElementById("calculate");
let resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  let weight = Number(weightInput.value);
  let height = Number(heightInput.value);

  if (weight <= 0 || height <= 0) {
    resultDiv.textContent = "Please enter valid height and weight";
    return;
  }
  let heightInMeter = height / 100;
  let bmi = weight / (heightInMeter * heightInMeter);
  let bmiRounded = bmi.toFixed(2);
  console.log("BMI:", bmiRounded);

  let catagory;

  if (bmi < 18.5) {
    catagory = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    catagory = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    catagory = "Overweight";
  } else {
    catagory = "Obese";
  }

  console.log("catagory: ", catagory);
  resultDiv.textContent = `Your BMI is ${bmiRounded} (${catagory})`;
});

