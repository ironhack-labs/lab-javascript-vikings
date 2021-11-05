// Soldier
class Soldier {
  constructor(health, strength){
    this.health = 300,
    this.strength = 150
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health = (this.health - damage) 
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(amountOfDamage){

    super.receiveDamage(amountOfDamage)
    
    if (this.health > 0){
      return `${this.name} has received ${amountOfDamage} points of damage`
    
    }else{
      return `${this.name} has died in act of combat`
    }
    
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(name, health, strength){
    super(health, strength, name)
    this.health = 60
    this.strength = 25
    this.name = "Saxon"
  }
  receiveDamage(amountOfDamage){

    super.receiveDamage(amountOfDamage)
    
    if (this.health > 0){
      return `A ${this.name} has received ${amountOfDamage} points of damage`
    
    }else{
      return `A ${this.name} has died in combat`
    }
    
  }


}

// War
class War {


  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
