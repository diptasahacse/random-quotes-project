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

    },
    {
        quoteName: `Quality is more important than quantity. One home run is much better than two doubles.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `My model for business is The Beatles: They were four guys that kept each others’ negative tendencies in check; they balanced each other. And the total was greater than the sum of the parts.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `Sometimes when you innovate, you make mistakes. It is best to admit them quickly and get on with improving your other innovations.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `Innovation distinguishes between a leader and a follower.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `Sometimes life is going to hit you in the head with a brick. Don’t lose faith.`,
        authorName: "Steve Jobs"
    },
    {
        quoteName: `Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Someone’s sitting in the shade today because someone planted a tree a long time ago.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `If you aren’t willing to own a stock for 10 years, don’t even think about owning it for 10 minutes.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Our favorite holding period is forever.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Price is what you pay, value is what you get.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `It’s far better to buy a wonderful company at a fair price, than a fair company at a wonderful price.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `The most important quality for an investor is temperament, not intellect.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Risk comes from not knowing what you are doing.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Never invest in a business you cannot understand.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `The most important investment you can make is in yourself.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Never depend on a single income. Make an investment to create a second source.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `No matter how great the talent or efforts, some things just take time. You can’t produce a baby in one month by getting nine women pregnant.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Today people who hold cash equivalents feel comfortable. They shouldn’t. They have opted for a terrible long-term asset, one that pays virtually nothing and is certain to depreciate in value.`,
        authorName: "Warren Buffet"
    },
    {
        quoteName: `Without internet, there would have been no Jack Ma, and no Alibaba or Taobao.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `My job is to help more people have jobs.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `You should learn from your competitor, but never copy. Copy and you die.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `Life is so short, so beautiful. Don’t be so serious about work. Enjoy the lives.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `Today, making money is very simple. But making sustainable money while being responsible to the society and improving the world is very difficult.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `If we are a good team and know what we want to do, one of us can defeat ten of them.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `I don’t want people to have deep pockets but shallow minds.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `If you’ve never tried, how will you ever know if there’s any chance?`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `I call myself a blind man riding on a blind tiger.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `Never ever compete on prices, instead compete on services and innovation.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `If the customer loves you, the government will have to love you.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `You need the right people with you, not the best people.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `Help young people. Help small guys. Because small guys will be big. Young people will have the seeds you bury in their minds, and when they grow up, they will change the world.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `I’m not a tech guy. I’m looking at the technology with the eyes of my customers, normal people’s eyes.`,
        authorName: "Jack Ma"
    },
    {
        quoteName: `When we have money, we start making mistakes.`,
        authorName: "Jack Ma"
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