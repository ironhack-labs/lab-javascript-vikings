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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let battlingSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let battlingViking = Math.floor(Math.random() * this.vikingArmy.length);

    let vAttack = this.saxonArmy[battlingSaxon].receiveDamage(
      this.vikingArmy[battlingViking].attack()
    );

    if (this.saxonArmy[battlingSaxon].health <= 0) {
      this.saxonArmy.splice(battlingSaxon, 1);
    }

    return vAttack;
  }

  vikingAttack() {
    let battlingSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let battlingViking = Math.floor(Math.random() * this.vikingArmy.length);

    let vAttack = this.saxonArmy[battlingSaxon].receiveDamage(
      this.vikingArmy[battlingViking].attack()
    );

    if (this.saxonArmy[battlingSaxon].health <= 0) {
      this.saxonArmy.splice(battlingSaxon, 1);
    }

    return vAttack;
  }

  saxonAttack() {
    let battlingViking = Math.floor(Math.random() * this.vikingArmy.length);

    let battlingSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let sAttack = this.vikingArmy[battlingViking].receiveDamage(
      this.saxonArmy[battlingSaxon].attack()
    );

    if (this.vikingArmy[battlingViking].health <= 0) {
      this.vikingArmy.splice(battlingViking, 1);
    }

    return sAttack;
  }

  showStatus() {
    if (this.saxonArmy <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy <= 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
