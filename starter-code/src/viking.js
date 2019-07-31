// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }

  attack() {
    return this.strength;
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

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length),
      randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let returnValue = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );

    if (this.saxonArmy[randomSaxon].health < 1)
      this.saxonArmy.splice(randomSaxon, 1);

    return returnValue;
  }

  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length),
      randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let returnValue = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );

    if (this.vikingArmy[randomViking].health < 1)
      this.vikingArmy.splice(randomViking, 1);

    return returnValue;
  }

  showStatus() {
    if (this.saxonArmy.length < 1)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length < 1)
      return "Saxons have fought for their lives and survive another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
