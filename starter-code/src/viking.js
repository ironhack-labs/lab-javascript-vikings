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
    // const damage =
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  //   attack() {
  //     super.attack();
  //   }
  receiveDamage(damage) {
    this.health -= damage;
    let response = "";
    if (this.health <= 0) {
      response = `${this.name} has died in act of combat`;
    }
    if (this.health > 0) {
      response = `${this.name} has received ${damage} points of damage`;
    }
    return response;
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

  receiveDamage(damage) {
    this.health -= damage;
    let response = "";
    if (this.health <= 0) {
      response = `A Saxon has died in combat`;
    }
    if (this.health > 0) {
      response = `A Saxon has received ${damage} points of damage`;
    }
    return response;
  }
}

// War
class War {}
