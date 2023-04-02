// Soldier
class Soldier { 
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage (theDamage) {
        this.health -= theDamage; 
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name; 
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;

        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else if (this.health < 1) {
            return `${this.name} has died in act of combat`
        };
    }

    battleCry() {
        return "Odin Owns You All!"
    }     
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;

        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else if (this.health < 1) {
            return "A Saxon has died in combat"
        };
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(aVikingObject) {
        this.vikingArmy.push (aVikingObject);
    }

    addSaxon(aSaxonObject) {
        this.saxonArmy.push (aSaxonObject);
    }

    vikingAttack() {
        Saxon.receiveDamage == Viking.strength;
    }
}
