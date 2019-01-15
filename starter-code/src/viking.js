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
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
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
      return "A Saxon has received " + damage + " points of damage";
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    var indexAttacker = Math.floor(Math.random() * this.vikingArmy.length);
    var attacker = this.vikingArmy[indexAttacker];
    // console.log(attacker);

    var indexDefender = Math.floor(Math.random() * this.saxonArmy.length);
    var defender = this.saxonArmy[indexDefender];
    // console.log(defender);

    var damage = attacker.attack();
    defender.receiveDamage(damage);

    if (defender.health <= 0) {
      this.saxonArmy.splice(indexDefender, 1);
      return "A Saxon has died in combat";
    }
  }
  saxonAttack() {
    var indexAttacker = Math.floor(Math.random() * this.saxonArmy.length);
    var attacker = this.saxonArmy[indexAttacker];
    // console.log(attacker);

    var indexDefender = Math.floor(Math.random() * this.vikingArmy.length);
    var defender = this.vikingArmy[indexDefender];
    // console.log(defender);

    var damage = attacker.attack();
    defender.receiveDamage(damage);

    if (defender.health <= 0) {
      this.vikingArmy.splice(indexDefender, 1);
      return defender.name + " has died in act of combat";
    } else {
      return defender.name + " has received " + damage + " points of damage";
    }
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
