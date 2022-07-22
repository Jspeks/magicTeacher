// need to make some dummies for what I'll need the game to do
function Intro(){};
function main(){};
function changePhase(){};
function tapForMana(){};
// trying to figure out how to 'onclick' have this function only rotate the element I clicked
function tapToAttack(){
    romeo.style.transform = "rotate(90deg)";
    captainHindsight.textContent = "You attempted to attack, but my code isn't done yet";
    setTimeout(silence, 4000);
};
function silence(){
    captainHindsight.textContent = ""
};
function dealDamage(){};
function playSpellFromHand(){};
function playLandFromHand(){};
function drawACard(){};
function victory(){};
function defeat(){};
function whatIs() {
    captainHindsight.textContent = "That is your opponent's life total. Bring that number down to zero by attacking with your creatures to win the game!"
    setTimeout(silence, 5000)
}

// layout some variables
const lifeDiv = document.getElementById("life")
const catCat = document.getElementById("catCat");
const romeo = document.getElementById("romeo");
const nerd = document.getElementById("nerdAlert");
const tutu = document.getElementById("tutu");
const plains = document.getElementById("plains");
const forest = document.getElementById("forest");
const whiteMana = document.getElementById("whiteMana");
const greenMana = document.getElementById("greenMana");
const library = document.getElementById("library");
const creature = document.querySelectorAll(".creature");

let lifeTotal = 20;
let captainHindsight = document.getElementById("moveTaken");

// below are the actual functions that will be running/invoked

lifeDiv.addEventListener('mouseover', whatIs)
creature.forEach(addEventListener('click', tapToAttack));