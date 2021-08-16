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
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`
    else return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = new Array()
    this.saxonArmy = new Array()
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    let poorSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
    let attackingViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
    if(poorSaxon.health < attackingViking.strength) this.saxonArmy.splice(poorSaxon)
    return poorSaxon.receiveDamage(attackingViking.attack())
    
  }
  saxonAttack() {
    let poorViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]
    let attackingSaxon= this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
    if((poorViking.health - attackingSaxon.strength) < 1) this.vikingArmy.splice(poorViking)
    return poorViking.receiveDamage(attackingSaxon.attack())
  }
  showStatus() {
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
    if(this.vikingArmy.length < 1) return "Saxons have fought for their lives and survived another day..."
    if(this.saxonArmy.length < 1) return "Vikings have won the war of the century!"
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
