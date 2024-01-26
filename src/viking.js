// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
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
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon) 
    }

    vikingAttack() {
        //select random saxon and viking
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        // Calculate damage on saxon
        const receivedDamage = randomSaxon.receiveDamage(randomViking.attack());

        // Remove dead Saxons from the army
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(Math.floor(Math.random() * this.saxonArmy.length), 1);
        }

        // Return received damage of the Saxon
        return receivedDamage;
    }
    saxonAttack() {
        
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        
        const receivedDamage = randomViking.receiveDamage(randomSaxon.attack());

        
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(Math.floor(Math.random() * this.vikingArmy.length), 1);
        }

        return receivedDamage;
    }

    //Show Status

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}