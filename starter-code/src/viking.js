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
    let life =
      this.health > 0
        ? `${this.name} has received ${damage} points of damage`
        : `${this.name} has died in act of combat`;
    return life;
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
    super.receiveDamage(damage);
    let life =
      this.health > 0
        ? `A Saxon has received ${damage} points of damage`
        : "A Saxon has died in combat";
    return life;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackNow = saxon.receiveDamage(viking.attack());
    if (saxon.health <= 0)
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    return attackNow;
  }
  saxonAttack() {
    const saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackNow = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0)
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    return attackNow;
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
