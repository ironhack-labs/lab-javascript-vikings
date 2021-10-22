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
    this.health = this.health - damage
  }
}
// Viking
class Viking extends Soldier{
  constructor(name, health , strength){
  super(name, health, strength)
  this.name = name
  this.health = health
  this.strength = strength
  }
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health) { return `${this.name} has received ${damage} points of damage`}
    else { return `${this.name} has died in act of combat`}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health<=0){
      return `A Saxon has died in combat`
    }else{
      return `A Saxon has received ${damage} points of damage`
    }
    
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
 
  
  addViking(newViking){ this.vikingArmy.push(newViking) }
  addSaxon(newSaxon){ this.saxonArmy.push(newSaxon) }
  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random((this.saxonArmy.length-1)+1))]
    let randomSaxon = this.saxonArmy[Math.floor(Math.random((this.vikingArmy.length-1)+1))]
    return randomSaxon.receiveDamage(randomViking.strength) 
    

    
  }
  saxonAttack(){}
  showStatus(){}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
