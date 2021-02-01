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
    return `Odin Owns You All!`;
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
  addViking({ name, health, strength }) {
    const newViking = new Viking(name, health, strength);
    this.vikingArmy.push(newViking);
  }

  addSaxon({ health, strength }) {
    const saxon = new Saxon(health, strength);
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViking = Math.floor(Math.random() * this.vikingArmy.length);
    let vAttResult = this.saxonArmy[saxon].receiveDamage(
      this.vikingArmy[randViking].strength
    );
    if (this.saxonArmy[saxon].health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    }
    return vAttResult;
  }

  saxonAttack() {
    let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViking = Math.floor(Math.random() * this.vikingArmy.length);
    let sAttResult = this.vikingArmy[randViking].receiveDamage(
      this.saxonArmy[randSaxon].strength
    );
    if (this.vikingArmy[randViking].health <= 0) {
      this.vikingArmy.splice(randViking, 1);
    }
    return sAttResult;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length == 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
