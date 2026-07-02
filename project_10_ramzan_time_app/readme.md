# 🌙 Ramzan Time App

A clean, responsive, and lightweight web application designed to fetch accurate daily Sehri and Iftar timings for cities across Pakistan. 

This project interacts with a public REST API to retrieve real-time prayer schedules based on the Karachi calculation method, making it highly reliable for local users.

---

## 🚀 Features

* **Real-time Data Fetching:** Integrates with the Aladhan Prayer Times API for live schedules.
* **Precise Local Calculations:** Uses Method `1` (University of Islamic Sciences, Karachi) tailored for Pakistan.
* **Responsive Layout:** Beautiful UI constructed with flexbox that works flawlessly across mobile, tablet, and desktop devices.
* **Input Validation:** Handles empty fields and API error tracking gracefully with custom user alerts.
* **Clean Code Architecture:** Well-commented codebase structured for high readability and easy updates.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic markup structure.
* **CSS3:** Custom styles leveraging Flexbox layout, CSS variables, and modern hover transitions.
* **JavaScript (ES6):** Modern asynchronous JavaScript handling DOM manipulation and the Fetch API.
* **External API:** [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api)

---

## 📂 Project Structure

```text
├── index.html   # Main application interface and DOM structure
├── style.css    # Responsive styles and theme definitions
└── script.js    # Fetch logic, state handling, and DOM updating