// need to make some dummies for what I'll need the game to do
function Intro(){};
function main(){};
function changePhase(){};
function tapForMana(e){
    e.target.style.transform = "rotate(90deg)";
    captainHindsight.textContent = "You attempted to produce mana, but my code isn't done yet";
    setTimeout(silence, 4000);
};
function tapToAttack(e) {
    e.target.style.transform = "rotate(90deg)";
    captainHindsight.textContent = "You attempted to attack, but my code isn't done yet";
    setTimeout(silence, 4000);
};
function silence(){
    captainHindsight.textContent = ""
};
function dealDamage(){};
function playSpellFromHand(){};
function playLandFromHand(){};

let topCard = 0;
function drawACard(){
    let drawnCard = document.createElement('img')
    drawnCard.src = deckOfCards[topCard].src;
    for (let i=0; i<deckOfCards[topCard].classes.length; i++){
        drawnCard.classList.add(deckOfCards[topCard].classes[i]);
    }
    hand.append(drawnCard);
    topCard+=1;
    console.log(drawnCard);

    // hand.append(deckOfCards[topCard]); 
    // topCard+=1;
};
function victory(){};
function defeat(){};
function whatIs() {
    captainHindsight.textContent = "That is your opponent's life total. Bring that number down to zero by attacking with your creatures to win the game!";
    setTimeout(silence, 5000);
}

// layout some variables
const hand = document.getElementById("hand")
const permanents = document.getElementById("permanents")
const manaPool = document.getElementById("lands")
const library = document.getElementById("library");
const lifeDiv = document.getElementById("life")

const whiteMana = document.querySelectorAll(".whiteMana");
const greenMana = document.querySelectorAll(".greenMana");
const catCat = document.querySelectorAll(".catCat");
const romeo = document.querySelectorAll(".romeo");
const nerd = document.querySelectorAll(".nerdAlert");
const tutu = document.querySelectorAll(".tutu");
const plains = document.querySelectorAll(".plains");
const forest = document.querySelectorAll(".forest");
const creature = document.querySelectorAll(".creature");
const manaProducingLand = document.querySelectorAll(".lands")

let lifeTotal = 20;
let captainHindsight = document.getElementById("moveTaken");

// make a deck of "cards"

let c1 = {
    src: "./assets/romeo.png",
    classes: ["card", "creature", "romeo"]
}
let c2 = {
    src: "./assets/twoTwo.png",
    classes: ["card", "creature", "tutu"]
}
let c3 = {
    src: "./assets/catCat.png",
    classes: ["card", "creature", "catCat"]
}
let c4 = {
    src: "./assets/nerdAlert.png",
    classes: ["card", "creature", "nerdAlert"]
}
let l1 = {
    src: "./assets/plains.png",
    classes: ["card", "land", "plains"]
}
let l2 = {
    src: "./assets/forest.png",
    classes: ["card", "land", "forest"]
}
// let c1 = `<img class="card creature romeo" src="./assets/romeo.png">`;
// let c2 = `<img class="card creature tutu" src="./assets/twoTwo.png">`;
// let c3 = `<img class="card creature catCat" src="./assets/catCat.png">`;
// let c4 = `<img class="card creature nerdAlert" src="./assets/nerdAlert.png">`;
// let l1 = `<img class="card lands plains" src="./assets/plains.png">`;
// let l2 = `<img class="card lands forest" src="./assets/forest.png">`;

let deckOfCards = [c1, l1, c2, c1, l1, c3, l2, l1, c4, l1, c2, c4, c3, l2, c1, l2, c2, l2, l2];

// below are the actual functions that will be running/invoked
// the event listeners are added before cards are drawn, so any drawn cards do not have the listener
// need to add event listeners for play card in the draw card function
// need to add event listener for attack in the play spell function 
// etc.. 

lifeDiv.addEventListener('mouseover', whatIs)
creature.forEach(c => c.addEventListener('click', tapToAttack));
manaProducingLand.forEach(m => m.addEventListener('click', tapForMana));
library.addEventListener('click', drawACard)