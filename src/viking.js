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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomVikingIndex];
    const saxon = this.saxonArmy[randomSaxonIndex];
    const result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomVikingIndex];
    const saxon = this.saxonArmy[randomSaxonIndex];
    const result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  // BONUS
  // This could be used to refactor vikingAttack and saxonAttack
  // attack(attackingArmy, defendingArmy, attackerIndex, defenderIndex) {
  //   const attacker = attackingArmy[attackerIndex];
  //   const defender = defendingArmy[defenderIndex];
  //
  //   const result = defender.receiveDamage(attacker.strength);
  //
  //   if (defender.health <= 0) {
  //     defendingArmy.splice(defenderIndex, 1);
  //   }
  //
  //   return result;
  // }

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
