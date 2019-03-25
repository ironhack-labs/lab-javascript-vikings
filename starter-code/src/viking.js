// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg
  };
  attack() {
    return this.strength;
  };
  receiveDamage(damageArg) {
    this.health -= damageArg;
  };
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };
  attack() {
    return this.strength;
  };
  receiveDamage(damageArg) {
    this.health -= damageArg;
    if (this.health > 0) {
      return `${this.name} has received ${damageArg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    };
  };
  battleCry() {
    return `Odin Owns You All!`;
  };
};

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  };
  attack() {
    return this.strength;
  };
  receiveDamage(damageArg) {
    this.health -= damageArg;
    if (this.health > 0) {
      return `A Saxon has received ${damageArg} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    };
  };
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(viking) {
    this.vikingArmy.push(viking);
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  vikingAttack() {
    var randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var indexSaxon = this.saxonArmy.indexOf(randSaxon);
    console.log(randSaxon);

    var randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    console.log(randViking);

    randSaxon.receiveDamage(randViking.strength);

    if (randSaxon.health < 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    };
  };

  saxonAttack() {
    var randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var indexViking = this.vikingArmy.indexOf(randViking);
    console.log(randViking);

    var randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    console.log(randSaxon);

    randViking.receiveDamage(randSaxon.strength);

    if (randViking.health < 0) {
      this.vikingArmy.splice(indexViking, 1);
    };
  };

  showStatus() {

  };


};