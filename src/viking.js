// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    console.log(Soldier.health);
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
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    if (this.health === 0) return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  attact() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    if (this.health === 0) return `A Saxon has died in combat`;
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
    const randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy)
    ];
    const randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy)
    ];
    let saxonReturn = randomSaxon.receiveDamage(randomViking.strength);
    randomSaxon.health = randomSaxon.health - randomViking.strength;
    if (randomSaxon.health === 0) this.saxonArmy.splice(0, 1);
    return saxonReturn;
  }

  saxonAttack() {
    const randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy)
    ];
    const randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy)
    ];
    let vikingReturn = randomViking.receiveDamage(randomSaxon.strength);

    return vikingReturn;
  }
}
