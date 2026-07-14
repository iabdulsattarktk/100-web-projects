// ============================================
// CLOCK LOGIC — index.html ke liye
// ============================================

function updateClock() {
  // yeh function har second chalega aur clock update karega

  const now = new Date();
  // new Date() se current date aur time milta hai

  let hours = now.getHours();
  // getHours() se current hour milta hai — 0 se 23 tak

  const minutes = now.getMinutes();
  // getMinutes() se current minute milta hai

  const seconds = now.getSeconds();
  // getSeconds() se current second milta hai

  let ampm = "AM";
  // default AM set kar rahe hain

  if (hours >= 12) {
    // 12 ya usse zyada matlab PM
    ampm = "PM";
  }

  if (hours > 12) {
    // 12-hour format ke liye 12 minus karo
    hours = hours - 12;
  }

  if (hours === 0) {
    // 0 matlab 12 AM — midnight
    hours = 12;
  }

  const formattedHours = String(hours).padStart(2, "0");
  // single digit ko double digit banata hai — jaise 5 ko "05"

  const formattedMinutes = String(minutes).padStart(2, "0");
  // minutes ko 2 digits mein format karta hai

  const formattedSeconds = String(seconds).padStart(2, "0");
  // seconds ko 2 digits mein format karta hai

  const hoursElement = document.getElementById("hours");
  // id="hours" wala element dhoondta hai

  const minutesElement = document.getElementById("minutes");
  // id="minutes" wala element dhoondta hai

  const secondsElement = document.getElementById("seconds");
  // id="seconds" wala element dhoondta hai

  const ampmElement = document.getElementById("ampm");
  // id="ampm" wala element dhoondta hai

  if (hoursElement) {
    // element exist karta hai check karo
    hoursElement.textContent = formattedHours;
    // hours update karo
  }

  if (minutesElement) {
    // element exist karta hai check karo
    minutesElement.textContent = formattedMinutes;
    // minutes update karo
  }

  if (secondsElement) {
    // element exist karta hai check karo
    secondsElement.textContent = formattedSeconds;
    // seconds update karo
  }

  if (ampmElement) {
    // element exist karta hai check karo
    ampmElement.textContent = ampm;
    // AM ya PM update karo
  }

  updateDate();
  // date update karne wala function call karo
}
// updateClock function yahan khatam hota hai

// ============================================

function updateDate() {
  // yeh function current date format karke dikhata hai

  const now = new Date();
  // current date aur time lo

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // 7 din ke naam — index 0 se 6 tak

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // 12 mahino ke naam — index 0 se 11 tak

  const dayName = days[now.getDay()];
  // getDay() 0-6 number deta hai — us number se din ka naam nikalo

  const date = now.getDate();
  // mahine ka din — jaise 27

  const monthName = months[now.getMonth()];
  // getMonth() 0-11 deta hai — us number se mahine ka naam nikalo

  const year = now.getFullYear();
  // poora saal — jaise 2026

  const formattedDate = dayName + ", " + date + " " + monthName + " " + year;
  // sab mila kar ek string — jaise "Saturday, 27 June 2026"

  const dateElement = document.getElementById("clock-date");
  // id="clock-date" wala element dhoondta hai

  if (dateElement) {
    // element exist karta hai check karo
    dateElement.textContent = formattedDate;
    // date element mein formatted date daalo
  }
}
// updateDate function yahan khatam hota hai

// ============================================

updateClock();
// page load hote hi ek baar turant clock chalao

setInterval(updateClock, 1000);
// har 1 second baad updateClock dobara chalao

// ============================================
// TIMER LOGIC — timer.html ke liye
// ============================================

let totalSeconds = 0;
// timer mein kitne seconds baaki hain — shuru mein 0

let timerInterval = null;
// setInterval ka reference store karta hai — pause ke liye zaruri hai

let isRunning = false;
// timer chal raha hai ya nahi — false matlab band hai

// ============================================
// ELEMENTS DHOONDNA
// ============================================

const btnStart = document.getElementById("btn-start");
// Start button dhoondta hai

const btnPause = document.getElementById("btn-pause");
// Pause button dhoondta hai

const btnReset = document.getElementById("btn-reset");
// Reset button dhoondta hai

const inputHours = document.getElementById("input-hours");
// hours input field dhoondta hai

const inputMinutes = document.getElementById("input-minutes");
// minutes input field dhoondta hai

const inputSeconds = document.getElementById("input-seconds");
// seconds input field dhoondta hai

const timerHours = document.getElementById("timer-hours");
// timer display mein hours wala span dhoondta hai

const timerMinutes = document.getElementById("timer-minutes");
// timer display mein minutes wala span dhoondta hai

const timerSeconds = document.getElementById("timer-seconds");
// timer display mein seconds wala span dhoondta hai

const timerMessage = document.getElementById("timer-message");
// finish hone par message dikhane wali div dhoondta hai

// ============================================
// TIMER DISPLAY UPDATE KARNA
// ============================================

function updateTimerDisplay() {
  // yeh function display mein digits update karta hai

  const h = Math.floor(totalSeconds / 3600);
  // totalSeconds mein se hours nikalo — 3600 seconds = 1 hour
  // Math.floor — decimal hata kar poora number lo

  const m = Math.floor((totalSeconds % 3600) / 60);
  // pehle hours hata do (% 3600), phir minutes nikalo (/ 60)

  const s = totalSeconds % 60;
  // 60 se remainder lo — yeh seconds hain

  if (timerHours) {
    // element exist karta hai check karo
    timerHours.textContent = String(h).padStart(2, "0");
    // hours 2 digits mein dikhao
  }

  if (timerMinutes) {
    // element exist karta hai check karo
    timerMinutes.textContent = String(m).padStart(2, "0");
    // minutes 2 digits mein dikhao
  }

  if (timerSeconds) {
    // element exist karta hai check karo
    timerSeconds.textContent = String(s).padStart(2, "0");
    // seconds 2 digits mein dikhao
  }
}

// ============================================
// START BUTTON
// ============================================

if (btnStart) {
  // Start button exist karta hai check karo — clock page par nahi hoga

  btnStart.addEventListener("click", function () {
    // Start button par click hone par yeh function chalega

    if (isRunning) {
      // agar timer already chal raha hai toh kuch mat karo
      return;
      // function se bahar nikal jao
    }

    if (totalSeconds === 0) {
      // agar display 00:00:00 hai toh input se value lo

      const h = parseInt(inputHours.value) || 0;
      // input ki value lo — agar empty hai toh 0 lo
      // parseInt — text ko number mein badalta hai

      const m = parseInt(inputMinutes.value) || 0;
      // minutes input se value lo

      const s = parseInt(inputSeconds.value) || 0;
      // seconds input se value lo

      totalSeconds = h * 3600 + m * 60 + s;
      // sab ko seconds mein badal kar jodo
      // 1 hour = 3600 seconds, 1 minute = 60 seconds
    }

    if (totalSeconds === 0) {
      // agar user ne kuch input hi nahi diya
      if (timerMessage) {
        timerMessage.textContent = "⚠ Please enter a time first!";
        // user ko batao ke time daalo
      }
      return;
      // function se bahar nikal jao
    }

    if (timerMessage) {
      timerMessage.textContent = "";
      // pehle ka koi message hata do
    }

    isRunning = true;
    // timer chal raha hai — flag true karo

    if (btnPause) {
      btnPause.disabled = false;
      // Pause button enable karo — ab pause kar sakte hain
    }

    if (btnStart) {
      btnStart.disabled = true;
      // Start button disable karo — dobara start na ho
    }

    timerInterval = setInterval(function () {
      // har 1 second baad yeh function chalega

      if (totalSeconds <= 0) {
        // agar seconds khatam ho gaye

        clearInterval(timerInterval);
        // setInterval band karo — warna -1, -2 hota rahega

        isRunning = false;
        // timer band hai

        if (timerMessage) {
          timerMessage.textContent = "✔ Time is up!";
          // finish message dikhao
        }

        if (btnStart) {
          btnStart.disabled = false;
          // Start button wapis enable karo
        }

        if (btnPause) {
          btnPause.disabled = true;
          // Pause button disable karo
        }

        return;
        // function se bahar nikal jao
      }

      totalSeconds = totalSeconds - 1;
      // har second ek second ghata do

      updateTimerDisplay();
      // display update karo
    }, 1000);
    // 1000 milliseconds = 1 second

    updateTimerDisplay();
    // turant display update karo — 1 second ki delay na ho
  });
}

// ============================================
// PAUSE BUTTON
// ============================================

if (btnPause) {
  // Pause button exist karta hai check karo

  btnPause.addEventListener("click", function () {
    // Pause button par click hone par

    if (!isRunning) {
      // agar timer chal nahi raha toh kuch mat karo
      return;
    }

    clearInterval(timerInterval);
    // setInterval band karo — timer ruk jayega

    isRunning = false;
    // timer band hai

    if (btnStart) {
      btnStart.disabled = false;
      // Start button enable karo — resume ke liye
    }

    if (btnPause) {
      btnPause.disabled = true;
      // Pause button disable karo
    }
  });
}

// ============================================
// RESET BUTTON
// ============================================

if (btnReset) {
  // Reset button exist karta hai check karo

  btnReset.addEventListener("click", function () {
    // Reset button par click hone par

    clearInterval(timerInterval);
    // setInterval band karo — agar chal raha tha

    isRunning = false;
    // timer band hai

    totalSeconds = 0;
    // seconds wapis zero karo

    updateTimerDisplay();
    // display 00:00:00 kar do

    if (inputHours) {
      inputHours.value = "";
      // hours input khali karo
    }

    if (inputMinutes) {
      inputMinutes.value = "";
      // minutes input khali karo
    }

    if (inputSeconds) {
      inputSeconds.value = "";
      // seconds input khali karo
    }

    if (timerMessage) {
      timerMessage.textContent = "";
      // message hata do
    }

    if (btnStart) {
      btnStart.disabled = false;
      // Start button enable karo
    }

    if (btnPause) {
      btnPause.disabled = true;
      // Pause button disable karo
    }
  });
}
