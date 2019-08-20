// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strenght) {
    super(health, strenght);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
    let died = this.name + " has died in act of combat";
    let live = this.name + " has received " + thedamage + " points of damage";
    if (this.health < thedamage) return died;
    else return live;
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
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
    let died = "A Saxon has died in combat";
    let live = "A Saxon has received " + thedamage + " points of damage";
    if (this.health < thedamage) return died;
    else return live;
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
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));

    this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    if (this.saxonArmy[randomSaxon].health <= 0)
      this.saxonArmy.pop(randomSaxon);
  }

  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));

    this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );

    if (this.vikingArmy[randomViking].health <= 0)
      this.vikingArmy.pop(randomViking);
  }

  showStatus() {
    if (this.vikingArmy.length < 1)
      return "Saxons have fought for their lives and survive another day...";
    else if (this.saxonArmy.length < 1)
      return "Vikings have won the war of the century!";
    else return "Vikings and Saxons are still in the thick of battle.";
  }
}

let Viking1 = new Viking("Ola", 40, 50);
let Saxon1 = new Saxon(30, 50);
let war1 = new War();

war1.addSaxon(Saxon1);
war1.addViking(Viking1);
console.log(war1.vikingArmy);
war1.saxonAttack();
console.log(war1.saxonArmy);
console.log(war1.vikingArmy);
