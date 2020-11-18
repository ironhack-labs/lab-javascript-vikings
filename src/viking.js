// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health; // PAS OUBLIER DE LINKER AVEC LA CLASS QUE TU VAS SUREMENT INVENTER APRES
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

  battleCry() {
    return "Odin Owns You All!";
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > damage) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
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
    const viking = this.vikingArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    console.log(viking);

    const saxon = this.saxonArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    console.log(saxon);
    let message = saxon.receiveDamage(viking.strength);
    if (saxon.health < 1) {
      this.saxonArmy.splice(saxon);
    }
    return message;
  }
}
