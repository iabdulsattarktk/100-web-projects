// HTML elements pakdo
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Random quote dikhane ka function — API se seedha ek quote lao
function showRandomQuote() {

    // Nai API ko request bhejo — yeh CORS allow karta hai
    fetch("https://quotesapi.prayushadhikari.com.np/api/quotes/random")

    // Response ko JSON mein badlo
    .then(function(response) {
        return response.json();
    })

    // Data aa gaya — HTML mein daalo
    .then(function(data) {

        // Quote text HTML mein daalo — is API mein "quote" key hai "text" nahi
        quoteText.innerText = data.quote;

        // Author check karo — hai toh dikhao — nahi toh Unknown
        if(data.author) {
            quoteAuthor.innerText = "— " + data.author;
        } else {
            quoteAuthor.innerText = "— Unknown";
        }
    });
}

// Button click hone par naya quote lao
newQuoteBtn.addEventListener("click", function() {
    showRandomQuote();
});

// Page load hote hi pehla quote dikhao
showRandomQuote();