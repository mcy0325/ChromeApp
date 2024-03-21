const quotes = [
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Passion governs, and she never governs wisely.",
        author: "Benjamin Franklin",
    },
    {
        quote: "We need men who can dream of things that never were.",
        author: "John F. Kennedy",
    },
    {
        quote: "The more things a man is ashamed of, the more respectable he is.",
        author: "George Bernard Shaw",
    },
    {
        quote: "If we all did the things we are capable of doing, we would literally astound ourselves.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Love is, above all else, the gift of oneself.",
        author: "Jean Anouilh",
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
    },
    {
        quote: "Life is something that everyone should try at least once.",
        author: "Henry J. Tillman",
    },
    {
        quote: "Education is a progressive discovery of our own ignorance.",
        author: "Will Durant",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

