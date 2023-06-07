
let sum = 0;

// array - ordered list of items
let cards = []; // an array of string : "A" , "2",... 
let hasBlackjack = false, isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("player-card-el");

//let let sumEl = document.querySelector(#sum-el"); also works, be mindful that sum-el is an id, so add # infront
let sumEl = document.getElementById("player-sum-el");

let playerEl = document.getElementById("player-el");
let player = {
    name: "Joe",
    chip: 145
}

function renderGame() {
    if(sum <= 20) {
        //console.log("Do you want to draw a new card? 🙂");
        message = "Do you want to draw a new card? 🙂";
        
    }
    else if (sum === 21) {
        //console.log("Wohoo! You've got Blackjack! 🥳");
        hasBlackjack = true;
        message = "Wohoo! You've got Blackjack! 🥳"
    }
    else {
        //console.log("You're out of the game! 😭");
        isAlive = false;
        message = "You're out of the game! 😭"
    }
    
    //console.log(isAlive);
    //console.log(hasBlackjack);
    //console.log(message);
    messageEl.textContent = message;
    sumEl.textContent = "Sum: "+ sum;

    cardEl.textContent = "Card: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ", ";
    }

    playerEl.textContent = player.name + ": $" + player.chip

}

function startGame() {
    let firstCard = getRandomCard(), secondCard = getRandomCard();
    cards = [numberToCard(firstCard), numberToCard(secondCard)] // Yes, you can reassign an array in JS if it is declared with "let"
    
    sum = addToSum(firstCard) + addToSum(secondCard)
    isAlive = true;
    renderGame();
}

function newCard() {

    if (isAlive && !hasBlackjack) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard();
        sum += addToSum(card);
        cards.push(numberToCard(card));
        renderGame();
    }



}

function getRandomCard() {
    let randomNum = Math.floor( Math.random() *13) +1;
    let card = randomNum.toString();

    return card;
}

function numberToCard(num) {
    if (num === "1") {
        return "A";
    }
    else if (num === "11") {
        return "J";
    }
    else if (num === "12") {
        return "Q";
    }
    else if (num === "13") {
        return "K";
    } 
    else {
        return num;
    }
}

function addToSum (card) {
    if (card === "1") {
        return Number(11);
    }
    else if (card === "11") {
        return Number(10);
    }
    else if (card === "12") {
        return Number(10);
    }
    else if (card === "13") {
        return Number(10);
    }
    else {
        return Number(card);
    }
}

