// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// // Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg)
    this.name = nameArg;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
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
    super(healthArg, strengthArg)
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// // War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    let numViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let numSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    numSaxon.receiveDamage(numViking.strength)
    if (numSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(numSaxon), 1);
      return `A Saxon has died in combat`
    }
  }
  saxonAttack() {
    let numViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let numSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    numViking.receiveDamage(numSaxon.strength)
    if (numViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(numViking), 1);
    } else {
      return `${numViking.name} has received ${numSaxon.strength} points of damage`
    }
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if(this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
