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
    if (this.health >= 1) {
      return `${this.name} has received ${damage} points of damage`;
    }

    else {
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
    }

    else {
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
    let vikingIdx = Math.floor(Math.random()*this.vikingArmy.length);
    let saxonIdx = Math.floor(Math.random()*this.saxonArmy.length);
    let viking = this.vikingArmy[vikingIdx];
    let saxon = this.saxonArmy[saxonIdx];

    let result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIdx, 1);
    }

    return result;
  }

  saxonAttack() {
    let vikingIdx = Math.floor(Math.random()*this.vikingArmy.length);
    let saxonIdx = Math.floor(Math.random()*this.saxonArmy.length);
    let viking = this.vikingArmy[vikingIdx];
    let saxon = this.saxonArmy[saxonIdx];

    let result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIdx, 1);
    }

    return result;
  }

  /*
  // Bonus: refactoring attack methods into one method

  attack(attackerArmy, targetArmy) {
    let attackerIdx = Math.floor(Math.random()*attackerArmy.length);
    let targetIdx = Math.floor(Math.random()*targetArmy.length);

    let attacker = attackerArmy[attackerIdx];
    let target = targetArmy[targetIdx];

    let result = target.receiveDamage(attacker.strength);

    if (target.health <= 0) {
      targetArmy.splice(targetIdx, 1);
    }

    return result;
  }
  */

  showStatus() {
    if(!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if(!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }


}
