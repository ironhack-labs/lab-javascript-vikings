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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
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
  addViking(vikings) {
    this.vikingArmy.push(vikings);
  }
  addSaxon(saxons) {
    this.saxonArmy.push(saxons);
  }
  vikingAttack() {
    console.log(this.saxonArmy[0].health - this.vikingArmy[0].strength);
    const viking = this.vikingArmy[0];
    const saxon = this.saxonArmy[0];
    saxon.receiveDamage(viking.strength);

    // const test = new Saxon(this.saxonArmy[0].health, this.saxonArmy[0].strength).receiveDamage(this.vikingArmy[0].strength)
    // if (test.includes('died')) {
    //   this.saxonArmy = []
    // }
    // console.log(test);
    // return test
  }
  saxonAttack() { }
  showStatus() { }
}
