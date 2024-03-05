const req = new XMLHttpRequest();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const detailImage = document.querySelector("img.detailImage");
const gameName = document.querySelector("h1.gameName");
const release = document.querySelector("p.release");
const plataform = document.querySelector("p.plataform");
const players = document.querySelector("p.players");
const about = document.querySelector("p.about");

req.onload = () => {
    let data = JSON.parse(req.response);

    if (req.status === 200) {
        data.forEach(game => {
            if (game.id === Number(id)){
                detailImage.src = game.imgBanner;
                gameName.innerText = game.name;
                release.innerText = game.release;
                plataform.innerText = game.plataform;
                players.innerText = `${game.players} jogadores`;
                about.innerText = game.about;
            }
        });
    };
};












req.open('GET', '../data/games.json');
req.send();
