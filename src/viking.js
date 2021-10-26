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
    this.health = this.health - damage

  }
}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength) {
   super(health, strength);
   this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
  return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength; 
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
   constructor () {
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

    const vike = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

     const result = sax.receiveDamage(vike.strength);
     if(sax.health <=0) { this.saxonArmy.splice(sax)}
     return result;
   }

   saxonAttack() {

     const vike = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
     const sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

     const result = vike.receiveDamage(sax.strength);
     if(vike.health <=0) {this.vikingArmy.splice(vike)}
     return result;
   }

}

function showStatus () {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
