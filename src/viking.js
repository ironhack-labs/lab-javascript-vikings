// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack = () => { 
    return this.strength
  }

  receiveDamage = (damage) => { 
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) { 
    super(health, strength)
    this.name = name
  }

  receiveDamage = (damage) => { 
    this.health -= damage
    let message = ""
    this.health > 0 ? 
      message = `${this.name} has received ${damage} points of damage`
      :
      message = `${this.name} has died in act of combat`
    return message
  }

  battleCry = () => { 
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super (health, strength)
  }

  receiveDamage = (damage) => { 
    this.health -= damage
    let message = ""
    this.health > 0 ?
      (message = `A Saxon has received ${damage} points of damage`)
      :
      (message = `A Saxon has died in combat`)
    return message
  }
}


// War
class War {}
