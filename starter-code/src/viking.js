// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(strengthArg) {
    this.health -= strengthArg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, healthArg, strengthArg) {
    super(name, healthArg, strengthArg);
    this.name = name;
    this.health = healthArg;
    this.strength = strengthArg;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

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
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.health = healthArg;
    this.strength = strengthArg;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let resultDamage = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }
    return resultDamage;
  }

  saxonAttack() {
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let resultDamage = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    }

    return resultDamage;
  }

  showStatus(){
    if (this.saxonArmy.length <= 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0){
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
