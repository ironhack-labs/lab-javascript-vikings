// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}​
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}​
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}​
// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }​
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }​
    vikingAttack() {
        let rondomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]​
        if (attackedSaxon.health - rondomViking.strength <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1)
        }
        return attackedSaxon.receiveDamage(rondomViking.strength)
    }
    saxonAttack() {
        let attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        if (attackedViking.health - randomSaxon.strength <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
        }
        return attackedViking.receiveDamage(randomSaxon.strength);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}