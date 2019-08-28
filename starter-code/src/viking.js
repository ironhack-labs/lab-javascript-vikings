// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    };
    receiveDamage(thedamage) {
        this.health = this.health - thedamage;
        return
    };
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(thedamage) {
        if (this.health < 0) {
            return "I am dead"
        }
        this.health = this.health - thedamage;
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`
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

    receiveDamage(thedamage) {
        if (this.health < 0) {
            return "I am dead"
        }
        this.health = this.health - thedamage;
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {

        this.saxonArmy.push(saxon);
    }
    receiveDamage(thedamage) {
        if (this.health < 0) {
            return "I am dead"
        }
        this.health = this.health - thedamage;
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let currentSaxon = this.saxonArmy[randomSaxon];
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let currentViking = this.vikingArmy[randomViking];

        let action = currentSaxon.receiveDamage(currentViking.strength);

        if (action.includes("died")) {
            this.saxonArmy.splice(currentSaxon)
        }
        return action;
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let currentSaxon = this.saxonArmy[randomSaxon];
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let currentViking = this.vikingArmy[randomViking];

        let action = currentViking.receiveDamage(currentSaxon.strength);

        if (action.includes("died")) {
            this.vikingArmy.splice(currentSaxon)
        }
        return action;
    }
    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}
