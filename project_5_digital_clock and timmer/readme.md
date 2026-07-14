# ⏰ ClockZone — Digital Clock & Countdown Timer

A personal-use productivity tool built with pure Vanilla HTML, CSS, and JavaScript.
No frameworks. No libraries. No dependencies.

---

## 🚀 Live Demo

> Open `index.html` in any browser — no setup required.

---

## 📁 Project Structure

project_5_digital_clock_timer/
<br>
 ├── index.html     → Digital Clock page
<br>
 ├── timer.html     → Countdown Timer page
<br>
 ├── style.css      → Shared styles for both pages
<br>
 ├── script.js      → Shared JS logic for both pages
<br>
 └── readme.md      → Project documentation

 ---

## ✨ Features

### 🕐 Digital Clock (index.html)
- Live real-time clock — updates every second
- 12-hour format with AM/PM
- Live date display — Day, Date, Month, Year

### ⏱ Countdown Timer (timer.html)
- User inputs Hours, Minutes, Seconds
- Start — begins countdown
- Pause — freezes timer at current value
- Resume — continues from where it paused
- Reset — clears everything back to 00:00:00
- Finish alert — shows message when timer reaches zero

---

## 🛠 Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript (Vanilla) | Clock logic, Timer logic |

---

## 💡 Concepts Used

- `new Date()` — fetches system time
- `setInterval()` — runs function every 1 second
- `clearInterval()` — stops the interval on pause/reset
- `padStart()` — formats single digits to double digits
- `addEventListener()` — handles button clicks
- `Math.floor()` — converts seconds to hours/minutes
- DOM manipulation — `getElementById`, `textContent`
- `disabled` attribute — controls button states

---

## 🎨 Design

- Dark minimal theme
- Neon blue (`#00d4ff`) accent color
- Monospace font — `Courier New`
- Two-page layout — Clock and Timer separated

---

## 👨‍💻 Author

**Abdul Sattar**
- GitHub: [github.com/iabdulsattarktk](https://github.com/iabdulsattarktk)
- LinkedIn: [linkedin.com/in/abdulsattar07](https://linkedin.com/in/abdulsattar07)

---

## 📦 Part Of

> 🗂 100 Web Projects Series — Project #5