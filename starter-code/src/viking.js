// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

//Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = "Harald";
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
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strenght) {
    super(health, strenght);
    this.health = health;
    this.strength = strenght;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let choosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenViking = Math.floor(Math.random() * this.vikingArmy.length);
    let resultAttack = this.saxonArmy[choosenSaxon].receiveDamage(
      this.vikingArmy[choosenViking].attack()
    );
    if (this.saxonArmy[choosenSaxon].health <= 0) {
      this.saxonArmy.splice(choosenSaxon, 1);
    }
    return resultAttack;
  }

  saxonAttack() {
    let choosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenViking = Math.floor(Math.random() * this.vikingArmy.length);
    let resultAttack = this.vikingArmy[choosenViking].receiveDamage(
      this.saxonArmy[choosenSaxon].attack()
    );
    if (this.vikingArmy[choosenViking].health <= 0) {
      this.vikingArmy.splice(choosenViking, 1);
    }
    return resultAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
