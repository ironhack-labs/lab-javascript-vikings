const { ENUMMEMBER_TYPES } = require("@babel/types");

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
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  // attack() {
  //   return this.strength
  // }
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      console.log(`${this.name} has received ${this.damage} points of damage`)	
      return `${this.name} has received ${damage} points of damage`
    }else {
      console.log(`${this.name} has died in act of combat`);
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    console.log("Odin Owns You All!");
    return "Odin Owns You All!"
  }

}
let ragnar = new Viking("Ragnar", 100, 20)
// Saxon
class Saxon extends Soldier{
  
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      console.log(`A Saxon has received ${damage} points of damage`)	
      return `A Saxon has received ${damage} points of damage`
    }else {
      console.log(`A Saxon has died in act of combat`);
      return "A Saxon has died in combat"
    }
  }
}

class War {

  constructor(){
  vikingArmy = [];
  saxonArmy = [];
  }
addViking(Viking){this.vikingArmy.push(Viking)}
addSaxon(Saxon){this.saxonArmy.push(Saxon)}

vikingAttack(){
  
  let rdmSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
  let  rdmSaxon = this.saxonArmy[rdmSaxonIndex];
  let aregresarAlFinal = rdmSaxon.receiveDamage(rdmViking.attack())
  rdmSaxon.health -= rdmViking.strength
  if(rdmSaxon.health <= 0){
    console.log("Saxon has died in combat")
    this.saxonArmy.splice(rdmSaxonIndex, 1)
  }
  return aregresarAlFinal
}
saxonAttack(){
  
  let rdmVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  let rdmvicking = this.vickingArmy[rdmVikingIndex];
  let aregresarAlFinal = rdmvicking.receiveDamage(rdmSaxon.attack())
  rdmViking.health -= rdmSaxon.strength
  console.log("Saxon has attacked Viking", Viking)
  if(Viking.health <= 0){
    console.log("${rdmVicking.} has died in combat")
    this.vickingArmy.splice(rdmvickingIndex, 1)
  } 
  return aregresarAlFinal
}
showStatus(){
  if(this.vikingArmy.length >  0 && this.saxonArmy.length > 0){ 
    console.log("Vikings and Saxons are still in the thick of battle.")
    return "Vikings and Saxons are still in the thick of battle."
  }else if(this.saxonArmy.length <= 0){
    console.log("Vikings have won the war of the century!")
    return "Vikings have won the war of the century!"
  } else if(this.vikingArmy.length <= 0){
    console.log("Saxons have fought for their lives and survived another day...")
    return "Saxons have fought for their lives and survived another day..."
  }
  }
}


// let newWar = new War(vicking, saxon)
// War

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
