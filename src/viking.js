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
    } else if (this.health <= 0) {
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
    } else if (this.health <= 0) {
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let vikingStrength = 0;

    for (let i = 0; i < this.saxonArmy.length; i++) {
      for (let j = 0; j < this.vikingArmy.length; j++) {
        vikingStrength = this.saxonArmy[i].receiveDamage(
          this.vikingArmy[j].strength
        );
      }
    }

    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
        let index = this.saxonArmy.indexOf(this.saxonArmy[i]);
        this.saxonArmy.splice(index, 1);
      }
    }
    return vikingStrength;
  }
  saxonAttack() {
    let saxonStrength = 0;

    for (let i = 0; i < this.vikingArmy.length; i++) {
      for (let j = 0; j < this.saxonArmy.length; j++) {
        saxonStrength = this.vikingArmy[i].receiveDamage(
          this.saxonArmy[j].strength
        );
      }
    }

    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health <= 0) {
        let index = this.vikingArmy.indexOf(this.vikingArmy[i]);
        this.vikingArmy.splice(index, 1);
      }
    }
    return saxonStrength;
  }
  showStatus() {}
}
