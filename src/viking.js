// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
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
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {
    //  a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
    // random Numb
    // let randomNum = Math.floor(Math.random() * this.saxonArmy.length + 1)
    // this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    // for (let sax of this.saxonArmy)
    //   if (sax.health <= 0) {
    //     this.saxonArmy.splice(sax, 1)
    //   }
    //`${viking.name} has received ${saxon.strength} points of damage
    // console.log(this.saxonArmy[0].receiveDamage(this.saxonArmy[0]))
    // // return
  }

  saxonAttack() {
    // this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
  }
  showStatus() {

  }
}