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
    return;
  }
}

// Viking
class Viking extends Solder {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    const alive = `${this.name} has received ${damage} points of damage.`;
    const dead = `${this.name} has died in act of combat.`;
    return this.health > 0 ? alive : dead;
  }
  battleCry() {
    return `Odin owns you all!`;
  }
}

// Saxon
class Saxon extends Solider {
  receiveDamage(damage) {
    this.health -= damage;
    const alive = `A Saxon has received ${damage} points of damage.`;
    const dead = `A Saxon has died in combat.`;
    return this.health > 0 ? alive : dead;
  }
}

// War
class War {
  addViking(viking) {}

  addSaxon(saxon) {}

  vikingAttack() {}

  saxonAttack() {}

  showStatus() {}
}
