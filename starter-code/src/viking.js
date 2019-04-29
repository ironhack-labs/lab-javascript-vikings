// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }
  
  receiveDamage(damage) {
    this.health -= damage
//    if (this.name) { 
//      if (this.health > 0) { return `${this.name} has received ${damage} points of damage` }
//      else { return `${this.name} has died in act of combat` }
//    }
//    else {
//      if (this.health > 0) { return `A Saxon has received ${damage} points of damage` }
//      else { return `A Saxon has died in combat` }
//    }
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) { return `${this.name} has received ${damage} points of damage` }
    else { return `${this.name} has died in act of combat` }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) { return `A Saxon has received ${damage} points of damage` }
    else { return `A Saxon has died in combat` }
  }

}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }  

  vikingAttack() {

    let randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]
    let randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]

    let damageReceived = randomSaxon.receiveDamage(randomViking.strength)

    if (randomSaxon.health <= 0) {      
      let randomSaxonIndex = this.saxonArmy.indexOf(randomSaxon)
      this.saxonArmy.splice(randomSaxonIndex, 1)
    }

    return damageReceived
    
  } 

  saxonAttack() {

    let randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]
    let randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]

    let damageReceived = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0) {      
      let randomVikingIndex = this.vikingArmy.indexOf(randomViking)
      this.vikingArmy.splice(randomVikingIndex, 1)
    }

    return damageReceived
    
  }

  showStatus() {

    if (this.saxonArmy.length == 0) { return "Vikings have won the war of the century!" }
    if (this.vikingArmy.length == 0) { return "Saxons have fought for their lives and survive another day..." }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) { return "Vikings and Saxons are still in the thick of battle." }

  }




//   showStatus() method
// Returns the current status of the War based on the size of the armies.

// should be a function
// should receive 0 arguments
// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."



}
