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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
    
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
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

    _soldierRandom(soldier) {
        let random = Math.floor(Math.random() * soldier.length)
        return soldier[random]
    }

    _removeDeads(soldier) {
        return soldier.health > 0
    }

    vikingAttack() {
        const attack = this._soldierRandom(this.saxonArmy).receiveDamage(this._soldierRandom(this.vikingArmy).strength)
        this.saxonArmy = this.saxonArmy.filter(this._removeDeads)
        return attack
    }

    saxonAttack() {
        const attack = this._soldierRandom(this.vikingArmy).receiveDamage(this._soldierRandom(this.saxonArmy).strength)
        this.vikingArmy = this.vikingArmy.filter(this._removeDeads)
        return attack
    }

    // Define a  single function for attack and no need saxonAttack and vikingAttack:

    generalAttack(attacker, receivedAttack) {
        const attack = this._soldierRandom(receivedAttack).receiveDamage(this._soldierRandom(attacker).strength)
        this.receivedAttack = this.receivedAttack.filter(this._removeDeads)
        return attack
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.vikingArmy.length && this.saxonArmy.length) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
   
    
}
