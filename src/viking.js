// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) {
      let message = `${this.name} has received ${damage} points of damage`
      return message;
    }else {
      let message = `${this.name} has died in act of combat`
      return message;
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) {
      let message = `A Saxon has received ${damage} points of damage`
      return message;
    }else {
      let message = `A Saxon has died in combat`
      return message;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []; 
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  /*vikingAttack(){
    let saxonArmyLength = saxonArmy.length - 1;
    let vikingArmyLength = vikingArmy.length - 1;
    let randomViking = Math.floor(Math.random() * vikingArmyLength);
    if(vikingArmyLength <)
  } 
}*/




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
