// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength
  }
  attack() {
    console.log(this.strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    //console.log(this.health)
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
     super(health, strength);
     this.name = name;
  }
  battleCry() {
    console.log("Odin Owns You All!")
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
     return console.log(this.name + ' has died in act of combat');
    } else {
     return console.log(this.name + ' has received ' + damage + ' points of damage');
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
     super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
    return console.log("A Saxon has died in act of combat");
  } else {
    return console.log('A Saxon has received ' + damage + ' points of damage');
  }
 }  
}

const saxon1 = new Saxon(5, 2);
console.log(saxon1);
saxon1.receiveDamage(3);
saxon1.receiveDamage(2);

const viking1 = new Viking('Bunny', 6, 3);
console.log(viking1);
viking1.receiveDamage(2);
viking1.receiveDamage(4);

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
