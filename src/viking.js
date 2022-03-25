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
  let x
  this.saxonArmy[x=Math.floor(this.saxonArmy.length * Math.random())].receiveDamage(this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())].strength)
  this.saxonArmy.forEach((eachSoldier) => {
    if(this.saxonArmy[eachSoldier].health < 0){
      this.saxonArmy.splice(eachSoldier)
    }
  })
}
saxonAttack(){
  this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())].receiveDamage(this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())].strength)

}
showStatus(){

}

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
