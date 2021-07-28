// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
    this.health = 60;
    this.strength = 25; 
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }
    else {
      return 'A Saxon has died in combat'
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
