window.onload = () => {
    console.log("Connected to JS File, TO BATTLE!!!");
};

const vikingNames = [
    "Halthor",
    "Olaf",
    "Hodor",
    "Ragnar",
    "Ivar",
    "Utred",
    "Erik",
    "Bjorn",
];

// document.getElementById('gameBoard');
const gameBoard = document.querySelector("#gameBoard");

document.querySelector("#startGameButton").onclick = () => {
    console.log("Starting the War");
    const warGame = new War();

    for (let i = 0; i < 5; i++) {
        warGame.addViking(
            new Viking(
                vikingNames[Math.floor(Math.random() * vikingNames.length)],
                Math.floor(Math.random() * 100) + 50,
                Math.floor(Math.random() * 50) + 350,
                i
            )
        );

        warGame.addSaxon(
            new Saxon(
                Math.floor(Math.random() * 800) + 50,
                Math.floor(Math.random() * 40) + 15
            )
        );
    }

    console.log({ warGame });

    displayRandomViking(
        warGame.vikingArmy[
            Math.floor(Math.random() * warGame.vikingArmy.length)
        ]
    );
};

function displayRandomViking(viking) {
    console.log({ viking });
    const image = document.createElement("img");
    image.src = viking.image;
    const.div = document.createElement('div');
    div.innerHTML =
    <img src="${viking.image}" />
    <div>          </div>
    <h3>Hp</h3>

    gameBoard.appendChild(image);

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>Hello All</h2>
    <h3>See this works!</h3>
    <h1>For The Horde!!</h1>
    `;

    gameBoard.insertBefore(div, image);
}

function attackRandomSaxon(event) {
    const parent = document.querySelector('.vikingBox');
    console.log({
        event: event.parentNode 
        index: [...parent.children].indexOf(event.parentNode),
    });
    
}