const req = new XMLHttpRequest();
const gameCardsElement = document.getElementById('gameCards');

let contents = [];

req.onload = () => {
    let res = JSON.parse(req.response);

    if (req.readyState === 4 && req.status === 200) {
        for (const value of Object.values(res)) {
            content = `
            <div class="card">
                <a href="detailsGame.html?id=${value.id}"><img src="${value.imgCover}" alt="${value.imgAlt}"></a>
            </div>
            `;
            contents.push(content);
        };

        gameCardsElement.innerHTML = contents.join('');
    };
};

req.open('GET', '../data/games.json');
req.send();
