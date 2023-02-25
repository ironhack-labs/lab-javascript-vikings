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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor(vikingArmy = [], saxonArmy = []) {
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let random = Math.floor(Math.random() * this.saxonArmy.length);
    let result = this.saxonArmy[random].receiveDamage(
      this.vikingArmy[random].strength
    );
    if (this.saxonArmy[random].health <= 0) {
      this.saxonArmy.splice(random, 1);
    }

    return result;
  }
  saxonAttack() {
    let random = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.vikingArmy[random].receiveDamage(
      this.saxonArmy[random].strength
    );
    if (this.vikingArmy[random].health <= 0) {
      this.vikingArmy.splice(random, 1);
    }
    return result;
  }

  randomAttack(attacker, attacked) {
    let random = Math.floor(Math.random() * attacked.length);
    let result = attacked[random].receiveDamage(attacker[random].strength);
    if (attacked[random].health <= 0) {
      attacked.splice(random, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
