// Soldier
class Soldier { 
  
  constructor(health, strength) {
    
  this.health = health
  this.strength = strength
  this.isSoldier = true

}
 
  

  attack() {

    return this.strength;
  }

  receiveDamage(theDamage) {

    const damage = theDamage;
    let actualHealth = this.health - damage

    this.health = actualHealth
  }

}
// Viking
class Viking extends Soldier{    

    // contructor class
  constructor(name, health, strength){

    super(health, strength)
    this.name = name

  }

    // attack function
  attack() {

    return this.strength;

  }

    // receive damage function

  receiveDamage(theDamage) {

    const damage = theDamage;
    let actualHealth = this.health - damage

    this.health = actualHealth

    if ( this.health > damage ){
      return `${this.name} has received ${damage} points of damage`
    } else {

      return `${this.name} has died in act of combat`
    }

  }

    // battlecry function

    battleCry() {

      return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{
  
  constructor( health, strength){

    super(health, strength)
   

  }
  attack() {

    return this.strength
  }
  
  receiveDamage(theDamage) {

    const damage = theDamage;
    let actualHealth = this.health - damage

    this.health = actualHealth

    if ( this.health > 0 ){
      return `A Saxon has received ${damage} points of damage`
    } else {

      return `A Saxon has died in combat`
    }


  
}

}

// War
class War {

  constructor (){

    this.vikingArmy = []
    this.saxonArmy = []
  }

  
  addViking(viking)  {
    
    this.vikingArmy.push(viking)
    

  }

  



  
  

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


