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
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health, strength)
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack(){
    let r = Math.floor(Math.random()* this.saxonArmy.length)
    let result = this.saxonArmy[r].receiveDamage(this.vikingArmy[r].strength)
    
    if(result == `A Saxon has died in combat`){
      this.saxonArmy.splice(r,1)
    }
    return result;   
}
  saxonAttack(){
    let r = Math.floor(Math.random()* this.saxonArmy.length)
    let result = this.vikingArmy[r].receiveDamage(this.saxonArmy[r].strength)
    
    if(result == `${this.vikingArmy[r].name} has died in act of combat` ){
      this.vikingArmy.splice(r,1)
    }
    return result;   
}
  showStatus(){
    if(this.saxonArmy.length == 0){
      return 'Vikings have won the war of the century!'
    }
    else if(this.vikingArmy.length == 0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    else{
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
