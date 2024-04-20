// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`
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
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const elvikingo = Math.floor(Math.random() * this.vikingArmy.length);
        const elsaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[elvikingo];
        const randomSaxon = this.saxonArmy[elsaxon];
        const damage = randomViking.strength;
        const result = randomSaxon.receiveDamage(damage);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(elsaxon, 1);
        }
        return result;
    }
    
    saxonAttack() {
        const elvikingo = Math.floor(Math.random() * this.vikingArmy.length);
        const elsaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[elvikingo];
        const randomSaxon = this.saxonArmy[elsaxon];
        const damage = randomSaxon.strength;
        const result = randomViking.receiveDamage(damage);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(elvikingo, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
