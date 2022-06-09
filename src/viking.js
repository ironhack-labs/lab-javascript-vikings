// Soldier


class Soldier {

constructor(health,strength) {
  this.health = health;
  this.strength = strength;

}


attack() {
return this.strength
}

receiveDamage(damage) {
  
  this.health -= damage;
   
}



}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength) {
   super(health, strength);
   this.name = name;
   }

  //  console.log(saxon)

   attack() {
   super.attack()
   return this.strength
   }
   
  receiveDamage(damage){

    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {

  return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    }

  receiveDamage(damage) {

    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
    }

  }

  attack() {
    super.attack()
    return this.strength
    }

}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];


  addViking(viking) {
    this.vikingArmy.unshift(viking)

  }

  addSaxon(saxon) {

    this.saxonArmy.unshift(saxon)

  }


  vikingAttack(){
    // this.receiveDamage = 


  }

 saxonAttack() {


 }


 showStatus() {

 }




}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

let viking = new Viking ('bob',100,10);
let saxon = new Saxon (100,10);

saxon.receiveDamage(viking.strength)
console.log(saxon)
