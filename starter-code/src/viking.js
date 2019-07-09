// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
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
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let saxonArmy = this.saxonArmy
    let randomSaxonArmyIndex = Math.floor(Math.random() * saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonArmyIndex];

    let vikingArmy = this.vikingArmy
    let randomVikingArmyIndex = Math.floor(Math.random() * vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingArmyIndex];

    let damageSaxon = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      saxonArmy.splice(randomSaxonArmyIndex, 1)
    }

    return damageSaxon

  }

  saxonAttack() {
    let vikingArmy = this.vikingArmy
    let randomVikingArmyIndex = Math.floor(Math.random() * vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingArmyIndex];

    let saxonArmy = this.saxonArmy
    let randomSaxonArmyIndex = Math.floor(Math.random() * saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonArmyIndex];

    let damageViking = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      vikingArmy.splice(randomVikingArmyIndex, 1)
    }

    return damageViking
  }

  showStatus() {
    let saxonArmy = this.saxonArmy;
    let vikingArmy = this.vikingArmy;

    if (saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    }

    else if (vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    }

    else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

} 