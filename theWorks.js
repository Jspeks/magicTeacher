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
    console.log(e)
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
function drawACard(){};
function victory(){};
function defeat(){};
function whatIs() {
    captainHindsight.textContent = "That is your opponent's life total. Bring that number down to zero by attacking with your creatures to win the game!"
    setTimeout(silence, 5000)
}

// layout some variables
const library = document.getElementById("library");
const lifeDiv = document.getElementById("life")
const catCat = document.querySelectorAll(".catCat");
const romeo = document.querySelectorAll(".romeo");
const nerd = document.querySelectorAll(".nerdAlert");
const tutu = document.querySelectorAll(".tutu");
const plains = document.querySelectorAll(".plains");
const forest = document.querySelectorAll(".forest");
const whiteMana = document.getElementById("whiteMana");
const greenMana = document.getElementById("greenMana");
const creature = document.querySelectorAll(".creature");
const manaProducingLand = document.querySelectorAll(".lands")

let lifeTotal = 20;
let captainHindsight = document.getElementById("moveTaken");
console.log(creature)
// below are the actual functions that will be running/invoked

lifeDiv.addEventListener('mouseover', whatIs)
creature.forEach(c => c.addEventListener('click', tapToAttack));
manaProducingLand.forEach(m => m.addEventListener('click', tapForMana));
