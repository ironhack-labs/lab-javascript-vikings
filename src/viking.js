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
    super(health, strength); //invoke constructor of parent class
    this.name = name;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // NOTES to myself: dice example in the lessons. Math.floor() to take the lower number and .length because it can be any element of the saxonArmy-array...and not +1 like in the example, because 0 can also be a index.

    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    //same here.


    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    // the random Saxon/ Viking needs to be put out of the army-array

    randomSaxon.receiveDamage(randomViking.strength);

    // a randomSaxon receives damage by a randomViking and it is equal its strength

    if (randomSaxons.health >= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    // if the randomSaxon is dead, it needs to be taken away from the saxonArmy. Therefore I use .splice() and I start at the randomSaxonIndex.

  }

  saxonAttack() {}
  showStatus() {}
}
