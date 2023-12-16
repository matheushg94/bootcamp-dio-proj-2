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
    gameBox.appendChild(card);
}
