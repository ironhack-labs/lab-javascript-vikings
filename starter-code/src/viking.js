// Soldier
class Soldier {
    constructor (health, strength) {
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
    attack() {
        return this.strength
    }
    
    receiveDamage(damage) {
        this.health = this.health - damage
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
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage
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
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let saxonInd = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingInd = Math.floor(Math.random() * this.vikingArmy.length)

        let Saxon = this.saxonArmy[saxonInd]
        let Viking = this.vikingArmy[vikingInd]
        
        if (Saxon.health < 0) {
            this.saxonArmy.splice(saxonInd, 1);
        }
        let saxonReceivedDamage = Saxon.receiveDamage(Viking.strength);

        if (Saxon.health <= 0) {
            this.saxonArmy.splice(saxonInd, 1);

        }

        return saxonReceivedDamage
    }

    saxonAttack() {
        let saxonInd = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingInd = Math.floor(Math.random() * this.vikingArmy.length)

        let Saxon = this.saxonArmy[saxonInd]
        let Viking = this.vikingArmy[vikingInd]
        
        if (Viking.health < 0) {
            this.vikingArmy.splice(vikingInd, 1);
        }
        let vikingReceivedDamage = Viking.receiveDamage(Saxon.strength);

        if (Viking.health <= 0) {
            this.vikingArmy.splice(vikingInd, 1);

        }

        return vikingReceivedDamage
    }

    showStatus() {
        if (this.saxonArmy <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy <= 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    }