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
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
        
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
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
        const saxonPreviousHealth = randomSaxon.health;
        randomSaxon.health = saxonPreviousHealth - randomViking.strength;
        const saxonIndex = this.saxonArmy.indexOf(randomSaxon)
        if (randomSaxon.health < 0) {
            if (saxonIndex > -1) {
                this.saxonArmy.splice(saxonIndex, 1)
                return `A Saxon has died in combat`
            }
            return `A Saxon has received ${randomViking.strength} points of damage`
        }
    }    
    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const vikingPreviousHealth = randomViking.health;
        randomViking.health = vikingPreviousHealth - randomSaxon.strength;
        const vikingIndex = this.vikingArmy.indexOf(randomViking)
        if (randomViking.health < 0) {
            if (vikingIndex > -1) {
                this.vikingArmy.splice(vikingIndex,1)
            }
            return `${randomViking.name} has died in act of combat`;
        }
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
    showStatus() {
        
    }

}
