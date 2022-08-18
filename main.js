var quote = document.getElementById('quote');
var randomQuotes = [` “Be yourself; everyone else is already taken.”
    ― Oscar Wilde `,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`,
    `
    “You only live once, but if you do it right, once is enough.”
    ― Mae West`,
    `“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi`,
    `“In three words I can sum up everything I've learned about life: it goes on.”
    ― Robert Frost`,
       `“If you tell the truth, you don't have to remember anything.”
       ― Mark Twain`]

    function changeQuote() {
        var i = Math.floor((Math.random() * randomQuotes.length));
                 quote.innerText = randomQuotes[i];
      }
      
      changeQuotes();