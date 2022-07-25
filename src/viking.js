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

    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
