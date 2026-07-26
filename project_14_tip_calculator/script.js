const billAmount = document.querySelector("#billAmount");

const tipPercentage = document.querySelector("#tipPercentage");

const numberOfPeople = document.querySelector("#numberOfPeople");

const button = document.querySelector("#button");

const tipAmount = document.querySelector("#tipAmount");

const totalAmount = document.querySelector("#totalAmount");

button.addEventListener("click", function () {
  const bill = Number(billAmount.value);

  const tipPercent = Number(tipPercentage.value);

  const people = Number(numberOfPeople.value);

  const tip = (bill * tipPercent) / 100;

  const total = bill + tip;

  const tipPerPerson = tip / people;

  const totalPerPerson = total / people;

  tipAmount.textContent = tipPerPerson.toFixed(2);

  totalAmount.textContent = totalPerPerson.toFixed(2);
});
