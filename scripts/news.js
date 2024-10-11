const apiKey = '85a996a850bc46e79483918a1aacc252';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const newsData = data.articles;
        const newsList = document.getElementById('news-list');

        newsData.forEach((item) => {
            const newsItem = document.createElement('li');
            newsItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            `;
            newsList.appendChild(newsItem);
        });
    })
    .catch(error => console.error(error));