// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
    }
  receiveDamage(damage){
    this.health -= damage
    }
  }

// Viking
class Viking extends Soldier {
  constructor (name,health, strength) {
    super (name, health, strength) 
    this.name = name
    this.health = health
    this.strength = strength
  }
    receiveDamage(damage){
      this.health -= damage;
      if(this.health>0) {
    return `${this.name} has received ${damage} points of damage`
  }
   return `${this.name} has died in act of combat`
  }

  battleCry() {
    return "Odin Owns You All!"
}
}
  

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health>0) {
  return `A Saxon has received ${damage} points of damage`}
 return `A Saxon has died in combat`
}
  }

// War

  class War {
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.Viking= new Viking();
  this.Saxon= new Saxon();
  }
  addViking(Viking) {
this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {
    if (this.Viking.health <= 0) {
      delete this.vikingArmy[this.Viking]
    }
    return this.Saxon.receiveDamage(this.Viking.strength)}
  
  saxonAttack() {
    if (this.Saxon.health <= 0) {
      delete this.saxonArmy[this.Saxon] }
    return this.Viking.receiveDamage(this.Saxon.strength)
  }
  showStatus() {
    if (!this.saxonArmy) {
      return `Vikings have won the war of the century!`}
    if (!this.vikingArmy) {
      return `Saxons have fought for their lives and survived another day...`
    }
    return `Vikings and Saxons are still in the thick of battle.`}
  } 
      





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
