// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
      return this.strength;
    },
    this.receiveDamage = function(damage) {
      this.health = this.health - damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if(this.health <= 0) {
        return `${this.name} has died in act of combat`
      } else {
        return `${this.name} has received ${damage} points of damage`
      }
    }
    this.battleCry = function() {
      return `Odin Owns You All!`;
    }
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
    this.attack = function() {
      return this.strength;
    }
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if(this.health <= 0) {
        return `A Saxon has died in combat`
      } else {
        return `A Saxon has received ${damage} points of damage`
      }
      
    }
  }
}

const viking1 = new Viking("Leo", 1000, 100);
const viking2 = new Viking("Pame", 1000, 100);
const viking3 = new Viking("Edu", 1000, 100);
const saxon1 = new Saxon("Leo", 1000, 100);
const saxon2 = new Saxon("Pame", 1000, 100);
const saxon3 = new Saxon("Edu", 1000, 100);

// War
class War {
  vikingArmy = []
  saxonArmy = []
  constructor() {
    this.addViking = function(warrior) {
      this.vikingArmy.push(warrior)
      console.log(this.vikingArmy);
    }
    this.addSaxon = function(warrior) {
      this.saxonArmy.push(warrior)
    }
    this.vikingAttack = function() {}
    this.saxonAttack = function() {}
    this.showStatus = function() {}
  }
  
  
}

const guerra = new War()
guerra.addViking(viking1)
guerra.addViking(viking2)
guerra.addViking(viking3)
guerra.addSaxon(viking1)
guerra.addSaxon(viking2)
guerra.addSaxon(viking3)









// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
