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
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
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
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  }
  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  }
  vikingAttack() {
    let randomSaxonIndex = Math.floor(
      Math.random() * this.saxonArmy.length
    ); /* create a random index of a soldier*/
    let randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    ); /*create a random index of a viking */

    let saxonSoldier =
      this.saxonArmy[
        randomSaxonIndex
      ]; /*get to the random saxon soldier from the saxon array*/
    let vikingSoldier =
      this.vikingArmy[
        randomVikingIndex
      ]; /* get the random saxon viking from the viking army */

    let saxonDamage = saxonSoldier.receiveDamage(vikingSoldier.strength);

    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return saxonDamage;
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(
      Math.random() * this.saxonArmy.length
    ); /* create a random index of a soldier*/
    let randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    ); /*create a random index of a viking */

    let saxonSoldier =
      this.saxonArmy[
        randomSaxonIndex
      ]; /*get to the random saxon soldier from the saxon array*/
    let vikingSoldier =
      this.vikingArmy[
        randomVikingIndex
      ]; /* get the random saxon viking from the viking army */

    let vikingDamage = vikingSoldier.receiveDamage(saxonSoldier.strength);

    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return vikingDamage;
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length == 0) {
      return 'Vikings have won the war of the century!';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
