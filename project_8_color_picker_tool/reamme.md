# Project 8 - Color Picker Tool

## Description
A simple color picker tool that lets users select any color using the browser's 
built-in color picker. The tool displays the selected color's HEX and RGB values 
in real-time, changes the page background to match the selected color, and allows 
copying the HEX code to clipboard with a single click.

## Features
- Live color selection using native HTML color input
- Real-time HEX value display
- Real-time RGB value display (converted from HEX using JavaScript)
- Dynamic background color change matching selected color
- Copy HEX code to clipboard with button click
- "Copied!" feedback message after copying

## Tech Stack
- HTML5
- CSS3 (vanilla, no framework)
- JavaScript (vanilla, no library)

## Concepts Learned
- `document.getElementById()` to select DOM elements
- HEX to RGB color conversion logic using `slice()` and `parseInt()`
- Template literals for building dynamic strings
- `textContent` to update text inside elements dynamically
- `addEventListener("input", ...)` for live, continuous event detection
- `document.body.style.backgroundColor` to change styles via JavaScript
- `navigator.clipboard.writeText()` Clipboard API for copy functionality
- `setTimeout()` for delayed actions (temporary button text change)
- Anonymous functions inside event listeners
- CSS attribute selectors `input[type="color"]`
- CSS `:hover` pseudo-class
- Debugging invalid CSS values (missing space breaking a property)

## How to Run
1. Open `index.html` in browser (or use Live Server in VS Code)
2. Click the color box to open the color picker
3. Select any color
4. HEX, RGB values and page background update automatically
5. Click "Copy HEX" to copy the HEX code to clipboard