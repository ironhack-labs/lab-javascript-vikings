// Soldier
class Soldier {
    constructor (salud, fuerza) {
     this.health = salud;
     this.strength = fuerza;
    }
     attack(){
      return this.strength
    } 
     receiveDamage(damage){
      this.health -= damage
    }
  }

class Viking extends Soldier {
  constructor(nombre, salud,fuerza){
   super(salud, fuerza)
   this.name= nombre
  }
  receiveDamage(damage){
   this.health -= damage
   if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
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
  //constructor(salud,fuerza){
  //  super(nombre, salud, fuerza)
//  }
   receiveDamage(damage){
    this.health -= damage
   if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`
   }else{
    return `A Saxon has died in combat`
   } 
   }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
