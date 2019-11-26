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
    } else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
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
    let Opfer = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let Angreifer = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let message = Opfer.receiveDamage(Angreifer.attack());
    if (Opfer.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(Opfer), 1);
    }
    return(message);
  }

  saxonAttack() {
    let Opfer = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let Angreifer = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let message = Opfer.receiveDamage(Angreifer.attack());
    if (Opfer.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(Opfer), 1);
    }
    return(message);
  }
}