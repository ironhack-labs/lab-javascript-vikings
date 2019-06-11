// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg)
    this.name = name;
    }

  // attack() {
  //   super.attack() 
  //     {return this.strength;}
  // }
  // Not needed because it will take it from the parent

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {return `${this.name} has died in act of combat`}
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {return `A Saxon has died in combat`}
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let victimIdx = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.saxonArmy[victimIdx].receiveDamage(this.vikingArmy[vikingIdx].attack()); 
    let updatedList = this.saxonArmy.filter((x) => (x.health > 0));
    this.saxonArmy = updatedList;
    return result;
  }

  saxonAttack() {
    let vikingIdx = Math.floor(Math.random() * this.saxonArmy.length);
    let victimIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.vikingArmy[victimIdx].receiveDamage(this.saxonArmy[vikingIdx].attack()); 
     let updatedList = this.vikingArmy.filter((x) => (x.health > 0));
    this.vikingArmy = updatedList;
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."}
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
