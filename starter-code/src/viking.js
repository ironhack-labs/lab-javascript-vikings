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
class Viking {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
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
    this.health = this.health - damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
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
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    if (this.saxonArmy[randomSaxon].health == 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );
  }

  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    if (this.vikingArmy[randomViking].health == 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );
  }
}

let soldier1 = new Soldier(50, 100);
let soldier2 = new Soldier(40, 30);
let soldier3 = new Soldier(20, 10);
let soldier4 = new Soldier(40, 20);
let soldier5 = new Soldier(42, 30);
let saxon1 = new Saxon(300, 20);
let saxon2 = new Saxon(200, 10);
let saxon3 = new Saxon(400, 20);
let saxon4 = new Saxon(200, 20);
let saxon5 = new Saxon(500, 10);
let viking1 = new Viking("Carlos", 65, 60);
let viking2 = new Viking("Beto", 40, 20);
let viking3 = new Viking("Lalo", 70, 70);
let viking4 = new Viking("Pepe", 20, 80);
let viking5 = new Viking("Jose", 10, 10);

let war = new War();

// console.log(soldier1);
// console.log(saxon1);
// console.log(viking1);

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);
war.addSaxon(saxon5);

console.log(war.vikingArmy);
console.log(war.saxonArmy);

war.vikingAttack();

// class Animal {
//   constructor(name, isInDanger) {
//     this.name = name;
//     this.isInDanger = isInDanger;
//   }

//   getIsInDanger() {
//     console.log(this.isInDanger);
//     return this.isInDanger;
//   }
// }
