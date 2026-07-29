const currencies = ["USD", "GBP", "SAR", "PKR"];

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amountInput");
const resultOutput = document.getElementById("resultOutput");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const resultNumber = document.getElementById("result-number");
const resultCurrencyLabel = document.getElementById("result-currency");

function populateDropdowns() {
  currencies.forEach(function (currency) {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "PKR";
}

populateDropdowns();

async function convertCurrency() {
  const amount = amountInput.value;
  const from = fromCurrency.value.toLowerCase();
  const to = toCurrency.value.toLowerCase();

  if (amount === "" || isNaN(amount) || amount <= 0) {
    alert("Sahi amount likho (0 se bara number)");
    return;
  }

  try {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
    const response = await fetch(url);
    const data = await response.json();

    const rate = data[from][to];
    const convertedValue = amount * rate;

    resultOutput.value = convertedValue.toFixed(2);
    resultNumber.textContent = convertedValue.toFixed(2);
    resultCurrencyLabel.textContent = to.toUpperCase();
  } catch (error) {
    alert("Kuch masla ho gaya, dobara try karo");
    console.log(error);
  }
}

convertBtn.addEventListener("click", convertCurrency);

function swapCurrencies() {
  const tempValue = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempValue;
}

swapBtn.addEventListener("click", swapCurrencies);