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
    return `Odin Owns You All!`;
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

// saxonArmy[Math.floor((Math.random() * this.saxonArmy.length) + 1)]

//War
//YA QUEDO, SOLO FALTA ARREGLAR LO DE LOS ATAQUES, LO DEMAS YA LO PONE EN VERDE
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
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length + 1)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length + 1)
    ];

    if (randomSaxon.health <= 0) {
      let indexDel = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(indexDel, 1);
    } else {
      return randomSaxon.receiveDamage(randomViking.strength);
    }
  }
  saxonAttack() {
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length + 1)
    ];
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length + 1)
    ];

    if (randomViking.health <= 0) {
      let indexDel = this.vikingArmy.indexOf(randomViking);
      this.saxonArmy.splice(indexDel, 1);
    } else {
      return randomViking.receiveDamage(randomSaxon.strength);
    }
  }
  //   showStatus() {}
}
