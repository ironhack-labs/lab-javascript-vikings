// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength; 
    };

    receiveDamage(damage) {
        this.damage = damage;
        this.health - this.damage;
    };
};

// Viking

class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    };

    attack() {
        return this.strength; 
    };

    receiveDamage(damage) {
        this.damage = damage;
        this.health - this.damage;

        if (this.damage < this.health) {
        return `${this.name} has recived ${this.damage} points of damage`;
        } else { 
            return `${this.name} has died in act of combat`;
        };
    };

    battleCry () {
        return "Odin Owns you All!";
    };
};

// Saxon

class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
    };

    attack() {
        return this.strength; 
    };

    receiveDamage(damage) {
        this.damage = damage;
        this.health - this.damage;

        if (this.damage < this.health) {
            return `A Saxon has recived ${this.damage} points of damage`;
        } else { 
            return 'A Saxon has died in combat';
        };
    };
};

// War

class War {
    constructor () {
   // vikingArmy [];
    //saxonArmy [];
    };

    addViking (object) {
        this.object = object;
        this.object + vikingArmy;
    };

    addSaxon (object) {
        this.object = object;
        this.object + saxonArmy;
    };

    vikingAttack () {
        this.Saxon.receiveDamage == this.Viking.strength;
        if (this.Saxon.health < this.Saxon.health) {
            saxonArmy - this.Saxon;
        };
    };

    saxonAttack () {

    };
};
