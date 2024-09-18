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
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return "A Saxon has died in combat";
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
    return this.genericAttack(this.saxonArmy, this.vikingArmy);
  }
  saxonAttack() {
    return this.genericAttack(this.vikingArmy, this.saxonArmy);
  }

  //Iteration 5
  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
    else {
      if (this.saxonArmy.length === 0)
        return "Vikings have won the war of the century!";
      if (this.vikingArmy.length === 0)
        return "Saxons have fought for their lives and survived another day...";
    }
  }
  //refactoring
  genericAttack(attackingArmy, attackedArmy) {
    const attackingSoldier =
      attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
    const attackedSoldier =
      attackedArmy[parseInt(Math.random() * attackedArmy.length)];
    const attack = attackedSoldier.receiveDamage(attackingSoldier.attack());
    if (attackedSoldier.health <= 0) {
      const index = attackedArmy.indexOf(attackedSoldier);
      attackedArmy.splice(index, 1);
    }
    return attack;
  }
}
