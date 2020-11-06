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

};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        return `${this.name} has died in act of combat`;
    }
};

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        return `A Saxon has died in combat`;
    }
};

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        this.saxonArmy[randomSaxon].health -= this.vikingArmy[randomViking].strength;
        console.log(this.saxonArmy)
        console.log(randomSaxon)
        console.log('saxonarmy', this.saxonArmy)
        console.log(this.saxonArmy.indexOf(randomSaxon))
        if (randomSaxon.health < 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
    }
};
