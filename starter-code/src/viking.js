// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
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
    super(healthArg, strengthArg);
    this.name = name
  }
  attack () {
    super.attack()
    return this.strength
  }
  receiveDamage (damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
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
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }
  attack () {
    super.attack()
    return this.strength
  }
  receiveDamage (damage) {
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
    let vikingAtt = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxonDam = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let a = saxonDam.receiveDamage(vikingAtt.strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return a
  }
  saxonAttack() {
    let saxonAtt = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingDam = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let a = vikingDam.receiveDamage(saxonAtt.strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return a
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
