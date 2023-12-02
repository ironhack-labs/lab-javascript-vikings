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
  // attack (){} from soldier
  receiveDamage(damage) {
    this.health -= damage;
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

// Saxon
class Saxon extends Soldier {
  // no constructor because inherits perfectly
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  // possible without a constructor
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    return this.combat("viking");
    // // choose random soldiers
    // let saxonSoldier =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // let vikingSoldier =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // // saxon receives damage
    // let result = saxonSoldier.receiveDamage(vikingSoldier.attack());
    // // remove dead saxons
    // for (let i = 0; i < this.saxonArmy.length; i++) {
    //   if (this.saxonArmy[i].health <= 0) {
    //     this.saxonArmy.splice(i, 1);
    //   }
    // }
    // return result;
  }

  saxonAttack() {
    return this.combat("saxon");
    // // choose random soldiers
    // let saxonSoldier =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // let vikingSoldier =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // // viking receives damage
    // let result = vikingSoldier.receiveDamage(saxonSoldier.attack());
    // // remove dead vikings **** DOES NOT WORK ****
    // for (let i = 0; i < this.vikingArmy.length; i++) {
    //   if (this.vikingArmy[i].health <= 0) {
    //     this.vikingArmy.splice(i, 1);
    //   }
    // }
    // return result;
  }

  combat(attacker) {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSoldier = this.saxonArmy[randomIndexSaxon];
    let vikingSoldier = this.vikingArmy[randomIndexViking];
    let result;
    if (attacker === "saxon") {
      result = vikingSoldier.receiveDamage(saxonSoldier.attack());
      if (vikingSoldier.health <= 0)
        this.vikingArmy.splice(randomIndexViking, 1);
    }
    if (attacker === "viking") {
      result = saxonSoldier.receiveDamage(vikingSoldier.attack());
      if (saxonSoldier.health <= 0) this.saxonArmy.splice(randomIndexSaxon, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

// // TRY IT OUT

// let vikings = [];
// let saxons = [];

// for (let i = 0; i < 10; i++) {
//   vikings[i] = new Viking("viking", 100, 10);
//   saxons[i] = new Saxon(100, 10);
// }
// //  console.log (vikings[0].receiveDamage(10));
// //  console.log (vikings[0].health)

// war = new War();
// for (let i = 0; i < 10; i++){
//     war.addSaxon(saxons[i]);
//     war.addViking(vikings[i]);
// }

// //console.log(war.vikingArmy[0])

// war.vikingAttack();
