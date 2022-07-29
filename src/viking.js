// Soldier
class Soldier {
    constructor(theHealthArg, theStrengthArg){
        this.health = theHealthArg;
        this.strength = theStrengthArg;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(theDamageArg) {
        this.health -= theDamageArg;
    }

}


// Viking
class Viking extends Soldier {
    constructor(theNameArg, theHealthArg, theStrengthArg) {
        super(theHealthArg, theStrengthArg);
        this.name = theNameArg;
    }
    
    receiveDamage(theDamageArg) {
        super.receiveDamage(theDamageArg);
        if (this.health > 0) {
            return `${this.name} has received ${theDamageArg} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamageArg) {
        super.receiveDamage(theDamageArg);
        if (this.health > 0) {
            return `A Saxon has received ${theDamageArg} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    removeDeadBodies = (whichArmy) => {
        whichArmy.forEach((eachSoldier, ind)=>{
            if(eachSoldier.health <= 0){
                whichArmy.splice(ind, 1);
            }
        })
    }

    generateRandomSoldier = (whichArmy) => {
        let randomSoldierNumber = Math.floor(Math.random() * whichArmy.length);
        let randomSoldier = whichArmy[randomSoldierNumber];
        return randomSoldier;
    }

    vikingAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomSaxon.receiveDamage(randomViking.attack());
        this.removeDeadBodies(this.saxonArmy);
        return result;
    }

    saxonAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomViking.receiveDamage(randomSaxon.attack());
        this.removeDeadBodies(this.vikingArmy);
        return result;
    }

    showStatus = () => {
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    } 
}

let newWar = new War()

    let viking1 = new Viking('Arne', 100, 250);
    let viking2 = new Viking('Bjorn', 100, 75);
    let viking3 = new Viking('Agatha', 100, 350);
    let viking4 = new Viking('Halfdan',100, 175);
    let viking5 = new Viking('Freya', 100, 55);

    newWar.addViking(viking1);
    newWar.addViking(viking2);
    newWar.addViking(viking3);
    newWar.addViking(viking4);
    newWar.addViking(viking5);

    let saxon1 = new Saxon (75, 50);
    let saxon2 = new Saxon (70, 55);
    let saxon3 = new Saxon (65, 110);
    let saxon4 = new Saxon (70, 75);
    let saxon5 = new Saxon (80, 100);

    newWar.addSaxon(saxon1);
    newWar.addSaxon(saxon2);
    newWar.addSaxon(saxon3);
    newWar.addSaxon(saxon4);
    newWar.addSaxon(saxon5);

    // function showStatusOfWar(){
    //     const status = document.querySelector("status span");
    //     //status.innerText = showStatus();
    // }
    // showStatusOfWar();


    let vikingRow = document.querySelectorAll(".viking");
    
    for(let i = 0; i < 5; i++){
    
       let vikingName = document.querySelectorAll(".name span")[i];
       let vikingHealth = document.querySelectorAll(".health span")[i];
       let vikingStrength = document.querySelectorAll(".strength span")[i];
       
       vikingName.innerText = newWar.vikingArmy[i].name
       vikingHealth.innerText = newWar.vikingArmy[i].health
       vikingStrength.innerText = newWar.vikingArmy[i].strength
    }
    
    let saxonRow = document.querySelectorAll(".saxon");

    for(let i = 0; i < 5; i++){

       let saxonHealth = document.querySelectorAll(".health2 span")[i];
       let saxonStrength = document.querySelectorAll(".strength2 span")[i];
       
       saxonHealth.innerText = newWar.saxonArmy[i].health
       saxonStrength.innerText = newWar.saxonArmy[i].strength
    }