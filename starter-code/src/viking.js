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
  vikingAttack() {
    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxSoldier = this.saxonArmy[saxRandom];
    let vikSoldier = this.vikingArmy[vikRandom];
    let attack= saxSoldier.receiveDamage(vikSoldier.strength);

    this.saxonArmy = this.saxonArmy.filter((saxSoldier) => {
      saxSoldier.health > 0
    });
    return attack
    // return saxSoldier.receiveDamage(vikSoldier.strength);
  }
  saxonAttack() {
    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxSoldier = this.saxonArmy[saxRandom];
    let vikSoldier = this.vikingArmy[vikRandom];

  
    let attack = vikSoldier.receiveDamage(saxSoldier.strength);
  
    this.vikingArmy = this.vikingArmy.filter((vikSoldier) => {
      return vikSoldier.health > 0
    });
    return attack
  }
 

  showStatus(){
    if(this.saxonArmy.length < 1){
      return "Vikings have won the war of the century!";
    }
    if(this.vikingArmy.length < 1){
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return  "Vikings and Saxons are still in the thick of battle."
    }
  }

}
