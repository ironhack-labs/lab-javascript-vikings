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
        this.health -= damage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return this.name + ' has received ' + damage + ' points of damage'
        } else return this.name + ' has died in act of combat'

    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage'
        } else return 'A Saxon has died in combat'
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const poorSaxon = this.saxonArmy[saxonIndex];
        const badViking = this.vikingArmy[vikingIndex];

        const damage = poorSaxon.receiveDamage(badViking.attack())

        if (poorSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1)
        }
        return damage
    }
    saxonAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const badSaxon = this.saxonArmy[saxonIndex];
        const poorViking = this.vikingArmy[vikingIndex];

        const damage = poorViking.receiveDamage(badSaxon.attack())

        if (poorViking.health <= 0) {
            this.vikingArmy.splice(saxonIndex, 1)
        }
        return damage
    }
    showStatus() {
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }
        if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}