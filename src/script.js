window.onload = () => {
    console.log("Connected to JS File, TO BATTLE!!!");
};

let warGame;
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

const gameBoard = document.querySelector("#gameBoard");
const armySize = 5;
const textDisplay = document.querySelector("#textDisplay");
const startGameButton = document.querySelector("#startGameButton");

startGameButton.onclick = (button) => {
    console.log("Starting the War");
    warGame = new War();

    for (let i = 0; i < armySize; i++) {
        warGame.addViking(
            new Viking(
                vikingNames[Math.floor(Math.random() * vikingNames.length)],
                Math.floor(Math.random() * 200) + 50,
                Math.floor(Math.random() * 50) + 50
            )
        );

        warGame.addSaxon(
            new Saxon(
                Math.floor(Math.random() * 200) + 50,
                Math.floor(Math.random() * 30) + 50
            )
        );
    }

    console.log({ warGame });

    displayArmies();
    button.target.setAttribute("style", "display: none;");

    textDisplay.innerHTML = "The War has Begun!";
};

function displayArmies() {
    gameBoard.innerHTML = "";
    document.querySelector("#playerScore").innerHTML =
        armySize - warGame.saxonArmy.length;
    document.querySelector("#saxonScore").innerHTML =
        armySize - warGame.vikingArmy.length;

    const vikingContainer = document.createElement("div");
    const saxonContainer = document.createElement("div");

    vikingContainer.classList.add("vikingContainer");
    saxonContainer.classList.add("saxonContainer");

    gameBoard.appendChild(vikingContainer);
    gameBoard.appendChild(saxonContainer);

    warGame.vikingArmy.forEach((viking) => {
        displayVikings(viking);
    });

    warGame.saxonArmy.forEach((saxon) => {
        displaySaxons(saxon);
    });
}

function displayVikings(viking) {
    const vikingContainer = document.querySelector(".vikingContainer");

    const div = document.createElement("div");
    div.classList.add("vikingBox");
    div.innerHTML = `
    <img src="${viking.image}" />
    <div>
    <h3>HP: ${viking.health}</h3>
    <h3>ATK: ${viking.attack()}</h3>
    </div>
    <button onClick="attackRandomSaxon(this)">Attack</button>
    `;

    vikingContainer.appendChild(div);
}

function displaySaxons(saxon) {
    const saxonContainer = document.querySelector(".saxonContainer");

    const div = document.createElement("div");
    div.classList.add("saxonBox");
    div.innerHTML = `
    <div>
    <h3>HP: ${saxon.health}</h3>
    <h3>ATK: ${saxon.attack()}</h3>
    </div>
    <img src="${saxon.image}" />
    `;

    saxonContainer.appendChild(div);
}

function attackRandomSaxon(event) {
    if (warGame.vikingArmy.length === 0 || warGame.saxonArmy.length === 0) {
        return gameOver();
    }
    const vikingContainer = document.querySelector(".vikingContainer");

    warGame.vikingAttack(
        [...vikingContainer.children].indexOf(event.parentNode)
    );

    setTimeout(() => {
        const result = warGame.saxonAttack();

        gameOver();
    }, 1000);
    gameOver();
}

function gameOver() {
    if (warGame.vikingArmy.length === 0 || warGame.saxonArmy.length === 0) {
        startGameButton.setAttribute("style", "display: unset;");
    }
    textDisplay.innerHTML = "";
    textDisplay.innerHTML = warGame.showStatus();
}