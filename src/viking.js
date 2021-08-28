// Soldier
class Soldier {
  constructor (health,strength){
    this.health=health
    this.strength=strength
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
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name
    this.health = health
    this.strength = strength
  
  }
  receiveDamage(damage) {
  this.health -= damage
  if (this.health <= 0 ) {
    return `${this.name} has died in act of combat`
  }
  return `${this.name} has received ${damage} points of damage`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  //attack(){
    //return this.strength
//}
receiveDamage(damage){
  this.health -= damage 
  if(this.health > 0){
   return`A Saxon has received ${damage} points of damage`
  }
  return `A Saxon has died in combat`
}
}

// War

class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
addSaxon(saxon){
this.saxonArmy.push(saxon)
}
vikingAttack(){
 const viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)] //viking random
 const saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]//saxon random
  const status= saxon.receiveDamage(viking.strength)
  this.saxonArmy= this.saxonArmy.filter((saxon)=>saxon.health>0)
  return status
}
saxonAttack(){
  const viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)] 
  const saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  const status=viking.receiveDamage(saxon.strength)
  this.vikingArmy=this.vikingArmy.filter((vikin)=>vikin.health>0)
  return status
}
showStatus(){
  if(this.saxonArmy.length>=1 && this.vikingArmy.length>=1){
    return "Vikings and Saxons are still in the thick of battle."
  }
  if(this.saxonArmy.length===0){
    return "Vikings have won the war of the century!" 
} else if(this.vikingArmy.length===0){
  return "Saxons have fought for their lives and survived another day..."
}
}
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}