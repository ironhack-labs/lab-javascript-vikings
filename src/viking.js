// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }
  attack () {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack () {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      console.log(this.name + ' has received ' + damage + ' points of damage')
    } else {
      console.log(this.name + ' has died in a brave act of combat')
    };
    }
    battleCry() {
      return "Odin Owns You All!"
  }
}

// Test
const viktor = new Viking('Viktor', '100', '50');
console.log(viktor)
console.log(viktor.attack ())
console.log(viktor.receiveDamage (110))
console.log(viktor.battleCry())



// Saxon
class Saxon extends Soldier {
receiveDamage(damage) {
  this.health = this.health - damage;
  if(this.health > 0) {
    console.log('A Saxon has received ' + damage + ' points of damage')
  } else {
    console.log('A Saxon has died in a brave act of combat')
  };
}
}

// War
class War {
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [] ;
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking)
    // return vikingArmy

  }
  // addSaxon()
  // vikingAttacks()
  // saxonAttack()
  // showStatus()

}
let greatWar = new War()
greatWar.addViking('James')
console.log(greatWar)



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


// Question: why undefined when I console.log(viktor.receiveDamage (110))?
