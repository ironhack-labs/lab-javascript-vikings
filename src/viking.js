// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health = (this.health - damage);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name;  
    }
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length >> 0)];
        let vikingAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length >> 0)];

        let receivedVikingDamage = attackedSaxon.receiveDamage(vikingAttacker.strength);
        this.saxonArmy.forEach((saxon, i) => {
            if (saxon.health <= 0) {
                this.saxonArmy.splice(saxon[i]);
            }
        })
        return receivedVikingDamage;
    }
    saxonAttack() {
        let attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length >> 0)];
        let saxonAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length >> 0)];

        let receivedSaxonDamage = attackedViking.receiveDamage(saxonAttacker.strength);
        this.vikingArmy.forEach((viking, i) => {
            if (viking.health <= 0) {
                this.vikingArmy.splice(viking[i]);
            }
        })
        return receivedSaxonDamage;
    }
    showStatus() {
        if (this.saxonArmy == 0) {
            return  `Vikings have won the war of the century!`;
        } else if (this.vikingArmy == 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        } 
    }
}



