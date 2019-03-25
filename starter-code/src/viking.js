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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;

    if (!this.health) return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * Math.floor(this.saxonArmy.length))
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * Math.floor(this.vikingArmy.length))
    ];
    const message = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return message;
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * Math.floor(this.saxonArmy.length))
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * Math.floor(this.vikingArmy.length))
    ];
    const message = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
    return message;
  }

  showStatus() {
    if (!this.saxonArmy.length)
      return `Vikings have won the war of the century!`;
    if (!this.vikingArmy.length)
      return `Saxons have fought for their lives and survive another day...`;
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
