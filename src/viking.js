// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
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
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(vikingdamage){
    this.health -= vikingdamage
    if(this.health > this.strength){
      return `${this.name} has received ${vikingdamage} points of damage`
    }else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }

}  

// Saxon
class Saxon extends Soldier {
  attack(){
    return this.strength
  }
  receiveDamage(saxondamage){
    this.health -= saxondamage
    if(this.health > 0){
      return `A Saxon has received ${saxondamage} points of damage`
  }else{
    return "A Saxon has died in combat"
  }
}
}


// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
