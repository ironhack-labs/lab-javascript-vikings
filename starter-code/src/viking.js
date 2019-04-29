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
}

}
// Viking
class Viking  extends Soldier{
  
  constructor(name, strength, health) {
    super(strength, health)
    this.name = name
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
    return `${this.name} has received ${damage} points of damage`
    
  }
}
  battleCry() {
    return "Odin Owns You All!"

  }
}



// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength)

  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    } else {
    return `A Saxon has received ${damage} points of damage`
    
  }
}
 
}

// War
class War {
  constructor () {
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
    const randomNumberSaxon = Math.floor(Math.random ()*this.saxonArmy.length)
    const randomNumberViking = Math.floor(Math.random ()*this.vikingArmy.length)
    const resultAttack = this.saxonArmy[randomNumberSaxon].receiveDamage(this.vikingArmy[randomNumberViking].strength)
    
    if (this.saxonArmy[randomNumberSaxon].health <= 0) {
      this.saxonArmy.splice(randomNumberSaxon, 1)
    }

    return resultAttack
  }

  saxonAttack() {

    const randomNumberSaxon = Math.floor(Math.random ()*this.saxonArmy.length)
    const randomNumberViking = Math.floor(Math.random ()*this.vikingArmy.length)
    const resultAttack = this.vikingArmy[randomNumberViking].receiveDamage(this.saxonArmy[randomNumberSaxon].strength)
    if (this.vikingArmy[randomNumberViking].health <= 0) {
      this.vikingArmy.splice(randomNumberViking, 1)
    }
    return resultAttack

  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return"Saxons have fought for their lives and survive another day..."
    
    } else {
      return "Vikings and Saxons are still in the thick of battle."

    }


  }

}



