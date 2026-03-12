const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const buttonTweet =document.getElementById("tweeter");
console.log(buttonTweet);

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    quote.innerHTML = data.quote;  
    author.innerHTML = data.author;
}

getQuote(api_url);

