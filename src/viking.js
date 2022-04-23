// Soldier
class Soldier {
  constructor(health, strength) {
   this.health = health;
   this.strength = strength;
   }
   attack() {
    return this.strength;
  }
receiveDamage(theDamage){
  this.health -= theDamage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength)
  {
   super (health, strength) // repite
    this.name = name // nuevo argumento
  }
  receiveDamage(theDamage){
    this.health -= theDamage
      if(this.health>0){
        return `${this.name} has received ${this.theDamage} points of damage`
      }else{
        return  `${this.name} has died in act of combat`
      }
  }
  battleCry (){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(name,health,strength)
  {
  super (name,health,strength)
  
  if(this.health > 0){
    console.log(`A Saxon has received ${this.theDamage} points of damage`)
  }else{
    console.log(`A Saxon has died in act of combat`)
  }

}
}

// War
class War {
  addViking(){
    
  }
  addSaxon(){

  }
  vikingAttack(){
    
  }
  saxonAttack(){}
  showStatus(){}
  vikingArmy (){[]}
  saxonArmy (){[]}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
