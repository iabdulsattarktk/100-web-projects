# Project 14 — Tip Calculator

Ye ek vanilla HTML, CSS, aur JavaScript se bana Tip Calculator hai. User bill amount, tip percentage, aur number of people enter karta hai — app tip amount aur total amount per person calculate karke dikhata hai.

## Features

- Bill amount, tip %, aur number of people input
- Tip amount aur total amount calculate karta hai
- Result ko per person split karta hai
- Fully responsive design (mobile, tablet, desktop)
- Semantic HTML tags (header, nav, main, footer)
- Sticky navbar aur footer layout

## Tech Stack

- HTML5 (semantic tags)
- CSS3 (Flexbox, Media Queries)
- Vanilla JavaScript (DOM manipulation, event listeners)

## How It Works

1. User bill amount, tip percentage, aur number of people enter karta hai
2. "Calculate" button click karne par:
   - Tip amount calculate hota hai: `(bill * tip%) / 100`
   - Total amount calculate hota hai: `bill + tip`
   - Dono ko number of people se divide kiya jata hai (per person split)
3. Result screen par turant update ho jata hai

## Folder Structure

project-14-tip-calculator/ <br>
├── index.html<br>
├── style.css<br>
├── script.js<br>
└── readme.md<br>

## Live Demo

[Live URL yahan paste karo Vercel deploy ke baad]

## Screenshots

[Screenshot yahan add kar sakte ho]

## Learnings

- DOM elements ko `querySelector()` se select karna
- `addEventListener()` se click event handle karna
- `Number()` se string ko number mein convert karna
- `.textContent` se dynamically page update karna
- Flexbox se sticky footer layout banana
- Media queries se responsive design implement karna