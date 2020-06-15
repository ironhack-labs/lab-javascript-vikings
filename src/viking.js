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
        if (this.health > damage) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        //console.log(damage)
        //console.log(this.health);
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return 'A Saxon has died in combat';
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
        let deadS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let res = deadS.receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        let index = this.saxonArmy.indexOf(deadS);
        this.saxonArmy.splice(index, 1);
        return res;

    }
    saxonAttack() {

        let deadS = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let res = deadS.receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        let index = this.vikingArmy.indexOf(deadS);
        if (deadS.health <= 0) this.vikingArmy.splice(index, 1);
        return res;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        else if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'
        else return "Vikings and Saxons are still in the thick of battle."
    }
}