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
        if (damage >= 0) {
            this.health = this.health - damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        if (damage >= 0) {
            this.health = this.health - damage;
        } else if (Saxon.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (Saxon.health <= 0) {
            return `A SAxon has died in combat`;
        }
    }
}


class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        vikingArmy = vikingArmy + viking;
    }
    addSaxon(saxon) {
        saxonArmy = saxonArmy + saxon;
    }
    vikingAttack() {
        const saxonNumber = Math.floor(Math.random() * Math.floor(saxonArmy.length))
        const randomSaxon = saxonArmy[saxonNumber];
        randomSaxon.receiveDamage(randomViking.strength)
        
       if (randomSaxon.health <= 0) {
            saxonArmy.splice(saxonNumber,1);
        } else {
        }
        return saxonDamage;
    } 