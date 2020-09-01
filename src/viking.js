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
        this.health = this.health - damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        return (this.health > 0) ?
            `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat";
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

    getFighterAttack(fighter1, fighter2) {
        const randomFighter = fighter1[Math.floor(Math.random() * fighter1.length)].strength;
        const randomRcv = fighter2[Math.floor(Math.random() * fighter2.length)];
        const damage = randomRcv.receiveDamage(randomFighter);
        if (randomRcv.health <= 0) fighter2.splice(randomRcv, 1); 

        return damage;
    }

  vikingAttack() {

        return this.getFighterAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
       return this.getFighterAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}