// Soldier
class Soldier {
  constructor (health, strength){
  this.health = health;
  this.strenght = strength;
}
attack(){
  return this.strength
}


recieveDamage(damage) {
  this.health = this.health - damage
}
}




// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
  super (name, health, strength)
  this.name = name;
}
recieveDamage(damage) {
  this.health = this.health - damage;
if(this.health === 0){
  return `${this.name} has died in act of combat`
}else{
  return `${this.name} has received ${damage} points of damage`
}

}
battleCry(){
  return `Odin Owns You All!`

}

}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }
  recieveDamage(damage){
    this.health = this.health - damage
    if(this.health === 0){
      return `A Saxon has died in act of combat`
    }else{
      return `A Saxon has received ${damage} points of damage`
    }
  }


}

// War
class War {
  constructor(vikingArmyProperty, saxonArmyProperty){
    this.vikingArmyProperty = vikingArmyProperty;
    this.saxonArmyProperty = saxonArmyProperty;

  }
  addViking(oneViking){
    this.vikingArmyProperty = this.vikingArmyProperty ++

  }
  addSaxon(oneSaxon){
    this.saxonArmyProperty = saxonArmyProperty ++

  }
  vikingAttack(){

  }
  saxonAttack(){

  }
  showStatus(){
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
