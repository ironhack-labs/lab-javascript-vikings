// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(amountOfDamage) {
    this.health -= amountOfDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
  receiveDamage(amount) {
    this.health -= amount;
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}
// const obj1 = new Viking("Björn", 100, 99);
// console.log(obj1);
// console.log(obj1.receiveDamage(90));
// console.log(obj1);

// Saxon
class Saxon extends Soldier {
  // SOLUTION
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(amount) {
    this.health -= amount;
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
  // SOLUTION
  // receiveDamage(amount) {
  //   super.receiveDamage(amount); // invoke the method receiveDamage() of the parent class
  //   if (this.health > 0) {
  //     return `A Saxon has received ${amount} points of damage`;
  //   } else {
  //     return `A Saxon has died in combat`;
  //   }
  // }
}
class War {
  // SOLUTION
  // vikingArmy = [];
  // saxonArmy = [];
  // addViking(vikObj) {
  //   this.vikingArmy.push(vikObj);
  // }
  // addSaxon(sax0bj) {
  //   this.saxonArmy.push(sax0bj);
  // }
  // vikingAttack() {
  //   const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  //   const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomViking = this.vikingArmy[vikingIndex];
  //   const randomSaxon = this.saxonArmy[saxonIndex];
  //   const damage = randomViking.strength;
  //   const result = randomSaxon.receiveDamage(damage);
  //   if (randomSaxon.health <= 0) {
  //     this.saxonArmy.splice(saxonIndex, 1);
  //   }
  //   return result;
  // }
  // saxonAttack() {
  //   const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  //   const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //   const randomViking = this.vikingArmy[vikingIndex];
  //   const randomSaxon = this.saxonArmy[saxonIndex];
  //   const damage = randomSaxon.strength;
  //   const result = randomViking.receiveDamage(damage);
  //   if (randomViking.health <= 0) {
  //     this.vikingArmy.splice(vikingIndex, 1);
  //   }
  //   return result;
  // }
  // showStatus() {
  //   if (this.saxonArmy.length === 0) {
  //     return "Vikings have won the war of the century!";
  //   } else if (this.vikingArmy.length === 0) {
  //     return "Saxons have fought for their lives and survived another day...";
  //   } else {
  //     return "Vikings and Saxons are still in the thick of battle.";
  //   }
  // }
  // SOLUTION
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
  genericAttack(attackingArmy, defendingArmy) {
    // select a random soldier from the attacking army
    const randomAttackerIndex = Math.floor(
      Math.random() * attackingArmy.length
    );
    const randomAttacker = attackingArmy[randomAttackerIndex];

    // select a random soldier from the defending army
    const randomDefenderIndex = Math.floor(
      Math.random() * defendingArmy.length
    );
    const randomDefender = defendingArmy[randomDefenderIndex];

    // perform attack
    const amountOfTheAttack = randomAttacker.attack();
    const result = randomDefender.receiveDamage(amountOfTheAttack);

    // if the defender has died, remove it from the army
    if (randomDefender.health <= 0) {
      defendingArmy.splice(randomDefenderIndex, 1);
    }

    return result;
  }
  vikingAttack() {
    // viking attacks saxon
    return this.genericAttack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    // saxon attacks viking
    return this.genericAttack(this.saxonArmy, this.vikingArmy);
  }
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
