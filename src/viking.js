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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    if ((this.health -= damage) > 0) {
      return this.name + ' has received ' + damage + ' points of damage'
    } else {
      return this.name + ' has died in act of combat'
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    if ((this.health -= damage) > 0) {
      return 'A Saxon has received ' + damage + ' points of damage'
    } else {
      return 'A Saxon has died in combat'
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
    this.vikingArmy.push(viking)
  }
  
  getRandomViking() {
    return this.vikingArmy[Math.floor(Math.random() *  this.saxonArmy.length)]
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  getRandomSaxon() {
    return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  }

  fight(fighter, rival){
    let rivalArmy = rival.name ? this.vikingArmy : this.saxonArmy 

    let fightResult = rival.receiveDamage(fighter.strength)

    for(let i = 0; i < rivalArmy.length; i++) {
      if(rivalArmy[i].health <= 0) {
        rivalArmy.splice(i, 1)
      }
    }

    return fightResult
  }

  vikingAttack() {
    let saxon = this.getRandomSaxon()
    let viking = this.getRandomViking()

    return this.fight(viking, saxon)
  }
  
  saxonAttack() {
    let saxon = this.getRandomSaxon()
    let viking = this.getRandomViking()
    
    return this.fight(saxon, viking)
  }
  
  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!'
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
