// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  //Methods
  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.damage = damage
    this.health = this.health - this.damage
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  //Methods

  receiveDamage (damage) {
    this.damage = damage
    this.health = this.health - this.damage

    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }

  }

  battleCry () {
    return 'Odin Owns You All!'
  }

 
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage (damage) {
    this.damage = damage
    this.health = this.health - this.damage

     if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`
    }

  }
}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }


  addViking(viking) {
    this.viking = viking
    this.vikingArmy.push(viking)
    console.log(this.vikingArmy)
  }

  addSaxon(saxon) {
    this.saxon = saxon
    this.saxonArmy.push(saxon)
    console.log(this.saxonArmy)
  }

  chooseRandomSoldier(array) {
  
      const position = Math.floor(Math.random()*(array.length-1))
    
    return position
  }

  chooseRandomViking() {

    this.position = this.chooseRandomSoldier()
    console.log(randomViking, "el vikingo al azar")
    this.randomViking = randomViking
    console.log(this.randomViking, "el vikingo otra vez, pero en la clase")
    return this.randomViking[this.position]
  }

  chooseRandomSaxon() {
    this.position = this.chooseRandomSoldier()
    this.randomSaxon = randomSaxon
    return this.randomSaxon[this.position]
  }

  vikingAttack() {
    this.viking = this.chooseRandomViking()
    this.saxon = this.chooseRandomSaxon()
    this.damage = this.viking.attack()
    this.healthSaxon = this.saxon.receiveDamage(this.damage)
    
    
    if (this.healthSaxon === `A Saxon has died in combat`) {
      this.saxonArmy.splice(this.position.saxon, 1)
    }

    return this.healthSaxon

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
