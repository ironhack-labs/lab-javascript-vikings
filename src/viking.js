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

  //if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
  //if the Viking dies, it should return "NAME has died in act of combat"
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
  constructor(health, strength) {
    super(health, strength);
  }

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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  /*   vikingAttack() method
  A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.
  
  should be a function
  should receive 0 arguments
  should make a Saxon receiveDamage() equal to the strength of a Viking
  should remove dead Saxons from the army
  should return result of calling receiveDamage() of a Saxon with the strength of a Viking */
  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const report = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    if (report === `A Saxon has died in combat`) {
      this.saxonArmy.splice(randomSaxon, 1);
      return report;
    } else {
      return report;
    }
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const report = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    if (
      report ===
      `${this.vikingArmy[randomViking].name} has died in act of combat`
    ) {
      this.vikingArmy.splice(randomViking, 1);
      return report;
    } else {
      return report;
    }
  }

  ///should be a function
  /* hould receive 0 arguments
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle." */
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
