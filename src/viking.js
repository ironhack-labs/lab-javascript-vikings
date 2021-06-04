// Soldier
//---ITERATION 01----
class Soldier {
  constructor(strength, health) {
    this.strength = 150;
    this.health = 300;
  }
  attack() { return this.strength }
  receiveDamage(damage) { this.health = this.health - damage }
}
let soldier1 = new Soldier
  // console.log(soldier1)
  // console.log(soldier1.attack())
  // console.log(soldier1.receiveDamage(100)) 
// Viking
//---ITERATION 02----
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if ( this.health > 0) {
      return `${this.name} has received ${damage} points of damage.`
    }
    return `${this.name} has died in act of combat`
  }
  battleCry() { return `Odin Owns You All!` }
}
let viking1 = new Viking(`Ragnarok`)
  // console.log(viking1)
  // console.log(viking1.attack())
  // console.log(viking1.receiveDamage(100))
  // console.log(viking1.battleCry())
// Saxon
class Saxon extends Soldier {
  constructor() {
    super(60, 25);
    this.health = 60;
    this.strength = 25;
  }
  receiveDamage(damage) {
    this.health -= damage
    if ( this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    return `A Saxon has died in combat`
  }
}
let saxon1 = new Saxon
  // console.log(saxon1)
  // console.log(saxon1.receiveDamage(400))
// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonDamage = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
    if(this.saxonArmy[saxonRandom].health <= 0 ){
      this.saxonArmy.splice(saxonRandom, 1);
    };
    return saxonDamage
  }
  saxonAttack(){
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingDamage = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[vikingRandom].strength);
    if(this.vikingArmy[vikingRandom].health <= 0){
      this.vikingArmy.splice(vikingRandom, 1);
    }
    return vikingDamage
  }
  showStatus(){
    if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
    if (this.vikingArmy.length && this.saxonArmy.length >= 1) return "Vikings and Saxons are still in the thick of battle.";
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}