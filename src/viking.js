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
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
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
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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
    let result = this.soldiersAttack("viking");
    return result;
  }
  saxonAttack() {
    return this.soldiersAttack("saxon");
  }

  soldiersAttack(side) {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let viking = this.vikingArmy[vikingIndex];
    let saxon = this.saxonArmy[saxonIndex];
    let resultAttack = "";
    if (side == "viking") {
      resultAttack = saxon.receiveDamage(viking.attack());
      if (saxon.health <= 0) {
        this.saxonArmy = this.saxonArmy.filter((soldiers) => soldiers != saxon);
      }
    } else {
      resultAttack = viking.receiveDamage(saxon.attack());
      if (viking.health <= 0) {
        this.vikingArmy = this.vikingArmy.filter(
          (soldiers) => soldiers != viking
        );
      }
    }
    return resultAttack;
  }

  showStatus() {
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
