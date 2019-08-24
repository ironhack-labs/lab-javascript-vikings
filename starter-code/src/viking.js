// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;

  }

  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }


}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier)
  }

  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier)
  }

  vikingAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    
    let vikingAtackResult = randomSaxon.receiveDamage(randomViking.attack())

    this.saxonArmy = this.saxonArmy.filter((saxonSoldier) => saxonSoldier.health > 0)

    return vikingAtackResult
  }

  saxonAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    
    let saxonAtackResult = randomViking.receiveDamage(randomSaxon.attack())

    this.vikingArmy = this.vikingArmy.filter((vikingSoldier) => vikingSoldier.health > 0)

    return saxonAtackResult
  }

  showStatus() {
    return (this.saxonArmy.length <= 0 && this.vikingArmy.length > 0) ? `Vikings have won the war of the century!` :
    (this.vikingArmy.length <= 0 && this.saxonArmy.length > 0) ? `Saxons have fought for their lives and survive another day...` :
    (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) ? `Vikings and Saxons are still in the thick of battle.` :
    `The world is safe now`
  }


}
