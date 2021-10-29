

// Soldier
class Soldier {
  constructor (health, strength){
    this.strength = strength;
    this.health = health;
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
    super (name, health, strength)
    this.name = name;
   }
   receiveDamage(damage){
    this.health -= damage;
    if(this.health === 0 ){
       return `${this.name} has died in act of combat`
    }else if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health == 0 ){
      return `A Saxon has died in combat`
   }else if(this.health > 0){
     return `A Saxon has received ${damage} points of damage`
   }
  }

   
}
   
// War
class War {  
  constructor (vikingArmyPorperty,saxonArmyProperty){
       this.vikingArmyPorperty = vikingArmyPorperty;
       this.saxonArmyProperty = saxonArmyProperty;
  }
  addViking(addsViking){
    this.vikingArmyPorperty = this.vikingArmyPorperty += addsViking 
  }
  addSaxon(addsSaxon){
    this.saxonArmyProperty = this.saxonArmyProperty += addsSaxon
  }
vikingAttack(){
    Saxon.receiveDamage(Viking.strength);
    if(Saxon.health === 0){
      this.saxonArmyProperty = this.saxonArmyProperty--
    }
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
