// Quotes ka array — type.fit API se liye hue real quotes
const quotes = [
    { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    { text: "You can observe a lot just by watching.", author: "Yogi Berra" },
    { text: "A house divided against itself cannot stand.", author: "Abraham Lincoln" },
    { text: "Difficulties increase the nearer we get to the goal.", author: "Johann Wolfgang von Goethe" },
    { text: "Fate is in your hands and no one elses.", author: "Byron Pulsifer" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
];

// HTML elements pakdo
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Random quote dikhane ka function
function showRandomQuote() {

    // 0 se 19 ke beech random number nikalo
    let randomIndex = Math.floor(Math.random() * quotes.length);

    // Us number wali quote uthao
    let randomQuote = quotes[randomIndex];

    // Quote text HTML mein daalo
    quoteText.innerText = randomQuote.text;

    // Author HTML mein daalo
    quoteAuthor.innerText = "— " + randomQuote.author;
}

// Button click par naya quote dikhao
newQuoteBtn.addEventListener("click", function() {
    showRandomQuote();
});

// Page load hote hi pehla quote dikhao
showRandomQuote();