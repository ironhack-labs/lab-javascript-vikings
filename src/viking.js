// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
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
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.randomSaxon
        this.randomViking
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    
    pickRandomSoldier (army) {
        let randomIndex = 0;
        randomIndex = Math.floor(Math.random() * army.length);
        return randomIndex;
    }

    genericAttack(attacker) {

        this.randomSaxon = this.pickRandomSoldier(this.saxonArmy)
        this.randomViking = this.pickRandomSoldier(this.vikingArmy)

        const currentSaxon = this.saxonArmy[this.randomSaxon];
        const currentViking = this.vikingArmy[this.randomViking];

        const currentSaxonIndex = this.saxonArmy.indexOf(currentSaxon);
        const currentVikingIndex = this.vikingArmy.indexOf(currentViking);
        
        if (attacker === "viking") {
            currentSaxon.receiveDamage(currentViking.strength);
            if (currentSaxon.health <= 0) {
                this.saxonArmy.splice(currentSaxonIndex, 1);
                return `A Saxon has died in combat`
            }
            return `A Saxon has received ${currentViking.strength} points of damage`
        } else if (attacker === "saxon") {
            currentViking.receiveDamage(currentSaxon.strength);
            if (currentViking.health <= 0) {
                this.vikingArmy.splice(currentVikingIndex, 1);
                return `${currentViking.name} has died in act of combat`
            }
            return `${currentViking.name} has received ${currentSaxon.strength} points of damage`
        }
    }

    vikingAttack () {

        this.randomSaxon = this.pickRandomSoldier(this.saxonArmy)
        this.randomViking = this.pickRandomSoldier(this.vikingArmy)

        const currentSaxon = this.saxonArmy[this.randomSaxon];
        const currentViking = this.vikingArmy[this.randomViking];
        currentSaxon.receiveDamage(currentViking.strength);
        const currentSaxonIndex = this.saxonArmy.indexOf(currentSaxon);
        if (currentSaxon.health <= 0) {
            this.saxonArmy.splice(currentSaxonIndex, 1);
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${currentViking.strength} points of damage`
    }

    saxonAttack () {

        this.randomSaxon = this.pickRandomSoldier(this.saxonArmy)
        this.randomViking = this.pickRandomSoldier(this.vikingArmy)

        const currentSaxon = this.saxonArmy[this.randomSaxon];
        const currentViking = this.vikingArmy[this.randomViking];
        currentViking.receiveDamage(currentSaxon.strength);
        const currentVikingIndex = this.vikingArmy.indexOf(currentViking);
        if (currentViking.health <= 0) {
            this.vikingArmy.splice(currentVikingIndex, 1);
            return `${currentViking.name} has died in act of combat`
        }
        return `${currentViking.name} has received ${currentSaxon.strength} points of damage`
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
