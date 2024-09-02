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
    this.damage = damage;

    this.health = this.health - this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }

  receiveDamage(damage) {
    this.damage = damage;

    this.health = this.health - this.damage;

    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  // same constructor, no need to add it again here
  // constructor(health, strength) {
  //   super(health, strength);
  // }

  // only adding here the method changed from Soldier class

  receiveDamage(damage) {
    this.damage = damage;

    this.health = this.health - this.damage;

    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    // 0 arguments received
    this.vikingArmy = []; // empty array assigned to property
    this.saxonArmy = []; // empty array assigned to property
  }

  addViking(viking) {
    this.vikingArmy.push(viking); // adds viking to the army
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon); // adds saxon to the army
  }

  vikingAttack() {
    // select random viking from the array -- general formula applied
    let randomViking =
      this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
    // select random saxon
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

    // 'should return result of calling receiveDamage() of a Saxon with the strength of a Viking'
    // viking attacks saxon causing damage equeal to its strength
    let resultOfTheVikingAttack = randomSaxon.receiveDamage(
      randomViking.strength
    );

    // if saxon's health goes below 0 the saxon is removed from the array/army
    if (randomSaxon.health <= 0) {
      let randomSaxonIndex = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return resultOfTheVikingAttack;
  }

  saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

    // 'should return result of calling receiveDamage() of a Viking with the strength of a Saxon'
    // saxon attacks viking causing damage equeal to its strength
    let resultOfTheSaxonAttack = randomViking.receiveDamage(
      randomSaxon.strength
    );

    // if viking's health goes below 0 the saxon is removed from the array/army
    if (randomViking.health <= 0) {
      let randomVikingIndex = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return resultOfTheSaxonAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
