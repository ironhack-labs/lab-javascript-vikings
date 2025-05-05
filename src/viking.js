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
    // this.health = this.health - damage;
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
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }

  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  attack(attackerArmy, defenderArmy) {
    const attacker = attackerArmy[attackerArmy.length - 1];
    const defender = defenderArmy[defenderArmy.length - 1];

    const result = defender.receiveDamage(attacker.strength);

    if (defender.health <= 0) {
      defenderArmy.pop();
    }

    return result;
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy)

  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy)
  }

  showStatus() {
    return this.saxonArmy.length === 0
      ? "Vikings have won the war of the century!"
      : this.vikingArmy.length === 0
      ? "Saxons have fought for their lives and survived another day..."
      : "Vikings and Saxons are still in the thick of battle.";
  }
}
