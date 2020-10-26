// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {

            return `A Saxon has received ${theDamage} points of damage`;
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

    // choosingViking(vikingSoldiers) {
    //     let choosingViking = Math.floor(Math.random() * vikingSoldiers.length);
    //     let randomViking = vikingSoldiers[choosingViking];
    //     return randomViking;
    // }

    choosingVikingOrSaxon(soldier) {
        let choosingSoldier = Math.floor(Math.random() * soldier.length);
        let randomSolider = soldier[choosingSoldier];
        return randomSolider;
    }

    vikingAttack() {
        let randomViking = this.choosingVikingOrSaxon(this.vikingArmy);
        let randomSaxon = this.choosingVikingOrSaxon(this.saxonArmy);


        randomSaxon.receiveDamage(randomViking.strength);
        let newSaxonArmy = this.saxonArmy.filter(function (saxon) {
            return saxon.health >= 0;
        })
        this.saxonArmy = newSaxonArmy;
        return 'A Saxon has died in combat';
    }

    saxonAttack() {
        let randomViking = this.choosingVikingOrSaxon(this.vikingArmy);
        let randomSaxon = this.choosingVikingOrSaxon(this.saxonArmy);

        randomViking.receiveDamage(randomSaxon.strength);
        let newVikingArmy = this.vikingArmy.filter(function (viking) {
            return viking.health > 0;
        });
        this.vikingArmy = newVikingArmy;
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}





