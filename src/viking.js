// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength
  }
  attack() {
    return (this.strength)
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
    return  ("Odin Owns You All!")
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
     return (this.name + ' has died in act of combat');
    } else {
     return (this.name + ' has received ' + damage + ' points of damage');
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
    return ("A Saxon has died in combat");
  } else {
    return ('A Saxon has received ' + damage + ' points of damage');
  }
 }  
}

const saxon1 = new Saxon(5, 2);
console.log(saxon1);
console.log(saxon1.receiveDamage(3));
console.log(saxon1.receiveDamage(3));

const viking1 = new Viking('Bunny', 6, 3);
console.log(viking1);
console.log(viking1.receiveDamage(2));
console.log(viking1.receiveDamage(2));
console.log(viking1.receiveDamage(2));
console.log(viking1.battleCry()); 
// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
