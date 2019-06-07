// Soldier

class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg,
      this.strength = strengthArg
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
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg)
    this.name = name
  }
  receiveDamage = (damage) => {
    this.health -= damage

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry = () => {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage = (damage) => {
    this.health -= damage

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
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

  addViking = (Viking) => {
    this.vikingArmy.push(Viking)
  }

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack = () => {
    //: Vikingos index
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

    //: Saxon index
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    //: Atacando con la fuerza del vikingo al saxon
    let receiveDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
      console.log(this.saxonArmy)
    } else {
      console.log('test')
    }

    return receiveDamage
  }

  saxonAttack = () => {
    //: Vikingos index
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

    //: Saxon index
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    //: Atacando con la fuerza del vikingo al saxon
    let receiveDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
      console.log(this.vikingArmy)
    } else {
      console.log('test')
    }
    return receiveDamage
  }
  showStatus = () => {
    if(this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

const saxon1 = new Saxon(100, 100)
const saxon2 = new Saxon(100, 100)
const saxon3 = new Saxon(100, 100)

const viking1 = new Viking('Daniel', 200, 200)
const viking2 = new Viking('Edgar', 200, 200)
const viking3 = new Viking('Alejandro', 200, 200)

const war = new War()

war.vikingArmy.push(viking1, viking2, viking3)
war.saxonArmy.push(saxon1, saxon2, saxon3)
war.vikingAttack()

