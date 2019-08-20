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
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
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
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const poorSaxon = this.saxonArmy[saxonIndex];
    const badViking = this.vikingArmy[vikingIndex];

    const damage = poorSaxon.receiveDamage(badViking.attack());

    //   = this.saxonArmy.indexOf(this.saxonArmy);
    if (poorSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return damage;
    //  poorSaxon.receiveDamage(badViking.strength);

    //  health - this.vikingArmy[badViking].strength;
  }
  saxonAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const badSaxon = this.saxonArmy[saxonIndex];
    const poorViking = this.vikingArmy[vikingIndex];

    const damage = poorViking.receiveDamage(badSaxon.attack());

    //   = this.saxonArmy.indexOf(this.saxonArmy);
    if (poorViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return damage;
    //  poorSaxon.receiveDamage(badViking.strength);

    //  health - this.vikingArmy[badViking].strength;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survive another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
}

/* showStatus() method
Returns the current status of the War based on the size of the armies.

should be a function
should receive 0 arguments
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle." */

/* should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking */
