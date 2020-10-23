// Soldier
class Soldier {
    constructor(soldierHealth, soldierStrength) {
        this.health = soldierHealth
        this.strength = soldierStrength
    }

    attack() { 
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;    
    }
}



// Viking
class Viking extends Soldier {
    constructor(soldierName, soldierHealth, soldierStrength) {
        super(soldierHealth, soldierStrength);
        this.name = soldierName;
    }


    receiveDamage(damage) {
        this.health -= damage;
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

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        const damage = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop(randomSaxon);
        }

        return damage;
    }

    saxonAttack() {

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        const damage = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.pop(randomViking);
        }

        return damage;
    }

    
    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}