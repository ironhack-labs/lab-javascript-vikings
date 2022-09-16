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
    super.receiveDamage(damage);
    if (this.health - damage < 0)
      return this.name + " has died in act of combat";
    return this.name + " has received " + damage + " points of damage";
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0)
      return "A Saxon has received " + damage + " points of damage";
    else return "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    const vikingObject = new Viking();
    const saxonObject = new Saxon();
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length); // Random number for the array's length
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length); // Random number for Viking
    let resultOfReceiveDamage = this.saxonArmy[randomIndexSaxon].receiveDamage(
      this.vikingArmy[randomIndexViking].strength
    );

    this.saxonArmy.forEach((saxonElementToCheck) => {
      if (saxonElementToCheck.health <= 0) this.saxonArmy.pop();
    });

    return resultOfReceiveDamage;
    // return this.saxonArmy[randomIndexSaxon].receiveDamage(
    //   this.vikingArmy[randomIndexViking].strength
    // );
  }
  saxonAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length); // Random number for the array's length
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length); // Random number for Viking
    let resultOfReceiveDamage = this.vikingArmy[
      randomIndexViking
    ].receiveDamage(this.saxonArmy[randomIndexSaxon].strength);

    this.vikingArmy.forEach((vikingArmyElementToCheck) => {
      if (vikingArmyElementToCheck.health <= 0) this.vikingArmy.pop();
    });

    return resultOfReceiveDamage;
  }
}
