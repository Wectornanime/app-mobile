const req = new XMLHttpRequest();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const detailImage = document.querySelector("img.detailImage");
const gameLogo = document.querySelector("img.logoImg");
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
                detailImage.alt = `Imagem do jogo ${game.name}`;
                gameLogo.src = game.logo;
                gameLogo.alt = `Logo do jogo ${game.name}`;
                release.innerText = game.release;
                plataform.innerText = game.plataform;
                about.innerText = game.about;
                players.innerText = (game.players > 1) ? (`${game.players} jogadores`) : (`${game.players} jogador`);
            }
        });
    };
};

req.open('GET', 'data/games.json');
req.send();
