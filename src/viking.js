// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health; 
    this.strength = strength;
  }

attack() {
  return this.strength;
}

receiveDamage(damage) {
this.health -= damage;
}

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage (damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } 
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {
receiveDamage(damage) {
  super.receiveDamage(damage); 
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`
  } else {
    return `A Saxon has died in combat`
  }
}
}

// War
class War {
constructor () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

addViking(viking) {
  this.vikingArmy.push(viking);
}

addSaxon(saxon) {
  this.saxonArmy.push(saxon);
}

vikingAttack(){
  let vikingAttack = Math.floor(Math.random() * this.vikingArmy.length);
  let attSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let attack = this.saxonArmy[attSaxon].receiveDamage(this.vikingArmy[vikingAttack].strength);
  if (this.saxonArmy.attSaxon.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy,indexOf(attSaxon), 1);
  } 
  return attack;
  }
  


saxonAttack() {
  let attViking = Math.floor(Math.random() * this.vikingArmy.length);
  let saxonAttack = Math.floor(Math.random() * this.saxonArmy.length);
  let attack = this.vikingArmy[attViking].receiveDamage(this.saxonArmy[saxonAttack].strength);
  if (this.vikingArmy[attViking].health <= 0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(attViking), 1);
  }

  return attack;
}

showStatus() {
  if (this.saxonArmy === [] ) return `Vikings have won the war of the century!`
  if (this.vikingArmy === []) return `Saxons have fought for their lives and survived another day...`
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return `Vikings and Saxons are still in the thick of battle.`
}

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
