const gameBox = document.querySelector(".game");
const emojis = [
    "🐕",
    "🐕",
    "🦣",
    "🦣",
    "🐢",
    "🐢",
    "🐳",
    "🐳",
    "🐡",
    "🐡",
    "🦀",
    "🦀",
    "🦜",
    "🦜",
    "🪲",
    "🪲"
];
let openCards = [];

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < emojis.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = shuffledEmojis[i];
    card.onclick = handleClick;
    gameBox.appendChild(card);
}

function handleClick() {
    this.classList.add("openCard");
    openCards.push(this);

    if (openCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards.forEach(card => card.classList.add("matchedCard"));
    }

    openCards.forEach(card => {
        card.classList.remove("openCard");
    });
    openCards = [];

    if (document.querySelectorAll(".matchedCard").length === emojis.length) {
        alert("Você venceu!");
    }
}
