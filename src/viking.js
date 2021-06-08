// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return this.name + ' has received ' + damage + ' points of damage'
    } else {
      return this.name + ' has died in act of combat'
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
    if(this.health > 0) {
      return 'A Saxon has received ' + damage + ' points of damage'
    } else {
      return 'A Saxon has died in combat'
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy =[];
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const damage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
    for (let saxon of this.saxonArmy) {
      if (saxon.health <= 0) {
         let index = this.saxonArmy.indexOf(saxon);
         this.saxonArmy.splice(saxon, 1)
      }
    }
    return damage;
  }
  saxonAttack(){
    const damage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
    for (let viking of this.vikingArmy) {
      if (viking.health <= 0) {
         let index = this.vikingArmy.indexOf(viking);
         this.vikingArmy.splice(viking, 1)
      }
    }
    return damage;
  }
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
