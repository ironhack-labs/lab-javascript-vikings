// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return = this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
  super(health, strength)
  this.name = name;
}
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0){
    console.log (`${this.name} has received ${damage} points of damage`)
    else {
    console.log(`${this.name} has died in act of combat`)
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength)
  super(health, strength)

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health >= 0){
      return "A Saxon has died in combat"
      } else {
     return "A Saxon has received ${damage} points of damage";
      }
  }
}

// War
class War {
  constructor(vikingArmy, saxonArmy){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking() {
    this.vikingArmy = this.vikingArmy +1;
  }

 addSaxon() {
    this.saxonArmy = this.saxonArmy +1;
    
  }

}

let viking = new Viking()
let saxon = new Saxon()

showStatus(){
  if(this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0){
    return "Saxons have fought for their lives and survived another day";
  } else {
    return "Vikings ans Saxons are still in the thick of battle";
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
