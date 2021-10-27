// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }
  
  receiveDamage(damage) {
    this.health -= damage
  }

}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    this.name = name;
    super(health, strength)
  }

receiveDamage(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`
  }
  else {
    return `${this.name} has died in act of combat`
  }
  }
  
battleCry() {
  return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `A ${this.name} has died in combat`
    }
  }
}


// War
class War {
constructor () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
// empty arrays

// adds 1 viking to the viking army
addViking(viking) {
this.vikingArmy.push(viking)
}

// adds 1 saxon to the saxon army
addSaxon(saxon) {
this.saxonArmy.push(saxon)
}

vikingAttack() {
  // create random choice of both players 
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

// now function should make a Saxon receiveDamage() equal to the strength of a Viking
  const vikAttack = randomSaxon.receiveDamage(randomViking.strength)
  for (let saxon of this.saxonArmy) {
    if (saxon.health <= 0) { this.saxonArmy.splice(this.saxon) }
  }
  return vikAttack
}

saxonAttack() {
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
// now function should make a Saxon receiveDamage() equal to the strength of a Viking
  const saxAttack = randomViking.receiveDamage(randomSaxon.strength)
  for (let viking of this.vikingArmy) {
    if (viking.health <= 0) { this.vikingArmy.splice(this.viking) }
  }
  return saxAttack
}


showStatus() {
  if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`
  }
  if(this.vikingArmy.length === 0){
    return `Saxons have fought for their lives and survived another day...`
  }
  return `Vikings and Saxons are still in the thick of battle.`
}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

