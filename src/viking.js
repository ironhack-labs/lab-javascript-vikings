// Soldier
class Soldier {
  constructor (health,strength){
    this.health=health
    this.strength=strength
  }
  attack(){
  return this.strength
  }
  receiveDamage(damage) {
  this.health -= damage
  }
}
// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name
    this.health = health
    this.strength = strength
}
  receiveDamage(damage) {
  this.health -= damage
  if (this.health <= 0 ) {
    return `${this.name} has died in act of combat`
  }
  return `${this.name} has received ${damage} points of damage`
  }
  battleCry() {
    return ("Odin Owns You All!")
  }

}
// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super (health, strength)
    this.health = health
    this.strength = strength
}
  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0 ) {
      return "A Saxon has died in combat"
  }
      return `A Saxon has received ${damage} points of damage`
  }
}
// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject)
  } 
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject)
  }
  vikingAttack() {
    let finalViking = Math.floor(Math.random()*(this.vikingArmy.length))
    let finalSaxon = Math.floor(Math.random()*(this.saxonArmy.length))

    let alive = this.saxonArmy[finalSaxon].receiveDamage(this.vikingArmy[finalViking].strength)
    if (alive == "A Saxon has died in combat") {
    this.saxonArmy.splice(finalSaxon, 1)
    }
    return alive
  }
  saxonAttack() {
    let finalViking = Math.floor(Math.random()*(this.vikingArmy.length))
    let finalSaxon = Math.floor(Math.random()*(this.saxonArmy.length))

    let alive = this.vikingArmy[finalViking].receiveDamage(this.saxonArmy[finalSaxon].strength)
    this.vikingArmy = this.vikingArmy.filter((vikingo) => {
      if (vikingo.health > 0) {
        return vikingo
      }
    })
    return alive
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}