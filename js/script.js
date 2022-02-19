const allQuotes = [{
        quoteName: `The people who are crazy enough to think they can change the world are the ones who do.`,
        authorName: "Steve Jobs"

    },
    {
        quoteName: `Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.`,
        authorName: "Steve Jobs"

    },
    {
        quoteName: `I’ve always been attracted to the more revolutionary changes. I don’t know why. Because they’re harder. They’re much more stressful emotionally. And you usually go through a period where everybody tells you that you’ve completely failed.`,
        authorName: "Steve Jobs"

    },
    {
        quoteName: `Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.`,
        authorName: "Steve Jobs"

    }

];
generateQuote();

function generateQuote() {
    let randomNumber = Math.ceil(Math.random() * allQuotes.length);
    let quote = allQuotes[randomNumber - 1].quoteName;
    let quoteAuthor = allQuotes[randomNumber - 1].authorName;
    document.getElementById('qoute-name').innerText = quote;
    document.getElementById('quote-author').innerText = quoteAuthor;
    console.log(randomNumber - 1)

}
document.getElementById('random-quote-button').addEventListener('click', function() {
    generateQuote();
});