const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");

// quotes

const newQuoteBtn = document.getElementById("new-quote");
const newQuoteBtn2 = document.getElementById("new-quote2");
const newQuoteBtn3 = document.getElementById("new-quote3");
const newQuoteBtn4 = document.getElementById("new-quote4");
const newQuoteBtn5 = document.getElementById("new-quote5");
const newQuoteBtn6 = document.getElementById("new-quote6");
const newQuoteBtn7 = document.getElementById("new-quote7");
const newQuoteBtn8 = document.getElementById("new-quote8");
const newQuoteBtn9 = document.getElementById("new-quote9");
const newQuoteBtn10 = document.getElementById("new-quote10");
const newQuoteBtn11 = document.getElementById("new-quote11");
const newQuoteBtn12 = document.getElementById("new-quote12");
const newQuoteBtn13 = document.getElementById("new-quote13");
const newQuoteBtn14 = document.getElementById("new-quote14");
const newQuoteBtn15 = document.getElementById("new-quote15");
const newQuoteBtn16 = document.getElementById("new-quote16");
const newQuoteBtn17 = document.getElementById("new-quote17");
const newQuoteBtn18 = document.getElementById("new-quote18");
const newQuoteBtn19 = document.getElementById("new-quote19");
const newQuoteBtn20 = document.getElementById("new-quote20");
const newQuoteBtn21 = document.getElementById("new-quote21");
const newQuoteBtn22 = document.getElementById("new-quote22");
const newQuoteBtn23 = document.getElementById("new-quote23");

// Loader
const loader = document.getElementById("loader");

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Show new quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote2
function newQuote2() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes2[Math.floor(Math.random() * localQuotes2.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote3
function newQuote3() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes3[Math.floor(Math.random() * localQuotes3.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote4
function newQuote4() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes4[Math.floor(Math.random() * localQuotes4.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote5
function newQuote5() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes5[Math.floor(Math.random() * localQuotes5.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote6
function newQuote6() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes6[Math.floor(Math.random() * localQuotes6.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote7
function newQuote7() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes7[Math.floor(Math.random() * localQuotes7.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote8
function newQuote8() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes8[Math.floor(Math.random() * localQuotes8.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote9
function newQuote9() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes9[Math.floor(Math.random() * localQuotes9.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote10
function newQuote10() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes10[Math.floor(Math.random() * localQuotes10.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote11
function newQuote11() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes11[Math.floor(Math.random() * localQuotes11.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote12
function newQuote12() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes12[Math.floor(Math.random() * localQuotes12.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote13
function newQuote13() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes13[Math.floor(Math.random() * localQuotes13.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote14
function newQuote14() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes14[Math.floor(Math.random() * localQuotes14.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote15
function newQuote15() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes15[Math.floor(Math.random() * localQuotes15.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote16
function newQuote16() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes16[Math.floor(Math.random() * localQuotes16.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote17
function newQuote17() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes17[Math.floor(Math.random() * localQuotes17.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote18
function newQuote18() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes18[Math.floor(Math.random() * localQuotes18.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote19
function newQuote19() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes19[Math.floor(Math.random() * localQuotes19.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote20
function newQuote20() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes20[Math.floor(Math.random() * localQuotes20.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote21
function newQuote21() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes21[Math.floor(Math.random() * localQuotes21.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote22
function newQuote22() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes22[Math.floor(Math.random() * localQuotes22.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Show new quote23
function newQuote23() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes23[Math.floor(Math.random() * localQuotes23.length)];
    // Check if author name is blank to replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
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
newQuoteBtn7.addEventListener("click", newQuote7);
newQuoteBtn8.addEventListener("click", newQuote8);
newQuoteBtn9.addEventListener("click", newQuote9);
newQuoteBtn10.addEventListener("click", newQuote10);
newQuoteBtn11.addEventListener("click", newQuote11);
newQuoteBtn12.addEventListener("click", newQuote12);
newQuoteBtn13.addEventListener("click", newQuote13);
newQuoteBtn14.addEventListener("click", newQuote14);
newQuoteBtn15.addEventListener("click", newQuote15);
newQuoteBtn16.addEventListener("click", newQuote16);
newQuoteBtn17.addEventListener("click", newQuote17);
newQuoteBtn18.addEventListener("click", newQuote18);
newQuoteBtn19.addEventListener("click", newQuote19);
newQuoteBtn20.addEventListener("click", newQuote20);
newQuoteBtn21.addEventListener("click", newQuote21);
newQuoteBtn22.addEventListener("click", newQuote22);
newQuoteBtn23.addEventListener("click", newQuote23);

// twitter
twitterBtn.addEventListener("click", tweetQuote);

// On load
// getQuotes();
// showLoadingSpinner();
newQuote();
newQuote2();
newQuote3();
newQuote4();
newQuote5();
newQuote6();
newQuote7();
newQuote8();
newQuote9();
newQuote10();
newQuote11();
newQuote12();
newQuote13();
newQuote14();
newQuote15();
newQuote16();
newQuote17();
newQuote18();
newQuote19();
newQuote20();
newQuote21();
newQuote22();
newQuote23();

// To display duplicates in console

function findDuplicates(array) {
    const seen = new Map();
    const duplicates = [];

    for (const quote of array) {
        const key = `${quote.text.trim().toLowerCase()}|${quote.author.trim().toLowerCase()}`;
        
        if (seen.has(key)) {
            // Duplicate found, add both the current and previous objects to duplicates array
            duplicates.push(seen.get(key));
            duplicates.push(quote);
        } else {
            seen.set(key, quote);
        }
    }

    return duplicates;
}

// Update 'localQuotes' number to show duplicates for each array

const duplicateQuotes = findDuplicates(localQuotes22);

if (duplicateQuotes.length > 0) {
    console.log('Duplicates found:');
    duplicateQuotes.forEach((quote, index) => {
        console.log(`Duplicate ${index + 1}:`);
        console.log(quote);
        console.log('---');
    });
} else {
    console.log('No duplicates found in the array.');
}