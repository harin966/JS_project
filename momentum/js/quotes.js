const quotes = [
    {
        quote : "The only way to do great work is to love what you do.",
        author: "Steve Jobs"

    },
    {
        quote : "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"

    },
    {
        quote : "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"

    },
    {
        quote : "A day without laughter is a day wasted.",
        author: "Charlie Chaplin"

    },
    {
        quote : "Why fit in when you were born to stand out?",
        author: "Dr. Seuss"

    },
    {
        quote : "I'm not lazy, I'm on energy-saving mode.",
        author: "Me"

    },
    {
        quote : "Better an oops than a what if.",
        author: "You"

    },
    {
        quote : "Life is like a box of chocolates. You never know what you're gonna get.",
        author: "Forrest Gump"

    },
    {
        quote : "To infinity and beyond!",
        author: "Buzz Lightyear, Toy Story"

    },
    {
        quote : "Just Do It!",
        author: "Nike"

    }
]

const quote = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const idx = Math.floor(Math.random() * quotes.length); 
const todaysQuote = quotes[idx]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;