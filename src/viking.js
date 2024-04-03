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
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
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
    // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    // const saxon = this.saxonArmy[saxonIndex];
    // const viking = this.vikingArmy[vikingIndex];

    // const response = saxon.receiveDamage(viking.strength);
    // if (response === "A Saxon has died in combat") {
    //   this.saxonArmy.splice(saxonIndex, 1);
    // }
    // return response;

    return this.genericAttack("viking");
  }

  saxonAttack() {
    // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    // const saxon = this.saxonArmy[saxonIndex];
    // const viking = this.vikingArmy[vikingIndex];

    // const response = viking.receiveDamage(saxon.strength);
    // if (response.includes("died")) {
    //   this.vikingArmy.splice(vikingIndex, 1);
    // }
    // return response;

    return this.genericAttack("saxon");
  }

  genericAttack(who) {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxon = this.saxonArmy[saxonIndex];
    const viking = this.vikingArmy[vikingIndex];
    let response;

    if (who === "viking") {
      response = saxon.receiveDamage(viking.strength);
      if (response === "A Saxon has died in combat") {
        this.saxonArmy.splice(saxonIndex, 1);
      }
    } else if (who === "saxon") {
      response = viking.receiveDamage(saxon.strength);
      if (response.includes("died")) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
    } else {
      throw new Error(
        "Invalid input, expected 'viking' or 'saxon' as argument."
      );
    }

    return response;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
