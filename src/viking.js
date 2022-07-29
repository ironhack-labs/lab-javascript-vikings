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
    } else return `${this.name} has died in act of combat`;
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
    } else return `A Saxon has died in combat`;
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
  attack(off, def) {
    const offSoldier = this.random(off);
    const defSoldier = this.random(def);
    const fight = defSoldier.receiveDamage(offSoldier.strength);
    def.forEach((soldier, index) => {
      if (soldier.health < 1) def.splice(index, 1);
    });
    return fight;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
  random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

// Since there is a lot of repetitive code in the previous two iterations, methods vikingAttack() and saxonAttack(), try to create one generic method and call it in the case of vikingAttack and in the case of saxonAttack instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)
