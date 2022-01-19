// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
attack (){
  return this.strength
}
receiveDamage (damage){
this.health = this.health - damage
} 
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
receiveDamage (damage){
  this.health = this.health - damage
    if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
battleCry(){
  return "Odin Owns You All!"
  }
}


/* receiveDamage(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}
*/

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor()
  addvikking(){
    
    
  }
  addSaxon(saxon){

  }
  vikingAttack(){
    //choose a random saxon
    //equal the recieveDamage to the health of the saxon
    //if saxon health is equal or under 0 then it should be eliminated
    //if not dead return the result of recievedamage and not eliminate the saxon
    
  }
  saxonAttack(){
    //choose a random saxon
    //equal the recieveDamage to the health of the viking
    //if viking health is equal or under 0 then it should be eliminated
    //if not dead return the result of recievedamage and not eliminate the viking
  }
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
