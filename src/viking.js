// Soldier
// class Soldier {
// constructor(health, strength) {
//   // properties
//   // this.health = health
//   // this.strength = strength
// // }
// //   attack() {
// //     return this.strength
// //   }

// //   receiveDamage(damage) {
// //     this.health = this.health - damage
//   }

// }

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health -damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    // properties
    super(health, strength)
    this.name = name
  }

    receiveDamage(damage) {
    
      super.receiveDamage(damage)

      if (this.health > 0) {

        return `${this.name} has received ${damage} points of damage`

      } else if (this.health >= 0) {
        return `${this.name} has died in act of combat`
      }
    }

      battleCry() {
        return `Odin Owns You All!`
      }
 
    }


// Saxon
class Saxon extends Soldier {



  receiveDamage(damage) {
    super.receiveDamage(damage)

    if (this.health > 0) {

      return (`A Saxon has received ${damage} points of damage`)
    } return (`A Saxon has died in act of combat`)
    
  } 

}




// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
