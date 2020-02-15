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
        super (health, strength)
            this.name = name;
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

    receiveDamage(damage) {
        this.health -= damage;
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
        this.saxonArmy = []
        this.vikingArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    };
    
    vikingAttack() { 
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        randomSaxon.receiveDamage(randomViking.strength);
        
        if (randomSaxon.health <= 0 ) {
            this.saxonArmy.splice(randomSaxon, 1)
        }
    };

    saxonAttack() {  

        let randomSaxon2 = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking2 = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        randomViking2.receiveDamage(randomSaxon2.strength);

        if (randomViking2.health <= 0 ) {
            this.vikingArmy.splice(randomViking2, 1)
        }
    };
}

