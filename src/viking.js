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

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name

  }
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage
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

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack() {
    //select a random dude from the armee by getting a random index
    let saxonindex = (Math.floor(Math.random() * this.saxonArmy.length))
    //to get the actuall property we can get a new variable for the fighter at the random index
    let saxonFighter = this.saxonArmy[saxonindex]
    let vikingindex = (Math.floor(Math.random() * this.vikingArmy.length))
    let vikingFigther = this.vikingArmy[vikingindex]
    //because we want to return the battle result after we found out who was wounded
    //we have to make a variable so we can return it later
    //the if satement will not allow us to return the statement earlier or later so we return 
    //thus we need a new variable that we can return later
    let fight = saxonFighter.receiveDamage(vikingFigther.attack())
    if (saxonFighter.health < 0) {
      this.saxonArmy.splice(saxonindex)
    }
    return fight
  }


  saxonAttack() {
    let saxonindex2 = (Math.floor(Math.random() * this.saxonArmy.length))
    let saxonFighter2 = this.saxonArmy[saxonindex2]
    let vikingindex2 = (Math.floor(Math.random() * this.vikingArmy.length))
    let vikingFigther2 = this.vikingArmy[vikingindex2]
    let fight = vikingFigther2.receiveDamage(saxonFighter2.attack())
    if (vikingFigther2.health <= 0) {
      this.vikingArmy.splice(vikingindex2)
    }
    return fight
  }

  showStatus() {
    if (this.vikingArmy.length > this.saxonArmy) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
