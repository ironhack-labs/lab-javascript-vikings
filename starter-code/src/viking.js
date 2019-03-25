class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dam) {
    this.health -= dam;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dam) {
    this.health -= dam;
    if (this.health > 0)
      return `${this.name} has received ${dam} points of damage`;

    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(dam) {
    this.health -= dam;
    if (this.health > 0) return `A Saxon has received ${dam} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {}
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    let randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let iSaxon = this.saxonArmy.indexOf(randSaxon);

    let message = randSaxon.receiveDamage(randViking.strength);

    if (randSaxon.health < 1) {
      this.saxonArmy.splice(iSaxon, 1);
    }
    return message;
  }

  saxonAttack() {
    let randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let iViking = this.vikingArmy.indexOf(randViking);

    const message = randViking.receiveDamage(randSaxon.strength);

    if (randViking.health < 1) {
      this.vikingArmy.splice(iViking, 1);
    }
    return message;
  }
  showStatus() {
    if (!this.saxonArmy.length)
      return 'Vikings have won the war of the century!';
    else if (!this.vikingArmy.length)
      return 'Saxons have fought for their lives and survive another day...';
    if (this.vikingArmy.length > 0 && this.vikingArmy.length > 0)
      return 'Vikings and Saxons are still in the thick of battle.';
  }
}
