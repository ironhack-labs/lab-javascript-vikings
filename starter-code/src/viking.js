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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
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

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
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
    var randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      function removeElement(arrayName, arrayElement) {
        for (var i = 0; i < arrayName.length; i++) {
          if (arrayName[i] == arrayElement) arrayName.splice(i, 1);
        }
      }
      removeElement(this.saxonArmy, randomSaxon);
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${randomViking.strength} points of damage`;
    }
  }

  saxonAttack() {
    var randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      function removeElement(arrayName, arrayElement) {
        for (var i = 0; i < arrayName.length; i++) {
          if (arrayName[i] == arrayElement) arrayName.splice(i, 1);
        }
      }
      removeElement(this.vikingArmy, randomViking);
      return `${randomViking.name} has died in act of combat`;
    } else {
      return `${randomViking.name} has received ${
        randomSaxon.strength
      } points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length == 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1;
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
