// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function () {
      return this.strength
    }
    this.receiveDamage = function (damage) {
      this.health -= damage
    }
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    this.receiveDamage = function (damage) {
      this.health -= damage
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
      } else {
        return `${this.name} has died in act of combat`
      }

    }
    this.battleCry = function () {
      return `Odin Owns You All!`
    }
  }

}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength)
    this.receiveDamage = function (damage) {
      this.health -= damage
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      } else {
        return `A Saxon has died in combat`
      }

    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []

    this.addViking = function (viking) {
      this.vikingArmy.push(viking)
    }
    this.addSaxon = function (saxon) {
      this.saxonArmy.push(saxon)
    }

    this.vikingAttack = function () {
      //   should make a Saxon receiveDamage() equal to the strength of a Viking
      let randSaxon = getRandomInt(0, this.saxonArmy.length)
      let randViking = getRandomInt(0, this.vikingArmy.length)

      this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength)

      // let result = this.saxonArmy[randSaxon].receiveDamage
      let result = randSaxon.receiveDamage

      //   should remove dead saxons from the army
      if (this.saxonArmy[randSaxon].health <= 0) {
        this.saxonArmy.splice(randSaxon, 1)
      }

      //   should return result of calling receiveDamage() of a Saxon with the strength of a Viking
      return result
    }

    this.saxonAttack = function () {
      let randSaxon = getRandomInt(0, this.saxonArmy.length)
      let randViking = getRandomInt(0, this.vikingArmy.length)

      this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength)

      let result = this.vikingArmy[randViking].receiveDamage

      //   should remove dead viking from the army
      if (this.vikingArmy[randViking].health <= 0) {
        this.vikingArmy.splice(randViking, 1)
      }
      //   should return result of calling receiveDamage() of a Saxon with the strength of a Viking

      return result


    }
    this.showStatus = function () {
      if (this.saxonArmy.length == 0) {
        return `Vikings have won the war of the century!`
      } else if (this.vikingArmy.length == 0) {
        return `Saxons have fought for their lives and survive another day...`
      } else {
        return `Vikings and Saxons are still in the thick of battle.`
      }
    }

  }
}