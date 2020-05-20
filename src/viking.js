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
    super.receiveDamage(damage);
    return this.health > 0 ?
      `${this.name} has received ${damage} points of damage` :
      `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ?
      `A Saxon has received ${damage} points of damage` :
      `A Saxon has died in combat`;
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
    const saxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = Math.floor(Math.random() * this.vikingArmy.length);
    const attack = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].attack());
    const isDeadSaxon = this.saxonArmy[saxon].health <= 0;

    if (isDeadSaxon) {
      this.saxonArmy.splice(saxon);
    }

    return attack;
  }

  saxonAttack() {
    const saxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = Math.floor(Math.random() * this.vikingArmy.length);
    const attack = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].attack());
    const isDeadViking = this.vikingArmy[viking].health <= 0;

    if (isDeadViking) {
      this.vikingArmy.splice(viking);
    }

    return attack;
  }

  showStatus() {
    if (this.vikingArmy.length && this.saxonArmy.length) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
    if (this.vikingArmy.length) {
      return 'Vikings have won the war of the century!';
    }
    if (this.saxonArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    }
  }
}