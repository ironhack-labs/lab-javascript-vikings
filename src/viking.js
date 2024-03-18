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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
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

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }

  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  Attack(attackArmy, attacker, defendArmy, defender) {
    const result = defendArmy[defender].receiveDamage(
      attackArmy[attacker].strength
    );
    if (defendArmy[defender].health <= 0) {
      defendArmy.splice(defender, 1);
    }
    return result;
  }

  vikingAttack() {
    const randomSaxon = Math.round(Math.random() * (this.saxonArmy.length - 1));
    const randomViking = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    );

    const result = this.Attack(
      this.vikingArmy,
      randomViking,
      this.saxonArmy,
      randomSaxon
    );

    return result;
  }

  saxonAttack() {
    const randomSaxon = Math.round(Math.random() * (this.saxonArmy.length - 1));
    const randomViking = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    );

    const result = this.Attack(
      this.saxonArmy,
      randomSaxon,
      this.vikingArmy,
      randomViking
    );

    return result;
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
