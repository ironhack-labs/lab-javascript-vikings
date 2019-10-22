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
// const soldier1 = new Soldier(500, 40);
// console.log(soldier1)
// console.log(soldier1.receiveDamage(40))
// console.log(soldier1)

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// var viking2 = new Viking("Pierre", 30, 60);
// console.log(viking2);
// console.log(viking2.receiveDamage(40));
// console.log(viking2);

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
// console.log("---------")
// var viking2 = new Saxon(90, 60);
// console.log(viking2);
// console.log(viking2.receiveDamage(20));
// console.log(viking2);
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
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var chosenSaxon = this.saxonArmy[randomSaxon];
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var chosenViking = this.vikingArmy[randomViking];

    chosenSaxon.receiveDamage(chosenViking.strength);

    if (chosenSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${chosenViking.strength} points of damage`;
    }
  }
  saxonAttack() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var chosenSaxon = this.saxonArmy[randomSaxon];
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var chosenViking = this.vikingArmy[randomViking];

    chosenViking.receiveDamage(chosenSaxon.strength);
    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
      return `${chosenViking.name} has died in act of combat`;
    } else {
      return `${chosenViking.name} has received ${chosenSaxon.strength} points of damage`;
    }
  }
  showStatus() {
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
};

// var viking1 = new Viking("Pierre", 30, 60);
// var saxon1 = new Saxon(90, 60);
// var saxon2 = new Saxon(90, 60);
// console.log(viking1);
// console.log(saxon1);
// var war = new War();
// console.log(war);
// war.addSaxon(saxon1);
// war.addSaxon(saxon2);
// console.log(war);
// war.addViking(viking1);
// console.log(war);
