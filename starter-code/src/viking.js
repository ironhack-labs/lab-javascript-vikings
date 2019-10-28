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
        super(health, strength) //recieve health and strength from parent class
        this.name = name
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        this.health >= 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    // receiveDamage(damage) {
    //     this.health -= damage
    //     if (this.health <= 0) {
    //         return `${this.name} has died in act of combat`
    //     } else {
    //         return `${this.name} has received ${damage} points of damage`
    //     }
    // }
    battleCry() {
        return 'Odin Owns You All!'
    }
}​
// Saxon
class Saxon extends Soldier {
    // receiveDamage = () => {
    //     this.health -= damage
    //     return {
    //         this.health < 0 ?
    //         `A Saxon has died in combat` :
    //         `A Saxon has received ${damage} points of damage`
    //     }
    // }

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
    }
    ​
    vikingAttack() {
        let saxIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let rondomViking = this.vikingArmy[vikIndex]
        let rondomSaxon = this.saxonArmy[saxIndex]
        ​
        if (rondomSaxon.health - rondomViking.strength <= 0) {
            this.saxonArmy.splice(saxIndex, 1)
            // this.saxonArmy.splice(this.saxonArmy.indexOf(rondomSaxon), 1)
        }
        return rondomSaxon.receiveDamage(rondomViking.strength)
    }

    saxonAttack() {
        let saxIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let rondomViking = this.vikingArmy[vikIndex];
        let randomSaxon = this.saxonArmy[saxIndex];

        if (rondomViking.health - randomSaxon.strength <= 0) {
            this.vikingArmy.splice(vikIndex, 1);
            // this.vikingArmy.splice(this.vikingArmy.indexOf(rondomViking), 1);
        }
        return rondomViking.receiveDamage(randomSaxon.strength);
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