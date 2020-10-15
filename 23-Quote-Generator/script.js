const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//show loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//hide loader
function completeLoading() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// get quote from api

async function getQuote() {
  loading();
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const apiURL =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyURL + apiURL);
    const data = await response.json();

    //blank author then unknown
    if (data.quoteAuthor !== "") {
      authorText.innerText = data.quoteAuthor;
    } else {
      authorText.innerText = "'Unknown'";
    }
    //reduce font size for long quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;

    completeLoading();
    
  } catch (error) {
    //getQuote();
    console.log("Error========>>>", error);
  }
}
//Twee quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "blank");
}

// load function
getQuote();

//event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);
