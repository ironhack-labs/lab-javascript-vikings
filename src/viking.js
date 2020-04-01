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
    //this.attck(this.vikingArmy, this.saxonArmy);
    const saxonAttacked = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const VikingAttacker = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const result = saxonAttacked.receiveDamage(VikingAttacker.strength);
    this.saxonArmy = this.saxonArmy.filter(x => x.health > 0);
    return result;
  }
  saxonAttack() {
    //this.attck(this.saxonArmy, this.vikingArmy);
    const vikingAttacked = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const saxonAttacker = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const result = vikingAttacked.receiveDamage(saxonAttacker.strength);
    this.vikingArmy = this.vikingArmy.filter(x => x.health > 0);
    return result;
  }
  //Refactoring
  armiesAttck(attackerArmy, attackedArmy) {
    const attacked = this.attackedArmy[
      Math.floor(Math.random() * attackedArmy.length)
    ];
    const attacker = this.attackerArmy[
      Math.floor(Math.random() * attackerArmy.length)
    ];
    const result = attacked.receiveDamage(attacker.strength);
    this.attackedArmy = this.attackedArmy.filter(x => x.health > 0);
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length == 0)
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length == 0)
      return "Saxons have fought for their lives and survived another day...";
    else return "Vikings and Saxons are still in the thick of battle.";
  }
}
