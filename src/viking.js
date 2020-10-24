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
  attack() {
    return this.strength;
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

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    //to get a random Viking to attack
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    //to get a random Index form the saxonArmy array for later .splice use
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    //to get a random saxon to receive the attack
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    //the attack
    let battleResult = randomSaxon.receiveDamage(randomViking.strength);

    //to see if the saxon is dead or not and if yes, remove them from the army
    if (randomSaxon.health === 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return battleResult;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let randomViking = this.vikingArmy[randomVikingIndex];

    let battleResult = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health === 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return battleResult;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
