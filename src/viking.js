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
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    let randomSaxonRoll = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingRoll = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonRoll];
    let randomViking = this.vikingArmy[randomVikingRoll];
    if (randomSaxon.health - randomViking.strength <= 0) {
      this.saxonArmy.splice(randomSaxonRoll, 1);
    }
    return randomSaxon.receiveDamage(randomViking.attack());
  }
  saxonAttack() {
    let randomSaxonRoll = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingRoll = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonRoll];
    let randomViking = this.vikingArmy[randomVikingRoll];
    if (randomViking.health - randomSaxon.strength <= 0) {
      this.vikingArmy.splice(randomVikingRoll, 1);
    }
    return randomViking.receiveDamage(randomSaxon.attack());
  }

  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
