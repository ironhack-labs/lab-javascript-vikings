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
        super(health, strength)
        this.name = name
    }
    attack() {
        return this.strength;
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
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomSaxony = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        let randomViking = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        let result = this.saxonArmy[randomSaxony].receiveDamage(this.vikingArmy[randomViking].strength)
        if (this.saxonArmy[randomSaxony].health <= 0) {
            this.saxonArmy.splice(randomSaxony, 1)
        }
        return result 
    }
    saxonAttack() {
        let randomSaxony = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        let randomViking = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxony].strength)
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking,1)
        }
        return result
    }
}