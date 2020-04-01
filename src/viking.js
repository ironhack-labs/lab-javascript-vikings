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
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  // because Saxon has exact properties as Soldier -> no need for constructor(){} or super();

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let diceViking = Math.floor(Math.random(this.vikingArmy.length));
    let diceSaxon = Math.floor(Math.random(this.saxonArmy.length));

    let randomViking = this.vikingArmy[diceViking];
    let randomSaxon = this.saxonArmy[diceSaxon];

    let saxonTest = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.pop(randomSaxon);
    }

    return saxonTest;
  }

  saxonAttack() {
    let diceViking = Math.floor(Math.random(this.vikingArmy.length));
    let diceSaxon = Math.floor(Math.random(this.saxonArmy.length));

    let randomViking = this.vikingArmy[diceViking];
    let randomSaxon = this.saxonArmy[diceSaxon];

    let vikingTest = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.pop(randomViking);
    }

    return vikingTest;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.saxonArmy.length == 1 && this.vikingArmy.length == 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
