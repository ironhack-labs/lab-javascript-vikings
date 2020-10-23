

// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    }

    battleCry() {
        return `Odin Owns You All!`
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
        return `${this.name} has died in act of combat`
        }
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
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        let vikingArmy = this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        let saxonArmy = this.saxonArmy.push(Saxon);
    }

    vikingAttack() {

    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let attack = randomSaxon.receiveDamage(randomViking.strength);

        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

        return attack
    }

    saxonAttack() {

        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        let attack = randomViking.receiveDamage(randomSaxon.strength);

        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

        return attack
        }
    
    showStatus() {
        if (this.saxonArmy == 0) {
            return `Vikings have won the war of the century!`
        }
        if (this.vikingArmy == 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        if (this.vikingArmy !== 0 && this.saxonArmy !== 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        } 
    }
}
