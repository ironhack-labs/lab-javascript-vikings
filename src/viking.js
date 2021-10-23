
// Soldier
class Soldier {
  constructor(health, strength){
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
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage

    let messageWar = (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    return messageWar
  }

  battleCry() {
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage

    let messageWar = (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    return messageWar
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking (Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon (Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack () {
    return this.attack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy)
  }

  attack(armyAttacker, armyReceiver) {
    let attacker = armyAttacker[Math.floor(Math.random()*armyAttacker.length)]
    let receiver = armyReceiver[Math.floor(Math.random()*armyReceiver.length)]
    let messageWar = receiver.receiveDamage(attacker.strength)

    if (receiver.health <= 0 && receiver instanceof Saxon) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(receiver), 1)
    } else if (receiver.health <= 0 && receiver instanceof Viking) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(receiver), 1)
    }

    return messageWar
  }

  showStatus () { 
    if (this.saxonArmy.length === 0 ) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0 ) {
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
