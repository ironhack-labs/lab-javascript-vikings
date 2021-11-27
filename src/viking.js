// Soldier
class Soldier {
  constructor (health,strength) {
    this.health = health;
    this.strength = strength;
  };
  attack() {
    return this.strength
  };
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health,strength);
    this.name = name;
  };
  battleCry() {
    return "Odin Owns You All!"
  };
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage` 
    }
    return `${this.name} has died in act of combat`
    ;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage` 
    }
    return `A Saxon has died in combat`
    ;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(viking){
    this.vikingArmy.push(viking)
  };
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  };
  vikingAttack(){
    let choosenViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
    let choosenSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
    choosenSaxon.receiveDamage(choosenViking.attack())
    if (choosenSaxon.health <= 0) {
      saxonArmy.splice(choosenSaxon)
    }
    return choosenSaxon.health
  };
  saxonAttack(){

  };
  showStatus(){

  };
}












// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
