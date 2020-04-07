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
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : 'A Saxon has died in combat';
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
        let attackedSaxon = this.saxonArmy[[Math.floor(Math.random() * this.saxonArmy.length)]]
        let attackingViking = this.vikingArmy[[Math.floor(Math.random() * this.vikingArmy.length)]]
        let vikingAttackResult = attackedSaxon.receiveDamage(attackingViking.strength);
        if (attackedSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(item => item !== attackedSaxon)
        }
        return vikingAttackResult;
    }
    saxonAttack() {
        let attackedViking = this.vikingArmy[[Math.floor(Math.random() * this.vikingArmy.length)]]
        let attackingSaxon = this.saxonArmy[[Math.floor(Math.random() * this.saxonArmy.length)]]
        let saxonAttackResult = attackedViking.receiveDamage(attackingSaxon.strength);
        if (attackedViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(item => item !== attackedViking)
        }
        return saxonAttackResult;

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
