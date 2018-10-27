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
     return this.name + " has received " + damage + " points of damage"
    }
    if (this.health <= 0) {
     return this.name + " has died in act of combat"
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

class Saxon extends Soldier {
    constructor(health, strength,){
  super(health, strength)
  this.name = name
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    // this.health = healthRemaining
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    if (this.health <= 0) {
      return "A Saxon has died in combat"
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
 vikingAttack(){

let saxRandom = Math.floor(Math.random()* this.saxonArmy.length);
let vikRandom = Math.floor(Math.random()* this.vikingArmy.length);
   let ataque = this.saxonArmy[saxRandom].receiveDamage(this.vikingArmy[vikRandom].strength);
   let saxonArmy = this.saxonArmy.filter((saxRandom) => {
     return saxRandom.health > 0
   });
   }
  saxonAttack() {

    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let ataque = this.vikingArmy[vikRandom].receiveDamage(this.saxonArmy[saxRandom].strength);
    let vikingArmy = this.vikingArmy.filter((vikRandom) => {
      return vikRandom.health > 0
    });
  }

  showStatus(){
    if(this.saxonArmy < 0){
      return "Vikings have won the war of the century!";
    }
    if(this.vikingArmy < 0){
      "Saxons have fought for their lives and survive another day...";
    } else {
      return  "Vikings and Saxons are still in the thick of battle."
    }
  }

}
