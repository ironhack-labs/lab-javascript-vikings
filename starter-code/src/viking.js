// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
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
  constructor(name, healthArg, strengthArg) {
    super(healthArg,strengthArg);
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
    
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg,strengthArg);
  } 
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
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

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  
  vikingAttack() {
    const attackViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const saxonReciveDamage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    
    const result = saxonReciveDamage.receiveDamage(attackViking.strength)
    this.saxonArmy = this.saxonArmy.filter((sax) => sax.health > 0);

    return result
    
  }

  saxonAttack() {
    const attackSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const vikingReciveDamage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    
    const result = vikingReciveDamage.receiveDamage(attackSaxon.strength)
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);

    return result
  }

  showStatus() {
    if (this.saxonArmy < 1) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy < 1 ) { 
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
