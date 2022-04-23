// Soldier
class Soldier {
constructor(health, strength){
this.health = health;
this.strength =strength;
}

attack(){
  return this.strength;
}

  receiveDamage(myDamage){
  this.health -= myDamage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(damageReceived) {
    this.health -= damageReceived;
    if (damageReceived >= this.health) {
      return `${this.name} has died in act of combat`
    }
    return `${this.name} has received ${damageReceived} points of damage`
  }
  battleCry() {
    return "Odin Owns You All"
  }
}

// Saxon
class Saxon extends Soldier {
  receieveDamage(damageReceived) {
    this.health -= damageReceived;
    if (damageReceived >= this.health) {
      return 'A saxoon has died in combat'
    }
    return `A Saxon has received ${damageReceived} points of damage`;
  }
}

// BONUS War
// class War {


// }











// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
