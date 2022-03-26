// Soldier
class Soldier {
  constructor(health, strength) {
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

attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health <= 0){
      return `${this.name} has died in act of combat` 
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry(){
  return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength
  }
  
  receiveDamage(damage){
    this.health -= damage
    if (this.health <= 0){
      return `A Saxon has died in combat`
    } else {
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
 
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  
  vikingAttack(){
    
    const saxonAttacked = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingAttackSent = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
    const battleResult = saxonAttacked.receiveDamage(vikingAttackSent.strength)

    if (saxonAttacked.health <= 0){
      this.saxonArmy.shift(saxonAttacked)
    } else {
      return saxonAttacked.health;
    }
  
    return battleResult;

  }
  
  saxonAttack(){
    
    const vikingAttacked = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxonAttackSent = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    
    const battleResult = vikingAttacked.receiveDamage(saxonAttackSent.strength)

    if (vikingAttacked.health <= 0){
      this.vikingArmy.shift(vikingAttacked)
    } else {
      return battleResult;
    }

  }
  
  showStatus(){

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
