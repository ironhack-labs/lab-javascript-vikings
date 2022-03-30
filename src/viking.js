// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength

  }

  receiveDamage(damage) {
    this.health -= damage ;
  } 

}



// Viking 
class Viking extends Soldier {
  constructor (name, health, strength) {
  super(name, health, strength)
  this.name = name;
  this.health = health
  this.strength = strength
  }
  
  receiveDamage(damage) {
    this.health -= damage; 
    if(this.health >= 0) {
      return `${this.name}has received ${this.damage} points of damage`;
    } else {
      return `${this.name}has died in act of combat`;
    }
  } 

  battleCry() {
    return "Odin Owns You All!"
  }

}

//Saxon
  class Saxon extends Soldier {



 receiveDamage (damage) {
  this.health -= damage;
  if(this.health >= 0) {
    return `${this.name}has received ${this.damage} points of damage`;
  } else {
    return `${this.name}has died in act of combat`;
  } 
 }

}
// War
class War {
  addViking(
    let newVikings = new Viking()
    let newVikings = new Viking()
    let newVikings = new Viking()
    let newVikings = new Viking()
    let newVikings = new Viking()
  );
  addSaxon(
    let newSaxon = new Saxon()
    let newSaxon = new Saxon()
    let newSaxon = new Saxon()
    let newSaxon = new Saxon()
    let newSaxon = new Saxon()
  );
  
  vikingAttack();
  saxonAttack();
  showStatus();
  vikingArmy = []
  saxonArmy = []
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
