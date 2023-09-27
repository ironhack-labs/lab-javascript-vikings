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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    return `A Saxon has died in combat`;
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

  selectRandomFromArmy(army) {
    if (army.length === 0) {
      throw Error("No army");
    }

    return army[Math.floor(Math.random() * army.length)];
  }

  armyAttack(attackers, defenders) {
    let attacker = this.selectRandomFromArmy(attackers);
    let defender = this.selectRandomFromArmy(defenders);
    let result = defender.receiveDamage(attacker.strength);

    for (let i = 0; i < defenders.length; i++) {
      if (defenders[i].health <= 0) {
        defenders.splice(i, 1);
        break;
      }
    }

    return result;
  }

  vikingAttack() {
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
