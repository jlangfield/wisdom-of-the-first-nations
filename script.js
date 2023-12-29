const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const newQuoteBtn2 = document.getElementById("new-quote2");
const newQuoteBtn3 = document.getElementById("new-quote3");
const newQuoteBtn4 = document.getElementById("new-quote4");
const newQuoteBtn5 = document.getElementById("new-quote5");
const newQuoteBtn6 = document.getElementById("new-quote6");

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Show new quote2
function newQuote2() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes2[Math.floor(Math.random() * localQuotes2.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Show new quote3
function newQuote3() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes3[Math.floor(Math.random() * localQuotes3.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Show new quote4
function newQuote4() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes4[Math.floor(Math.random() * localQuotes4.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Show new quote5
function newQuote5() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes5[Math.floor(Math.random() * localQuotes5.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Show new quote6
function newQuote6() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes6[Math.floor(Math.random() * localQuotes6.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
newQuoteBtn2.addEventListener("click", newQuote2);
newQuoteBtn3.addEventListener("click", newQuote3);
newQuoteBtn4.addEventListener("click", newQuote4);
newQuoteBtn5.addEventListener("click", newQuote5);
newQuoteBtn6.addEventListener("click", newQuote6);
twitterBtn.addEventListener("click", tweetQuote);

// On load
// getQuotes();
newQuote();
newQuote2();
newQuote3();
newQuote4();
newQuote5();
newQuote6();