let order = [];
let sum = 0;
let blackjack = false;
let alive = false;
let msg = "";

let tit = document.getElementById("tit");
let sum1 = document.getElementById("sum");
let card = document.getElementById("card");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startgame() {
    alive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    order = [firstCard, secondCard];
    sum = firstCard + secondCard;
    start();
}

function start() {
    card.textContent = "Cards: ";
    for (let i = 0; i < order.length; i++) {
        card.textContent += order[i] + " ";
    }

    sum1.textContent = "Sum: " + sum;
    if (sum <= 20) {
        msg = "Drop a new card?";
    } else if (sum === 21) {
        msg = "Congratulations, You won the game!";
        blackjack = true;
    } else {
        msg = "Uffs, Better luck next time!";
        alive = false;
    }
    tit.textContent = msg;
}

function newgame() {
    if (alive === true && blackjack === false) {
        let card = getRandomCard();
        sum += card;
        order.push(card);
        start();
    }
}
