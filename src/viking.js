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

    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
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
    const targetIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const target = this.saxonArmy[targetIndex];
    const attacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const attackResult = target.receiveDamage(attacker.strength);

    if (target.health <= 0) {
      this.saxonArmy.splice(targetIndex, 1);
    }

    return attackResult;
  }

  saxonAttack() {
    const targetIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const target = this.vikingArmy[targetIndex];
    const attacker =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const attackResult = target.receiveDamage(attacker.strength);

    if (target.health <= 0) {
      this.vikingArmy.splice(targetIndex, 1);
    }

    return attackResult;
  }

  makeAttack(attacker) {
    let attackingArmy;
    let defendingArmy;

    if (attacker instanceof Viking) {
      attackingArmy = this.vikingArmy;
      defendingArmy = this.saxonArmy;
    } else {
      attackingArmy = this.saxonArmy;
      defendingArmy = this.vikingArmy;
    }

    const targetSoldierIndex = Math.floor(Math.random() * defendingArmy.length);
    const targetSoldier = defendingArmy[targetSoldierIndex];
    const attackingSoldier =
      attackingArmy[Math.floor(Math.random() * attackingArmy.length)];

    const attackResult = targetSoldier.receiveDamage(attackingSoldier.strength);

    if (targetSoldier.health <= 0) {
      defendingArmy.splice(targetSoldierIndex, 1);
    }

    return attackResult;
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
