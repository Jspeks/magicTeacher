
// layout some variables
const hand = document.getElementById("hand");
const permanents = document.getElementById("permanents");
const landsInPlay = document.getElementById("lands");
const library = document.getElementById("library");
const lifeDiv = document.getElementById("life");
const manaPool = document.getElementById("manaPool");

// these are the phases of the turn
let untapDiv = document.getElementById("untap");
let upkeepDiv = document.getElementById("upkeep");
let drawDiv = document.getElementById("draw");
let preCombatDiv = document.getElementById("preCombat");
let combatDiv = document.getElementById("combat");
let damageDiv = document.getElementById("damage");
let postCombatDiv = document.getElementById("postCombat");
let endDiv = document.getElementById("endPhase");

const whiteMana = document.querySelectorAll(".whiteMana");
const greenMana = document.querySelectorAll(".greenMana");
const catCat = document.querySelectorAll(".catCat");
const romeo = document.querySelectorAll(".romeo");
const nerd = document.querySelectorAll(".nerdAlert");
const tutu = document.querySelectorAll(".tutu");
const plains = document.querySelectorAll(".plains");
const forest = document.querySelectorAll(".forest");
const creature = document.querySelectorAll(".creature");
const manaProducingLand = document.querySelectorAll(".lands");

let topCard = 0;
let lifeTotal = 20;
let captainHindsight = document.getElementById("moveTaken");
let totalDamage = 0;

// need to make some dummies for what I'll need the game to do
function Intro(){};
function main(){
    lifeDiv.append(lifeTotal);
    lifeDiv.addEventListener('click', whatIs);    
    captainHindsight.textContent = "I will be your guide. Below, I will inform you of any actions you take during your playthrough."
    drawSeven()
};
function drawSeven(){
    function draw(){
            let drawnCard = document.createElement('img');
    drawnCard.src = deckOfCards[topCard].src;
    for (let i=0; i<deckOfCards[topCard].classes.length; i++){
        drawnCard.classList.add(deckOfCards[topCard].classes[i]);
    }
    hand.append(drawnCard);
    topCard+=1;
    console.log(hand);
    };
    setTimeout(() => {
        draw();
        setTimeout(() => {
            draw();
            setTimeout(() => {
                draw();
                setTimeout(() => {
                    draw();
                    setTimeout(() => {
                        draw();
                        setTimeout(() => {
                            draw();
                            setTimeout(() => {
                                draw();
                                changePhase();
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
};
function untapStep() {
    creature.forEach((c) => c.classList.remove("tapped"));
    creature.forEach((c) => c.style.transform ="rotate(0deg)");
    manaProducingLand.forEach((c) => c.classList.remove("tapped"));
    manaProducingLand.forEach((c) => c.style.transform ="rotate(0deg)");
};

// ability to produce mana here
const whiteImg = {
    source: "./assets/whiteSymbol.png",
    classes: ["mana", "whiteMana"]
};
const greenIMG = {
    source: "./assets/greenSymbol.png",
    classes: ["mana", "greenMana"]
};
const manaImg = [whiteImg, greenIMG];

function tapForestForMana(e){
    if(!e.target.classList.contains("tapped")){
    e.target.style.transform = "rotate(90deg)";
    e.target.classList.add("tapped");
    let clr = 1;
    captainHindsight.textContent = "Tapping a Forest produces green mana, use that to help cast your green spells.";
    setTimeout(silence, 4000);
    let manaSymbol = document.createElement('img');
    manaSymbol.src = manaImg[clr].source;
    for (let i=0; i<manaImg[clr].classes.length; i++){
        manaSymbol.classList.add(manaImg[0].classes[i]);
    };
    manaPool.append(manaSymbol);
    };
};
function tapPlainsForMana(e){
    if(!e.target.classList.contains("tapped")){
    captainHindsight.textContent = "Tapping a Plains produces white mana, use that to help cast your white spells.";
    setTimeout(silence, 4000);
    e.target.style.transform = "rotate(90deg)";
    e.target.classList.add("tapped");
    let clr = 0;
    let manaSymbol = document.createElement('img');
    manaSymbol.src = manaImg[clr].source;
    for (let i=0; i<manaImg[clr].classes.length; i++){
        manaSymbol.classList.add(manaImg[0].classes[i]);
    };
    manaPool.append(manaSymbol);
    };
};
function tapToAttack(e) {
    if(!e.target.classList.contains("tapped")){
    e.target.style.transform = "rotate(90deg)";
    setTimeout(silence, 4000);
    e.target.classList.add("tapped");
    };
    let power = parseInt(e.target.classList[3]);
    totalDamage += power;
    console.log(totalDamage);
    e.target.removeEventListener('click', tapToAttack);
};
function silence(){
    captainHindsight.textContent = "";
};
function playSpellFromHand(){};
function playLandFromHand(){};

function changePhase(){
    untapDiv.classList.add("currentPhase");
            untapStep();
            captainHindsight.textContent = "At the start of your turn, each of your permanent cards will untap during this phase.";
            setTimeout(() => {
                untapDiv.classList.remove("currentPhase");
                upkeepDiv.classList.add("currentPhase");
                captainHindsight.textContent = "During your Upkeep, make sure you're all untapped.";
                    setTimeout(() => {
                        upkeepDiv.classList.remove('currentPhase');
                        drawDiv.classList.add("currentPhase");
                        captainHindsight.textContent = "During your draw step, click your Library to draw a card. This will officially start your turn.";
                        library.addEventListener('click', drawACard)
                    }, 5000);
                }, 5000);
        
};
function drawACard(){
    let drawnCard = document.createElement('img')
    drawnCard.src = deckOfCards[topCard].src;
    for (let i=0; i<deckOfCards[topCard].classes.length; i++){
        drawnCard.classList.add(deckOfCards[topCard].classes[i]);
    }
    hand.append(drawnCard);
    topCard+=1;
    if(topCard > 19){
        defeat();
    };
    library.removeEventListener('click', drawACard);
    drawDiv.classList.remove("currentPhase");
    preCombatDiv.classList.add("currentPhase");
    captainHindsight.textContent = "Once you've drawn your card, now is your chance to use the cards in your hand.";
    forest.forEach(m => m.addEventListener('click', tapForestForMana));
    plains.forEach(m => m.addEventListener('click', tapPlainsForMana));
    combatDiv.addEventListener('click', dealDamage);

    setTimeout(() => {
        captainHindsight.textContent = "You may only play 1 land per turn. Use your mana to cast your creature spells.";
        setTimeout(() => {
            captainHindsight.textContent = "When you're ready to attack your opponent, just click the Combat Step.";
        }, 7000);
    }, 7000 );
};
function dealDamage(){
    preCombatDiv.classList.remove("currentPhase");
    combatDiv.classList.add("currentPhase");
    forest.forEach(m => m.removeEventListener('click', tapForestForMana));
    plains.forEach(m => m.removeEventListener('click', tapPlainsForMana));
    creature.forEach(c => c.addEventListener('click', tapToAttack));
    captainHindsight.textContent = "Now, to COMBAT! tap all the creatures you want to attack with. Then move to the Damage step.";
    damageDiv.addEventListener('click', calculateLife);
};
function calculateLife(){
    combatDiv.classList.remove("currentPhase");
    damageDiv.classList.add("currentPhase");
    lifeTotal = lifeTotal - totalDamage;
    lifeDiv.textContent = "";
    lifeDiv.append(lifeTotal);
    if(lifeTotal < 1){
        victory();
    };
    damageDiv.removeEventListener('click', calculateLife);
    captainHindsight.textContent = `You just hit your opponent for ${totalDamage} damage!`;
    setTimeout(secondMain, 5000);
};
function secondMain(){
    damageDiv.classList.remove("currentPhase");
    postCombatDiv.classList.add("currentPhase");
    captainHindsight.textContent = "Normally this would be a chance to play more cards, but we're done for this turn.";
    setTimeout(endTurn, 5000);
};
function endTurn(){
    postCombatDiv.classList.remove("currentPhase");
    endDiv.classList.add("currentPhase");
    captainHindsight.textContent = "End the turn.";
    setTimeout(() => {
        endDiv.classList.remove("currentPhase");
        changePhase();
    }, 5000);
};
function victory(){
    if(confirm("Congratulations! You defeated your opponent! Would you like to start over?")) {
        restart();
    } else {
        alert("Thank you for playing!");
    };
};
function defeat(){
    if(confirm("Congratulations! You managed to lose in my tutorial... When you draw from a deck without any cards in it, you lose. This deck only had about 20 cards. I didn't think you would lose. Did you want to try again?")) {
        restart();
    } else {
        alert("Thank you for giving it a shot at least!");
    };
};
function whatIs() {
    captainHindsight.textContent = "That is your opponent's life total. Bring that number down to zero by attacking with your creatures to win the game!";
    setTimeout(silence, 5000);  
};
function restart(){
    location = location;
};
// make a deck of "cards"

let c1 = {
    src: "./assets/romeo.png",
    classes: ["card", "creature", "romeo", 1]
};
let c2 = {
    src: "./assets/twoTwo.png",
    classes: ["card", "creature", "tutu", 2]
};
let c3 = {
    src: "./assets/catCat.png",
    classes: ["card", "creature", "catCat", 1]
};
let c4 = {
    src: "./assets/nerdAlert.png",
    classes: ["card", "creature", "nerdAlert", 2]
};
let l1 = {
    src: "./assets/plains.png",
    classes: ["card", "land", "plains"]
};
let l2 = {
    src: "./assets/forest.png",
    classes: ["card", "land", "forest"]
};
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

main();