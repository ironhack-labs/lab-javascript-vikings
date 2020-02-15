// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        //andere schreibweise: this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addViking(viking) {
        this.vikingArmy.push(viking)
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }


    vikingAttack() {

        let saxonRandom = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        let vikingRandom = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        let resultOfBattle = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
        if (this.saxonArmy[saxonRandom].health <= 0) {
            this.saxonArmy.splice(saxonRandom, 1);
        }
        return resultOfBattle;
    }

    saxonAttack() {
        let vikingRandom = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        let saxonRandom = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        let resultOfBattle = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
        if (this.vikingArmy[vikingRandom].health <= 0) {
            this.vikingArmy.splice(vikingRandom, 1);
        }
        return resultOfBattle;
    }

    showStatus() {

        let saxonLeft = this.saxonArmy.length
        let vikingLeft = this.vikingArmy.length

        if (saxonLeft <= 0) {
            return `Vikings have won the war of the century!`;
        } 
         if (vikingLeft <= 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }

}



/*
// War HENDRIK solution
class War {

    constructor () {

        //static
        vikingArmy = []
        saxonArmy = []
    }

    // setter method

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        //grab a random viking, immer der erste viking den ersten saxon
        let viking = this.vikingArmy[0]
        let saxon = this.saxonArmy[0]
        saxon.receiveDamage(viking.strength)
        //or saxon.receiveDamage(viking.attack())

        //remove saxon from array, if he die
        if (saxon.health <= 0) {
            this.saxonArmy.splice(0,1)
        }
    }

}

//let battlefield = new War()
//battlefield.addViking(new Viking('Ragna', 500, 20))

//wenn die Armee nicht leer starten soll:
class War {

    constructor (saxArray, vikArray) {

        //static
        vikingArmy = saxArray
        saxonArmy = vikArray
    }


}

*/
// let battlefield = new War(saxArray[],)