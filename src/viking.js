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
  battleCry() {
    return 'Odin Owns You All!';
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(saxon) {
    this.vikingArmy.push(saxon);
  }
  addSaxon(viking) {
    this.saxonArmy.push(viking);
  }
  batleAttack(attacker, defendant) {
    let inddefendant = Math.floor(Math.random() * this[defendant].length);
    let indattacker = Math.floor(Math.random() * this[attacker].length);
    let randdefendant = this[defendant][inddefendant];
    let randattacker = this[attacker][indattacker];
    let result = randdefendant.receiveDamage(randattacker.strength);
    if (randdefendant.health <= 0) {
      this[defendant].splice(inddefendant, 1);
    }
    return result;
  }
  vikingAttack() {
    return this.batleAttack('vikingArmy', 'saxonArmy');
  }
  saxonAttack() {
    return this.batleAttack('saxonArmy', 'vikingArmy');
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
    if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
