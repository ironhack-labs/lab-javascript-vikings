// Soldier
class Soldier {
  constructor (health, strength) {
    
    this.health = health;
    this.strength = strength;

  }
  attack () {

    console.log (this.strength)
    return this.strength

  }

  receiveDamage (theDamage) {
    this.health -= theDamage

  }

}

// class HurtedSoldier extends Soldier {
//   constructor (health, strenght, damage){
//     super (health, strenght, damage)
// //     this.damage = damage
//   }

// }

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super (health, strength)
    this.name = name

  }
  attack () {
    
    console.log (this.strength)
    return this.strength

  }
  
  receiveDamage (theDamageViking) {

    this.health -= theDamageViking

    if (this.health > theDamageViking){
      return `${this.name} has received ${theDamageViking} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  
  battleCry(){
    return "Odin Owns You All!";
  
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage (damage) {
    this.health = this.health - damage

    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }

}



// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking (swedish) {
    this.vikingArmy.push (swedish)
  }

  addSaxon (saxonA) {
    this.saxonArmy.push (saxonA)
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
