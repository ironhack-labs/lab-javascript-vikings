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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    let amountVikingArmy = this.vikingArmy.length;
    let randomIndexOfSelectedViking = Math.floor(
      Math.random() * amountVikingArmy
    );

    let amountSaxonArmy = this.saxonArmy.length;
    let randomIndexOfSelectedSaxon = Math.floor(
      Math.random() * amountSaxonArmy
    );
    
    let resultOfTheAttack = this.saxonArmy[
      randomIndexOfSelectedSaxon
    ].receiveDamage(this.vikingArmy[randomIndexOfSelectedViking].strength);

    if (this.saxonArmy[randomIndexOfSelectedSaxon].health <= 0) {
      this.saxonArmy.splice(randomIndexOfSelectedSaxon, 1);
    }

    return resultOfTheAttack;
  }
  saxonAttack() {
    let amountVikingArmy = this.vikingArmy.length;
    let randomIndexOfSelectedViking = Math.floor(
      Math.random() * amountVikingArmy
    );

    let amountSaxonArmy = this.saxonArmy.length;
    let randomIndexOfSelectedSaxon = Math.floor(
      Math.random() * amountSaxonArmy
    );

    let resultOfTheAttack = this.vikingArmy[
      randomIndexOfSelectedViking
    ].receiveDamage(this.saxonArmy[randomIndexOfSelectedSaxon].strength);
    if (this.vikingArmy[randomIndexOfSelectedViking].health <= 0) {
      this.vikingArmy.splice(randomIndexOfSelectedViking, 1);
    }
    return resultOfTheAttack;
  }
  showStatus() {
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}
