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
      : "A Saxon has died in combat";
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const chosenViking = choose(this.vikingArmy);
    const chosenSaxon = choose(this.saxonArmy);
    const status = chosenSaxon.receiveDamage(chosenViking.attack());
    if (chosenSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon), 1);
    }
    return status;
  }

  saxonAttack() {
    const chosenViking = choose(this.vikingArmy);
    const chosenSaxon = choose(this.saxonArmy);
    const status = chosenViking.receiveDamage(chosenSaxon.attack());
    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking), 1);
    }
    return status;
  }

  showStatus() {
    console.log("Saxon", this.saxonArmy);
    console.log("Vikin", this.vikingArmy);
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

function choose(n) {
  return n[Math.floor(Math.random() * n.length)];
}
