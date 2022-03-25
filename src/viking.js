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
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health <= 0) { 
      let messageDie = `${this.name} has died in act of combat` 
      return messageDie

    }
    else if(this.health > 0){
      let messageAlive = `${this.name} has received ${damage} points of damage` 
      return messageAlive
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {



  receiveDamage(damage){
    this.health -= damage
    if(this.health <= 0) { 
      let messageDie = `A Saxon has died in combat` 
      return messageDie

    }
    else if(this.health > 0){
      let messageAlive = `A Saxon has received ${damage} points of damage` 
      return messageAlive
    }
  }

}

// War
class War {
constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
}
addViking(){}
addSaxon(){}
vikingAttack(){}
saxonAttack(){}
showStatus(){}

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
