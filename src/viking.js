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

  //Viking has access to all of "Soldier"'s methods, including "attack()" via "extends"

  //Damage
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >= 1) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  //BattleCry RAAAAAAA!
  battleCry() {
    return "Odin Owns You All!";
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >= 1) {
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
    let rSaxon = this.random(saxonArmy);
    let rViking = this.random(vikingArmy);
    let damage = rViking.strength;
    rSaxon.receiveDamage(strength);

    // let oldHealth = rSaxon.health;
    // rSaxon.health = oldHealth -= rViking.strength;
  }

  saxonAttach() {}

  random(arr) {
    return arr[Math.floor(Math.random() * this.arr.length)];
  }

  showStatus() {}
}
