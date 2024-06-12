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
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
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
    let randSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let result = randSaxon.receiveDamage(randViking.strength);

    if (randSaxon.health <= 0) {
      this.saxonArmy.splice(randSaxon, 1);
    }
    return result;
  }

  saxonAttack() {
    let randSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randViking =
      this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    let result = randViking.receiveDamage(randSaxon.strength);

    if (randViking.health <= 0) {
      this.vikingArmy.splice(randViking, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
