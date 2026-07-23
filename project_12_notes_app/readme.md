Notes App

Ek vanilla HTML, CSS aur JavaScript se bani Notes App — jisme notes create, edit, delete, aur search kiye ja sakte hain. Data browser ke localStorage mein persist hota hai, matlab page refresh ya close karne ke baad bhi notes safe rehte hain.

Features
Add Note — Title aur body ke sath naya note banayein
Color Tagging — Har note ko 5 colors (yellow, pink, blue, green, purple) mein se ek color assign karein
Edit Note — Existing note ki details update karein
Delete Note — Koi bhi note hata dein
Character Counter — Note body likhte waqt live character count (max 500)
Timestamp — Har note ke sath uski creation date
Empty State — Jab koi note na ho, "No notes yet" message dikhta hai
Responsive Grid — Desktop par 3 columns, mobile par 1 column
LocalStorage Persistence — Notes browser band karne ke baad bhi save rehti hain
Tech Stack
HTML5
CSS3 (Grid Layout, Flexbox, Media Queries)
Vanilla JavaScript (ES6+)
document.querySelector / querySelectorAll
Event Delegation
Array methods (push, filter, find, findIndex, forEach)
localStorage API + JSON.stringify / JSON.parse
Project Structure
project-12-notes-app/
├── index.html
├── style.css
├── script.js
└── readme.md
How to Run
Repository clone karein ya ZIP download karein
index.html file ko kisi bhi browser mein khol lein
(Optional) VS Code mein Live Server extension use karke chalayein
Core Logic Overview
Function	Kaam
addNote()	Naya note add karta hai, ya agar edit mode mein ho to existing note update karta hai
renderNotes()	Notes array ko dobara HTML cards mein render karta hai
saveNotes()	Notes array ko localStorage mein save karta hai
getColorValue()	Color name ko uske hex code mein convert karta hai
Event Delegation (notesGrid)	Delete aur Edit buttons ke clicks ko handle karta hai, bina har button par alag listener lagaye
Author

Abdul Sattar — BS IT Student, Air University Islamabad