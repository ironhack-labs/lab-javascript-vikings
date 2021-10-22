// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength
    this.health = health
  }
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name 
  }

  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage 
    if (this.health > 0) {
       return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(theDamage) {
    this.health = this.health - theDamage 
    if (this.health > 0) {
       return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {
  
  let randomSaxindex =  Math.floor(Math.random() * this.saxonArmy.length)
  let randomSax = this.saxonArmy[randomSaxindex]

  let randomVikingindex =  Math.floor(Math.random() * this.vikingArmy.length)
  let randomViking = this.vikingArmy[randomVikingindex]

  const damage = randomSax.receiveDamage(randomViking.attack())

  if (randomSax.health <= 0) {
    this.saxonArmy.splice(randomSaxindex, 1)
  }
 return damage
  }

  saxonAttack() {
    let randomSaxindex =  Math.floor(Math.random() * this.saxonArmy.length)
    let randomSax = this.saxonArmy[randomSaxindex]

  let randomVikingindex =  Math.floor(Math.random() * this.vikingArmy.length)
  let randomViking = this.vikingArmy[randomVikingindex]

  const damage = randomViking.receiveDamage(randomSax.attack())

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomVikingindex, 1)
  }
 return damage
  }

  showStatus() {
    if (this.saxonArmy.length === 0 ) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
