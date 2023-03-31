// ------------ Iteration 1: Soldier ------------
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

// ------------ Iteration 2: Viking ------------
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// ------------ Iteration 3: Saxon ------------
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    // super allows Saxon to inherit from the receiveDamage method in Soldier and also to add the new messages
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// ------------ Iteration 4: War ------------
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
    // Picks a random saxon from the saxonArmy array
    let defendingSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // Picks a random viking from the vikingArmy array
    let attackingViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // The saxon receives damage equal to the strength of the viking
    // Not overriding the Soldier.receiveDamage method so can just call it without super
    let resultOfVikingAttack = defendingSaxon.receiveDamage(
      attackingViking.strength
    );

    // If the saxon dies, remove it from the saxonArmy array
    if (defendingSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(defendingSaxon), 1);
    }

    return resultOfVikingAttack;
  }

  saxonAttack() {
    let defendingViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackingSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let resultOfSaxonAttack = defendingViking.receiveDamage(
      attackingSaxon.strength
    );

    if (defendingViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(defendingViking), 1);
    }

    return resultOfSaxonAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
