// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
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

    constructor (health, strength, name) {

    super (health, strength);
    this.name = name;

    this.receiveDamage  = function receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }

        else {
            return `A Saxon has died in combat`;
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
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let result = randomSaxon.receiveDamage(randomViking.strength);
        return result;
    }

    saxonAttack () {

        
    }

    showStatus () {

        
    }


    }
    