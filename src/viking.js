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
 
    return this.health -= damage

  }

}

// Viking
class Viking extends Soldier{

  constructor(name){
   super(health,strenght)
   this.name = name
}


  receiveDamage(damage){
 
    this.health -= damage 
    
    if (this.health>0){

      return (`${this.name} has received ${this.damage} points of damage`)

    }  return (`${this.name} has died in act of combat`)

  }

  battleCry(){

  return "Odin Owns You All!"

  }

} 

// Saxon
 
class Saxon extends Soldier {

  receiveDamage(damage){
 
    this.health -= damage 
    
    if (this.health>0){

      return (`A Saxon has received ${this.damage} points of damage`)

    }  return (`A saxon has died in combat`)

  }



}

// War
class War {
  
  
  addViking(Viking){
        this.vikingArmy = Viking
  }

  addSaxon()
  vikingAttack()
  saxonAttack()
  showStatus()



  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
