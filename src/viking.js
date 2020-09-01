// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
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
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {

    let rdmSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
    let rdmViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
    let result = "";

    result = this.saxonArmy[rdmSaxon].receiveDamage(
      this.vikingArmy[rdmViking].attack()
    );

    if (this.saxonArmy[rdmSaxon].health <= 0) {
      this.saxonArmy.splice(rdmSaxon, 1);
    }

    return result;
  }

  

  saxonAttack() {

    let rdmSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
    let rdmViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
    let result = "";

    result = this.vikingArmy[rdmViking].receiveDamage(
      this.saxonArmy[rdmSaxon].attack()
    );

    if (this.vikingArmy[rdmViking].health <= 0) {
      this.vikingArmy.splice(rdmViking, 1);
    }

    return result;
  }

}
