// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack = function() {
        return (this.strength);
    };
    receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`${this.name} has received ${damage} points of damage`);
        else
            return (`${this.name} has died in act of combat`);
    };
    battleCry = function() {
        return ('Odin Owns You All!');
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`A Saxon has received ${damage} points of damage`);
        else
            return (`A Saxon has died in combat`);
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking = function(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon = function(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack = function() {
        let stg = this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)].strength;
        while (stg > 0) {
            let sax = this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)];
            sax.receiveDamage(stg);
            stg -= sax.health;
        }
    }
}
