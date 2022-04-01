// Soldier
class Soldier {
  constructor(health , strength) {
  this.health = health;
  this.strength = strength;
  }
  attack(){
  return this.strength;
  }
  receiveDamage(thedamage){
  this.thedamage = thedamage;
  this.health--;
  }
}

// Viking
class Viking extends Soldier {
 constructor(name, health, strength){
  super(health, strength);
  this.name = name;
 }
 receiveDamage(thedamage) {
  this.damage = thedamage;
  if(this.health > 0) {
  return ` ${this.name} has received ${thedamage} points of damage `;
 } else {
  return `${this.name} has died in the combat`;
}
 }
 battleCry(){
   return `Odin Owns You All`;
 }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
 
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
