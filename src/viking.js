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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    let result = randomSaxon.receiveDamage(randomViking.strength);

    for (let i = 0; i < this.saxonArmy.length; i++) {

      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
      }

    }
    return result;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = randomViking.receiveDamage(randomSaxon.strength);

    for (let i = 0; i < this.vikingArmy.length; i++) {

      if (this.vikingArmy[i].health <= 0) {
        this.vikingArmy.splice(i, 1);
      }

    }
    return result;
  }

  //     A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

  // - should be a function
  // - should receive **0 arguments*
  // - should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
  // - should remove dead Saxons from the army doubt
  // - should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`

  // #### `saxonAttack()` method

  // The `Saxon` version of `vikingAttack()`. A `Viking` receives damage equal to the `strength` of a `Saxon`.

  // - should be a function
  // - should receive **0 arguments**
  // - should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
  // - should remove dead Vikings from the army
  // - should return **result of calling `receiveDamage()` of a `Viking`** with the `strength` of a `Saxon`

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

  //Returns the current status of the `War` based on the size of the armies.
  //- should be a function
  //- should receive **0 arguments**
  //- **if the `Saxon` array is empty**, should return **_"Vikings have won the war of the century!"_**
  //- **if the `Viking` array is empty**, should return **_"Saxons have fought for their lives and survived another day..."_**
  //- **if there are at least 1 `Viking` and 1 `Saxon`**, should return **_"Vikings and Saxons are still in the thick of battle."_**
}
