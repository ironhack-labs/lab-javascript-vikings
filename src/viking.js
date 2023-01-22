// Soldier
class Soldier {
  constructor(health, strength) {
    //propriedad
    this.health = health;
    this.strength = strength;
  }

  //methodo
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    console.log('je suis ds receive damage vicking')

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// let viking1 = new Viking(10 , 'strength', 'alex')
// console.log(viking1)

// Saxon
class Saxon extends Soldier {
  // constructor(health, strength) {
  //     super(health, strength);

  //   }

  receiveDamage(damage) {
    this.health = this.health - damage;

    console.log('je suis ds receive damage saxon')
    
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }

    
  }
  
}

// War
class War {
  constructor() {
    //propriété
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  //méthode

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxon = Math.random() * this.saxonArmy.length;
    let randomVicking = Math.random() * this.vikingArmy.length;

    let floorSaxon = Math.floor(randomSaxon);
    let floorVicking = Math.floor(randomVicking);

    this.saxonArmy[floorSaxon].receiveDamage(
      this.vikingArmy[floorVicking].strength
    );


    console.log('je suis ds vicking attack')
    // for (i = 0; i < this.saxonArmy.length; i++) {
    //   if (this.saxonArmy[i].health <= 0) {
    //     this.saxonArmy.splice(i, 1)
    //   }
    // }
  }

  saxonAttack() {

    let randomSaxon = Math.random() * this.saxonArmy.length;
    let randomVicking = Math.random() * this.vikingArmy.length;
    let floorSaxon = Math.floor(randomSaxon);
    let floorVicking = Math.floor(randomVicking);

    this.vikingArmy[floorVicking].receiveDamage(
      this.saxonArmy[floorSaxon].strength
    );
  }

  showStatus() {}
}

let vicking1 = new Viking("alex", 12, 5);
let vicking2 = new Viking("guillaume", 15, 4);

let saxon1 = new Saxon(15, 3);
let saxon2 = new Saxon(13, 2);

let war1 = new War();

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);

war1.addViking(vicking1);
war1.addViking(vicking2);

console.log(war1);
