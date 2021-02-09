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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
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
            }
            return `A Saxon has died in combat`
    }   
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        // select randomly a saxon
        let randomIndex = Math.floor(Math.random(this.saxonArmy.length))
        let result = this.saxonArmy[randomIndex].receiveDamage(this.vikingArmy[randomIndex].strength)
        if (this.saxonArmy[randomIndex].health <= 0 ) {
            this.saxonArmy.splice(randomIndex, 1);
        }
        return result;
    }
    saxonAttack() {
        let randomIndex = Math.floor(Math.random(this.vikingArmy.length))
        let result = this.vikingArmy[randomIndex].receiveDamage(this.saxonArmy[randomIndex].strength)
        if (this.vikingArmy[randomIndex].health <= 0 ) {
            this.vikingArmy.splice(randomIndex, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
    
// ONE GENERIC METHOD

// attack(attacker, defender) {
//     let randomIndex = Math.floor(Math.random(this[defender + "Army"].length));
//     let result = this[defender + "Army"][randomIndex].receiveDamage(this[attacker + "Army"][randomIndex].strength)
//     if (this[[defender + "Army"][randomIndex].health <= 0 ) {
//         this[defender + "Army"].splice(randomIndex, 1);
//     }
//     return result;
// }