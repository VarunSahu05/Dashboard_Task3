// Motivational Quote Carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn1');
const nextBtn = document.querySelector('.next-btn1');
const quoteElement = document.querySelector('.quote');


let currentQuote = 0;

function generateQuoteCard(quote) {
    const quoteCardHTML =`
        <div class="quote" style="background-image: url(${quote.backgroundImage}); background-size: cover; background-position: center; height: 300px; display: flex; justify-content: center; align-items: center; color: #fff;">
            <p style="font-size: 24px; font-weight: bold;">${quote.text}</p><br>
            <p class="author" style="font-style: italic; text-align: right; font-size: 15px; font-weight:600; color: #ffffff; margin-top: 100px;}">- ${quote.author}</p>
        </div>
    `;
    return quoteCardHTML;
}
function updateQuote() {
    const quote = quoteData[currentQuote];
    quoteElement.innerHTML = generateQuoteCard(quote);
    quoteContainer.style.backgroundImage = `url(${quote.backgroundImage})`;
}

prevBtn.addEventListener('click', () => {
    currentQuote--;
    if (currentQuote < 0) {
        currentQuote = quoteData.length - 1;
    }
    updateQuote();
});

nextBtn.addEventListener('click', () => {
    currentQuote++;
    if (currentQuote >= quoteData.length) {
        currentQuote = 0;
    }
    updateQuote();
});


const quoteData = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        backgroundImage: "https://wallpapers.com/images/hd/orange-background-uxspo3zg7s0f9un0.jpg"

    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        backgroundImage: "https://th.bing.com/th/id/OIP.nOdU5bCs8p831P4TXMVuXgHaEK?w=1280&h=720&rs=1&pid=ImgDetMain"

    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        backgroundImage: "https://th.bing.com/th/id/OIP.KqgmYBeA1LNiGlfIfA6-2AAAAA?w=242&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"

    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        backgroundImage: "https://th.bing.com/th/id/R.1073db72463ca6c3ee33dfa7ac355923?rik=l7%2b7uCzA%2bb5TEw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2fa%2fa%2f495733.jpg&ehk=pHOxekIIZBYCllmTkLByHb24mNvadKJB%2fLeh%2b1MKbcE%3d&risl=&pid=ImgRaw&r=0"

    },
    {
        text: "When you come to the end of your rope, tie a knot and hang on.",
        author: "Franklin D. Roosevelt",
        backgroundImage: "https://wallpaperaccess.com/full/260325.jpg"

    },
];


updateQuote();