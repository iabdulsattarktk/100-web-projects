// ===== ELEMENTS PAKDO =====

const userNameInput = document.getElementById("user-name");
// HTML se naam wala input field pakda — id "user-name" se

const eidMessageSelect = document.getElementById("eid-message");
// HTML se message wala dropdown pakda — id "eid-message" se

const cardMessageDisplay = document.getElementById("card-message-display");
// card par jo message dikhega woh element pakda — id se

const cardRecipientDisplay = document.getElementById("card-recipient-display");
// card par jo naam dikhega woh element pakda — id se

const eidCard = document.getElementById("eid-card");
// poora card element pakda — theme change ke liye

const themeRadios = document.querySelectorAll('input[name="theme"]');
// saare theme radio buttons pakde — querySelectorAll se list milti hai

// ===== NAAM LIVE UPDATE =====

userNameInput.addEventListener("input", updateRecipient);
// jab bhi user naam field mein kuch likhe — updateRecipient function chale

function updateRecipient() {
  // yeh function card par naam update karta hai

  const naam = userNameInput.value.trim();
  // input field ki value lo — trim() se aage peeche ki spaces hatao

  if (naam === "") {
    // agar naam field khali hai

    cardRecipientDisplay.textContent = "— Tumhara Naam —";
    // card par default text dikhaao
  } else {
    // agar naam likha hua hai

    cardRecipientDisplay.textContent = "— " + naam + " —";
    // card par user ka naam dikhao — dashes ke saath
  }
}

// ===== MESSAGE LIVE UPDATE =====

eidMessageSelect.addEventListener("change", updateMessage);
// jab bhi user dropdown se message choose kare — updateMessage function chale

function updateMessage() {
  // yeh function card par message update karta hai

  const message = eidMessageSelect.value;
  // dropdown ki selected option ki value lo

  if (message === "") {
    // agar koi message select nahi kiya

    cardMessageDisplay.textContent = "Apna message upar se choose karo...";
    // card par default text
  } else {
    // agar message select kiya

    cardMessageDisplay.textContent = message;
    // card par selected message dikhao
  }
}

// ===== THEME LIVE UPDATE =====

themeRadios.forEach(function (radio) {
  // har radio button par loop chalao

  radio.addEventListener("change", updateTheme);
  // jab bhi koi radio change ho — updateTheme function chale
});

function updateTheme() {
  // yeh function card ka theme/color change karta hai

  eidCard.classList.remove("theme-green", "theme-gold", "theme-blue");
  // pehle card se saari theme classes hatao — clean slate

  const selectedTheme = document.querySelector(
    'input[name="theme"]:checked',
  ).value;
  // jo radio button abhi checked hai uski value lo

  if (selectedTheme === "gold") {
    // agar gold theme select ki

    eidCard.classList.add("theme-gold");
    // card mein theme-gold class add karo — CSS gold gradient lagayega

    document.querySelector(".download-btn").style.backgroundColor = "#b8860b";
    // download button bhi gold ho jaye
  } else if (selectedTheme === "blue") {
    // agar blue theme select ki

    eidCard.classList.add("theme-blue");
    // card mein theme-blue class add karo

    document.querySelector(".download-btn").style.backgroundColor = "#1565c0";
    // download button bhi blue ho jaye
  } else {
    // agar green theme select ki (default)

    document.querySelector(".download-btn").style.backgroundColor = "#1a6b3c";
    // download button wapas green ho jaye
  }
}

// ===== DOWNLOAD BUTTON =====

const downloadBtn = document.getElementById("download-btn");
// download button pakda — id "download-btn" se

downloadBtn.addEventListener("click", downloadCard);
// button click hone par downloadCard function chale

function downloadCard() {
  // yeh function card ko image mein convert karke download karta hai

  downloadBtn.textContent = "⏳ Tayar ho raha hai...";
  // button ka text change karo — user ko pata chale kuch ho raha hai

  downloadBtn.disabled = true;
  // button disable karo — double click na ho

  html2canvas(eidCard, {
    // html2canvas ko eidCard element do — woh screenshot lega

    scale: 2,
    // image quality 2x rakho — sharp aayegi

    useCORS: true,
    // cross origin images allow karo

    backgroundColor: null,
    // card ka apna background rakho — transparent nahi hoga
  }).then(function (canvas) {
    // jab screenshot tayar ho jaye — canvas milega

    const link = document.createElement("a");
    // ek naya anchor tag banao — download ke liye

    link.download = "eid-card.png";
    // download hone wali file ka naam

    link.href = canvas.toDataURL("image/png");
    // canvas ko PNG image mein convert karo aur link mein daalo

    link.click();
    // link par automatically click karo — download shuru ho jaye

    downloadBtn.textContent = "✅ Download Ho Gaya!";
    // button ka text update karo

    setTimeout(function () {
      // kuch waqt baad button wapas normal ho jaye

      downloadBtn.textContent = "⬇️ Card Download Karo";
      // original text wapas

      downloadBtn.disabled = false;
      // button wapas enable karo
    }, 3000);
    // 3000 milliseconds = 3 second baad
  });
}
