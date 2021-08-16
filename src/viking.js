// Soldier
class Soldier {
  constructor(arg1, arg2) {
    this.health = arg1;
    this.strength = arg2;
  }
  
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameOfViking, arg1, arg2) {
    // Note: the arguments taken from the parent with "super" keyword should go first
    super(arg1, arg2);
    this.name = nameOfViking;
  }

  // if a method needs to be reimplemented, it simply has to be re-declared
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    else return "A Saxon has died in combat";
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }

  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    /*
    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i,1);
      }
    }
    */
    //for (deadSaxon of this.saxonArmy) {if (deadSaxon.health <= 0) {this.saxonArmy.splice(deadSaxon)} };
    return this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())].receiveDamage(this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())].strength);

    
  }


  saxonAttack() {
    return this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())].receiveDamage(this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())].strength);
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
