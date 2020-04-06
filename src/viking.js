// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;                 // "this.health" means the health for every Soldier separately! 1 and 1 and 1 and 1
        this.strength = strength;             // and the "= health" is the property from the constructor that we set on their health
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
    constructor(name, health, strength) {
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    };
   
//     should make Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    
    vikingAttack() {
        function getRandomWarrior(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randomSaxonIndex = getRandomWarrior(this.saxonArmy.length);           // On a l'index
        let randomVikingIndex = getRandomWarrior(this.vikingArmy.length);
        let viking = this.vikingArmy[randomVikingIndex]                           // On l'applique à l'array
        let saxon = this.saxonArmy[randomSaxonIndex]

        if (viking.attack() >= saxon.health) {
            this.saxonArmy.splice(randomSaxonIndex,1);                            // On enlève l'index de l'armée avec splice (enlève un endroit précis de l'array)
        }
        return saxon.receiveDamage(viking.attack());
    };

        // OR SIMPLY :
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        // let message = randomSaxon.receiveDamage(randomViking.attack());      // Because it returns a message in any case
    //     if (randomViking.Viking.attack() > randomSaxon.health) {
    //         this.saxonArmy.pop(randomSaxon);
    //     }
    //     return message;
    // };

    saxonAttack() {
        // Same as above, should then validate the panultimate point of showStatus()
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
}
