// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    this.saxonArmy.pop();

    return saxon.receiveDamage(viking.strength);
  }

  saxonAttack() {
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let battle = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.pop();
    }

    return battle;
  }

  // Alternative to vikingAttack() and saxonAttack()

  //   let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  //   let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  //   attack(attacker) {
  //     if (attacker === saxon) {
  //         if (viking.health <= 0) {
  //             this.vikingArmy.pop()
  //         }
  //       return viking.receiveDamage(saxon.strength);
  //     } else if (attacker === viking) {
  //         if (saxon.health <= 0) {
  //             this.saxonArmy.pop()
  //         }
  //       return saxon.receiveDamage(viking.strength);
  //     }
  //   }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
