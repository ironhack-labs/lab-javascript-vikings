// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack = () => this.strength

  receiveDamage = (damage) => { this.health -= damage }
}
Object.freeze(Soldier)


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

  battleCry = () => "Odin Owns You All!"
}
Object.freeze(Viking)


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super (health, strength)
  }

  receiveDamage = (damage) => { 
    this.health -= damage
    let message = ""
    this.health > 0
      ? (message = `A Saxon has received ${damage} points of damage`)
      : (message = `A Saxon has died in combat`)
    return message
  }
}
Object.freeze(Saxon)


// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking = (viking) => { this.vikingArmy.push(viking) }

  addSaxon = (saxon) => { this.saxonArmy.push(saxon) }

  vikingAttack() {
    const randomV = Math.floor(Math.random() * this.vikingArmy.length)
    const randomS = Math.floor(Math.random() * this.saxonArmy.length)
    const randomViking = this.vikingArmy[randomV]
    const randomSaxon = this.saxonArmy[randomS]
    let message = ""

    this.saxonArmy.length > 0 ? randomSaxon.receiveDamage(randomViking.attack()) : null
    
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomS, 1)
      message = "A Saxon has died in combat"
    } else {
      message = `A Saxon has received ${randomViking.strength} points of damage`
    }

    return message
  }

  saxonAttack() {
    const randomS = Math.floor(Math.random() * this.saxonArmy.length)
    const randomV = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = this.saxonArmy[randomS]
    const randomViking = this.vikingArmy[randomV]
    let message = ""

    this.vikingArmy.length > 0 ? randomViking.receiveDamage(randomSaxon.attack()) : null

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomV, 1)
      message = "A Viking has died in combat"
    } else {
      message = `${randomViking.name} has received ${randomSaxon.strength} points of damage`
    }

    return message
  }

  showStatus() {
    let message = ""
    if (this.saxonArmy.length === 0) {
      message = "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      message = "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length && this.vikingArmy.length > 0) {
      message = "Vikings and Saxons are still in the thick of battle."
    } else {
      message = "A total massacre, no single soul survived."
    }

    return message
  }
}
Object.freeze(War)



/* --------------------------- "Debugging" --------------------------- */
// Scope: uncovered areas of Jasmine automatical testing (and have fun)
// Instructions: Uncomment (cmd + /) below to experience the fierce consol battle
/* ------------------------------------------------------------------- */

// new war instance and random generator function
// const oldWar = new War
// const getRandomNumber = () => Math.floor(Math.random() * 100)

// // Creation of random army
// for (let i = 0; i < 50; i++) {
//   const viking = new Viking(`viking #${i}`, getRandomNumber(), getRandomNumber())
//   const saxon = new Saxon(getRandomNumber(), getRandomNumber())
//   oldWar.addViking(viking)
//   oldWar.addSaxon(saxon)
// }

// /* 
// * To the battle!
// */
// while (oldWar.saxonArmy.length && oldWar.vikingArmy.length > 0) {
//   const randomNumber = Math.floor(Math.random() * 2) + 1
//   randomNumber % 2 === 0 ?
//     console.log(oldWar.saxonAttack())
//     :
//     console.log(oldWar.vikingAttack())
// }
// console.log(oldWar.showStatus())