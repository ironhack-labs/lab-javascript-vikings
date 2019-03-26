// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(arg) {
    this.health = this.health - arg;
    return undefined;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
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
    var saxon = this.saxonArmy[
      Math.floor(Math.random() * (this.saxonArmy.length - 1))
    ];
    var viking = this.vikingArmy[
      Math.floor(Math.random() * (this.vikingArmy.length - 1))
    ];

    var result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      for (let i = 0; i < this.saxonArmy.length; i++) {
        if (this.saxonArmy[i] === saxon) this.saxonArmy.splice(i, 1);
      }
    }

    return result;
  }
  saxonAttack() {
    var saxon = this.saxonArmy[
      Math.floor(Math.random() * (this.saxonArmy.length - 1))
    ];
    var viking = this.vikingArmy[
      Math.floor(Math.random() * (this.vikingArmy.length - 1))
    ];

    var result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      for (let i = 0; i < this.vikingArmy.length; i++) {
        if (this.vikingArmy[i] === viking) this.vikingArmy.splice(i, 1);
      }
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length===0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length===0){
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length>0 && this.saxonArmy.length>0){
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
