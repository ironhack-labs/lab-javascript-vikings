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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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

    vikingAttack() {
       let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
       let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
       let randomSaxon = this.saxonArmy[saxonIndex];
       let randomViking = this.vikingArmy[vikingIndex];

       let woundedSoldier = randomSaxon.receiveDamage(randomViking.strength);
       if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
       }
       return woundedSoldier;
    }

    saxonAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxonIndex];
        let randomViking = this.vikingArmy[vikingIndex];
 
        let woundedSoldier = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
             this.vikingArmy.splice(vikingIndex, 1);
        }
        return woundedSoldier;
     }

//-------------------------------------------------------------------------------------
    
    // Refactoring attempt: merging the two attack functions together

    //  attack(attacker) {
    //     let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //     let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    //     let randomSaxon = this.saxonArmy[saxonIndex];
    //     let randomViking = this.vikingArmy[vikingIndex];

    //     if (attacker in this.vikingArmy) {
    //         let woundedSoldier = randomSaxon.receiveDamage(randomViking.strength);
    //         if (randomSaxon.health <= 0) {
    //             this.saxonArmy.splice(saxonIndex, 1);
    //         }
    //     } else {
    //         let woundedSoldier = randomViking.receiveDamage(randomSaxon.strength);
    //         if (randomViking.health <= 0) {
    //             this.vikingArmy.splice(vikingIndex, 1);
    //         }
    //     }
    //     return woundedSoldier;
    //  }

//-------------------------------------------------------------------------------------

     showStatus() {
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else {
            if (this.vikingArmy.length <= 0) {
                return "Saxons have fought for their lives and survived another day...";
            } else if (this.saxonArmy.length <= 0) {
                return "Vikings have won the war of the century!";
            } 
        } 
     }
}

//-------------------------------------------------------------------------------------

    // Console.log tests

    // let saxon1 = new Saxon(200, 500);
    // let saxon2 = new Saxon(50, 500);
    // let saxon3 = new Saxon(75, 500);

    // let viking1 = new Viking("Tor", 100, 1000);
    // let viking2 = new Viking("Odin", 250, 1000);
    // let viking3 = new Viking("Magnus", 70, 1000);

    // let war = new War();
    // war.addViking(viking1);
    // war.addViking(viking2);
    // war.addViking(viking3);
    // war.addSaxon(saxon1);
    // war.addSaxon(saxon2);
    // war.addSaxon(saxon3);
    // war.saxonAttack();
    // console.log(war.saxonArmy, war.vikingArmy);