// need to make some dummies for what I'll need the game to do
Intro(){}
main(){}
changePhase(){}
tapForMana(){}
tapToAttack(){
    captainHindsight.textContent = "You attempted to attack with my dog"
    
}
dealDamage(){}
playSpellFromHand(){}
playLandFromHand(){}
drawACard(){}
victory(){}
defeat(){}

// layout some variables
const catCat = document.getElementById("catCat")
const romeo = document.getElementById("romeo")
const nerd = document.getElementById("nerdAlert")
const tutu = document.getElementById("tutu")
const plains = document.getElementById("plains")
const forest = document.getElementById("forest")
const whiteMana = document.getElementById("whiteMana")
const greenMana = document.getElementById("greenMana")
const library = document.getElementById("library")

let lifeTotal = 20
let captainHindsight = document.getElementById("moveTaken")

romeo.onclick(tapToAttack)