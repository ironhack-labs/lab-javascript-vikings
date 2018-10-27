// Soldier


class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    damage
  }
}

class Viking extends Soldier {
  constructor(name, health, strength, ) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      this.name + " has received " + damage + " points of damage"
    }
    if (this.health <= 0) {
      this.name + " has died in act of combat"
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

class Saxon extends Soldier {
  //   constructor(health, strength,){
  // super(health, strength)
  // this.name = name
  // }
  receiveDamage(damage) {
    this.health = this.health - damage;
    // this.health = healthRemaining
    if (this.health > 0) {
      return "a SAXON has received " + damage + " points of damage"
    }
    if (this.health <= 0) {
      return "a SAXON has died in act of combat"
    }
  }
}

// let littleGuy = new Soldier(10, 1);
// let mediumGuy = new Viking("rabbitKiller", 10, 3);
// let worthlessHuman = new Saxon(2, 1);
// console.log(littleGuy.receiveDamage(2));
// console.log(littleGuy.health)
// console.log(mediumGuy.receiveDamage(2));
// console.log(mediumGuy.health)
// console.log(worthlessHuman.receiveDamage(2));
// console.log(worthlessHuman.health)

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  };

  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  };
  vikingAtack() {

    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
    console.log(saxRandom);
    console.log(vikRandom)
    let ataque = this.saxonArmy[saxRandom].receiveDamage(this.vikingArmy[vikRandom].strength);
    if (this.health < 0) {
      saxonArmy.remove(saxRandom);
      console.log(saxonArmy)
    }

  }

}