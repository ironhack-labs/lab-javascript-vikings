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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
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
/*
nao precisa do constructor, porque os constructors sao identicos.
*/
class Saxon extends Soldier {
  // constructor(health, strength) {
  //   super (health, strength)
  // }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// funcao separada para calcular random de um array
// const getRandomNumberInArray = arr => Math.floor(Math.random() * arr.length);

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
    // const saxonSoldierIndex = getRandomNumberInArray(this.saxonArmy);
    const saxonSoldierIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const saxonSoldier = this.saxonArmy[saxonSoldierIndex];
    // const vikingSoldier = this.vikingArmy[getRandomNumberInArray(this.vikingArmy)];
    const vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const attackOutput = saxonSoldier.receiveDamage(vikingSoldier.strength);
    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(saxonSoldierIndex, 1);
    }
    return attackOutput;
  }
  saxonAttack() {
    // const vikingSoldierIndex = getRandomNumberInArray(this.vikingArmy);
    const vikingSoldierIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const vikingSoldier = this.vikingArmy[vikingSoldierIndex];
    // const saxonSoldier = this.saxonArmy[getRandomNumberInArray(this.saxonArmy)];
    const saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const attackOutput = vikingSoldier.receiveDamage(saxonSoldier.strength);
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(vikingSoldierIndex, 1);
    }
    return attackOutput;
  }
  // allAttack (attacker, defender) {
  //   // const attackedIndex = getRandomNumberInArray(defender);
  //   // leaving the function inside the class to avoid errors
  //   const attackedIndex = Math.floor(Math.random() * defender.length);
  //   const attackedSoldier = defender[attackedIndex];
  //   // const attackerSoldier = attacker[getRandomNumberInArray(attacker)];
  //   // same as above
  //   const attackerSoldier = attacker[Math.floor(Math.random() * attacker.length)];
  //   const attackOutput = attackedSoldier.receiveDamage(attackerSoldier.strength);
  //   if (attackedSoldier.health <= 0) {
  //     defender.splice(attackedIndex, 1);
  //   }
  //   return attackOutput;
  // }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}


// arrumar a funcao random para dentro do metodo
