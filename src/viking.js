// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
attack () {
  return this.strength
}

receiveDamage(damage) {  
 this.health -=  damage;  
  
}

}
// Viking
class Viking extends Soldier {

constructor (name, health, strength) {
  super (health, strength)
  this.name = name
}

receiveDamage (damageVik) {
this.health -= damageVik
if (this.health > damageVik) {
  return `${this.name} has received ${damageVik} points of damage`
}
  else {
    return '${this.name} has died in act of combat'
  }
}

battlecry () {
  return 'Odin owns you all'
}
}

// // // Saxon
class Saxon extends Soldier {

receiveDamage (damageSax) {
damageSax -= this.damageSax
if (this.health > this.damageSax) {
  return `A Saxon has received ${damageSax} points of dammage`
}
else if (this.health < this.damageV) {
  return 'A saxon has died in of combat'
}
}
}


// // War
class War {
  constructor(vikingArmy, saxonArmy) {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking (viking) {

    this.vikingArmy.push(viking)
    }
  addSaxon (saxon) {
     this.saxonArmy.push(saxon)
    }
  vikingAttack () {
    
    vikingSelected = Math.floor(Math.random() * this.vikingArmy.length);

     
    }
  
  saxonAttack () 
  showStatus () 
}



// // The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
