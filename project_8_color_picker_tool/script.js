const colorInput = document.getElementById("colorInput");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");

function hextorgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgb (${r}) , ${b} , ${b} `;
}

function updateColor() {
  const selectedColor = colorInput.value;
  hexValue.textContent = selectedColor;
  rgbValue.textContent = hextorgb(selectedColor);
  document.body.style.backgroundColor = selectedColor;
}

colorInput.addEventListener("input", updateColor);

const copBtn = document.getElementById("copyBtn");
copBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(hexValue.textContent);
  copBtn.textContent = "Copied";
  setTimeout(function () {
    cppyBtn.textContent = "Copy HEX";
  }, 1500);
});
