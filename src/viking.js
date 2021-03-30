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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health,strength)
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
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
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        if ((saxon.health - viking.strength) <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
        }
        return saxon.receiveDamage(viking.attack());
    }
    saxonAttack() {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        if ((viking.health - saxon.strength) <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
        }

        return viking.receiveDamage(saxon.attack());
    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
