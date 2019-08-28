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
        }
        else {
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
        this.vikingArmy.push(Viking)
        return;
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
        return;
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomVikingIndex = Math.floor(
            Math.random() * this.vikingArmy.length
        )
        let result = this.saxonArmy[randomSaxonIndex].receiveDamage(
            this.vikingArmy[randomVikingIndex].strength
        )
        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return result;
    };
    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(
            Math.random() * this.vikingArmy.length
        )
        let result = this.vikingArmy[randomVikingIndex].receiveDamage(
            this.saxonArmy[randomSaxonIndex].strength
        )
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else return "Vikings and Saxons are still in the thick of battle."
    }
}
