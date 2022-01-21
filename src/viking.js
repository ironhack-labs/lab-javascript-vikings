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
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let saxDamaged = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    receiveDamage(saxDamaged){
      this.saxDamaged.health = this.saxDamaged.health - this.viking.strength
     if(this.saxDamaged.health < 0){
      this.saxonArmy.slice(saxDamaged)
    }else {
      return this.saxonArmy
    }
    }
  }
    
    //choose a random saxon
    //equal the recieveDamage to the health of the saxon
    //if saxon health is equal or under 0 then it should be eliminated
    //if not dead return the result of recievedamage and not eliminate the saxon
    
  
 saxonAttack(){
  let vikingDamaged = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  receiveDamage(vikingDamaged){
    this.vikingDamaged.health = this.vikingDamaged.health - this.saxon.strength
    if(this.saxDamaged.health < 0){
    this.vikingDamaged.slice(saxDamaged)
  }else {
    return this.vikingArmy
  }
    //choose a random saxon
    //equal the recieveDamage to the health of the viking
    //if viking health is equal or under 0 then it should be eliminated
    //if not dead return the result of recievedamage and not eliminate the viking
  }
}
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
