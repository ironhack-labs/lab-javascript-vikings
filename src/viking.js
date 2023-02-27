// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function attack () {
        return this.strength;
    }
    this.receiveDamage = function receiveDamage (damage) {
        this.health -= damage;
    }
  }
}

// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {

    super (name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.receiveDamage  = function receiveDamage (damage) {
            this.health -= damage;
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            }

            else {
                return `${this.name} has died in act of combat`
            }
        }
        this.battleCry = function battleCry () {
            return `Odin Owns You All!`;
        }
    }

    
}

// Saxon
class Saxon extends Soldier {

    constructor (name, health, strength) {

    super (name, health, strength);

    this.receiveDamage  = function receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }

        else {
            return `A Saxon has died in combat`
        } 
}
    }
}

// War
class War {
 constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    
    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack () {

        
    }
    }
    