// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = 150;
    this.health = 300;
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
  constructor(vikingName, vikingHealth, vikingStrength) {
    super(vikingHealth, vikingStrength);
    this.name = vikingName;
  }
  receiveDamage(damage) {
    if (this.health <= damage) {
      return (this.name + " has died in act of combat")
    }
    if (this.health > 0) {
      this.health = this.health - damage;
      return (this.name + " has received " + damage + " points of damage")
    }


  }
  battleCry() {
    return "Odin Owns You All!"
  }
}



// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= damage) {
      return ("A Saxon has died in act of combat");
    }
    if (this.health > 0) {
      this.health = this.health - damage
      return ("A Saxon has received " + damage + " points of damage")
    }
  }
}


// War
class War { 
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy  = [];
  }
  addViking(vikings){
    this.vikingArmy.push(vikings);

  }
  addSaxon(saxons){
this.saxonArmy.push(saxons)
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
