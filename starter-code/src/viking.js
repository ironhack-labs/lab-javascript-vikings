// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health,strength)
    this.name = name;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
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
  constructor(health, strength) {
    super(health,strength)
  }

  attack() {
    super.attack;
    return this.strength;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    let previousSaxonArmy = [...this.saxonArmy];
    this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
    this.saxonArmy = this.saxonArmy.filter((eachSaxon) => {
      return eachSaxon.health > 0
    });
    if (previousSaxonArmy !== this.saxonArmy) {
      return `A Saxon has died in combat`
    }
  }
  

  saxonAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    randomViking.health -= randomSaxon.strength;
    this.vikingArmy = this.vikingArmy.filter((eachViking) => {
      return eachViking.health > 0
    });
    return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
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