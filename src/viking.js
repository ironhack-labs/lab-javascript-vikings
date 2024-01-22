// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
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
  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
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
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  vikingAttack() {
    this.randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.vikingDmg = this.vikingArmy[this.randomIndex].strength;
    this.saxonHealth = this.saxonArmy[this.randomIndex].health;
    this.randomSax = this.saxonArmy[this.randomIndex];

    this.randomSax.health -= this.vikingDmg;

    if (this.randomSax.health < 0) {
      this.saxonArmy.splice(this.randomSax, 1);
    }

    console.log(this.randomSax);
    return this.randomSax.receiveDamage(this.vikingDmg);
  }
  saxonAttack() {
    this.randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxDmg = this.saxonArmy[this.randomIndex].strength;
    this.vikingHealth = this.vikingArmy[this.randomIndex].health;
    this.randomViking = this.vikingArmy[this.randomIndex];

    this.randomViking.health -= this.saxDmg;
    if (this.randomViking.health <= 0) {
      this.vikingArmy.splice(this.randomViking);
    }
    return this.randomViking.receiveDamage(this.saxDmg);
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
