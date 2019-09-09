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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    attack() {
        return this.strength
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
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -=damage
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return "A Saxon has died in combat"
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
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() { 
        const indSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       const randSaxon = this.saxonArmy[indSaxon];
       const randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
       const resultAtttack = randSaxon.receiveDamage(randViking.strength);
       if (randSaxon.health <= 0) {
            this.saxonArmy.splice(indSaxon, 1);
        }
        return resultAtttack;         
    }

    saxonAttack() {
        const indViking = Math.floor(Math.random() * this.vikingArmy.length);
       const randomViking = this.vikingArmy[indViking];
       const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
       const resultAtttackSaxon = randomViking.receiveDamage(randomSaxon.strength);
       if (randomViking.health <= 0) {
            this.vikingArmy.splice(indViking, 1);
        }
        return resultAtttackSaxon;         
    }

    showStatus() {
        if (this.saxonArmy.length == []) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == []) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
 
}