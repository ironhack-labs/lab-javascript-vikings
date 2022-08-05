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
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    // if (this.health > 0) {
    //   return `${this.name} has received ${damage} points of damage`;
    // } else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    // if (this.health > 0) {
    //   return `A Saxon has received ${damage} points of damage`;
    // } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(aVikingObject) {
    this.vikingArmy.push(aVikingObject);
  }

  addSaxon(aSaxonObject) {
    this.saxonArmy.push(aSaxonObject);
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }

  removeDeadSoldier(whatArmy) {
    whatArmy.forEach((soldier, index) => {
      if (soldier.health < 1) whatArmy.splice(index, 1);
    });
  }

  attack(offense, defense) {
    const offSoldier = this.random(offense);
    const defSoldier = this.random(defense);
    const fight = defSoldier.receiveDamage(offSoldier.strength);
    this.removeDeadSoldier(defense);
    return fight;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
    // "early" return pattern
    // if (this.saxonArmy.length === 0) {
    //   return "Vikings have won the war of the century!";
    // } else if (this.vikingArmy.length === 0) {
    //   return "Saxons have fought for their lives and survived another day...";
    // } else return "Vikings and Saxons are still in the thick of battle.";
  }

  random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
