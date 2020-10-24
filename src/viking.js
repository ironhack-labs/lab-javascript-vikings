// Soldier
class Soldier {
    constructor (_health, _strength) {
        this.health = _health
        this.strength = _strength   
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
    constructor (_name, _health, _strength) {
        super()
        this.name = _name
        this.health = _health
        this.strength = _strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}



// Saxon
class Saxon extends Soldier {
    constructor (_health, _strength) {
        super()
        this.health = _health
        this.strength = _strength
    }
    attack() {return this.strength}
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
        new Viking(viking, 100, 50)
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        new Saxon('saxon', 80, 40)
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }
        return randomSaxon.receiveDamage(randomViking.strength);
    }
    
    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        randomViking.receiveDamage(randomSaxon.strength);
        if(randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
        }
        return randomViking.receiveDamage(randomSaxon.strength);
    }

    showStatus() {
        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        };
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        };
        
        return "Vikings and Saxons are still in the thick of battle"
    }
}


