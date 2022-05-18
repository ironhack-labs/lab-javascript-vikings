// Soldier
class Soldier {
constructor(health, strength) {
this.health = health
this.strength = strength
}

attack (){
  return this.strength
}

receiveDamage(damage){
  this.health -= damage

}

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    }

    battleCry(){
     return `Odin Owns You All!`
    }

    receiveDamage(damage){
      super.receiveDamage(damage) 

    if( this.health > 0 ){
      return `${this.name} has received ${damage} points of damage`
    }else{ 
      return `${this.name} has died in act of combat`
    }
     
    }
    

}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }

    receiveDamage(damage){
      super.receiveDamage(damage)

      if( this.health > 0 ){
        return ` A Saxon has received ${damage} points of damage`
      }else{ 
        return ` A Saxon has died in act of combat`
      }

    }
    
}

// War
class War {
  vikingArmy = [];
  saxonArmy  = [];

  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)

  }
  vikingAttack(){
//cuando un viking ataca un saxon recive daño
//
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
