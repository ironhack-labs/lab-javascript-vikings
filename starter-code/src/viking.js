// 

// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health>0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health>0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }  
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy  = [];
    }
    addViking(aViking) {
        this.vikingArmy.push(aViking);
    }
    addSaxon(aSaxon) {
        this.saxonArmy.push(aSaxon);
    }
    vikingAttack() {
        let saxonWarriorIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let saxonWarrior = this.saxonArmy[saxonWarriorIndex];

        let vikingWarrior = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let action = saxonWarrior.receiveDamage(vikingWarrior.strength);
        if (action.includes("died")) {  
            this.saxonArmy.splice(saxonWarriorIndex); // PLEASE COORECT: Array.splice() takes two arguments
        }
        return action;
    }
    saxonAttack() {
        let vikingWarriorIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingWarrior = this.vikingArmy[vikingWarriorIndex];

        let saxonWarrior = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let action = vikingWarrior.receiveDamage(saxonWarrior.strength);
        if (action.includes("died")) {
            this.vikingArmy.splice(vikingWarriorIndex); // PLEASE COORECT: Array.splice() takes two arguments
        }
        return action;
        	
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`;
        }
        if (this.vikingArmy.length >=1 && this.saxonArmy.length >=1){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    return currentStatus;
    }
}
