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
    this.health = this.health - damage
  }
  
}
const soldier = new Soldier(300, 150)
soldier.receiveDamage(50)

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  
  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > damage) {
      return (`${this.name} has received ${damage} points of damage`)
    } else if (this.health < damage){
      return (`${this.name} has died in act of combat`)
    }
  }

  battleCry() {
    return (`Odin Owns You All!`)
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)   
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health < damage) {
      return (`A Saxon has received ${damage} points of damage`)
    } else if (this.health > damage) {
      return (`A Saxon has died in combat`)
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    var oldHealth = Saxon.health
    Saxon.strength = oldHealth - Viking.strength 
    Viking.strength = Saxon.call.receiveDamage() 

  }
  saxonAttack() {
   Saxon.applystrength = Viking.receiveDamage()

  }

  showStatus() {
    
  }
}
