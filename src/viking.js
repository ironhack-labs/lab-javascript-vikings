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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const solArray = this.creatRandom();
        const result = solArray[1].receiveDamage(solArray[0].strength);
        console.log(result)
        if (solArray[1].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(solArray[1]), 1);
        }
        return result;
    }
   
    saxonAttack() {

        const solArray = this.creatRandom();
        const result = solArray[0].receiveDamage(solArray[1].strength);
        if (solArray[0].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(solArray[0]), 1);
        }
        return result;
    }
    creatRandom() {
        const vikingObj = new Viking();
        const saxonObj = new Saxon();
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[vikingIndex]
        const randomSaxon = this.saxonArmy[saxonIndex]
        // console.log(randomViking,randomSaxon)
        return [randomViking,randomSaxon]
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {

            return "Saxons have fought for their lives and survived another day..."
        }
        else {

            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


