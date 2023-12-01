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
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
        // console for trial game
      console.log(`${this.name} has received ${damage} points of damage`);
      return `${this.name} has received ${damage} points of damage`;
    } else {
      console.log(`${this.name} has died in act of combat`);
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    //console for trial game
    console.log("Odin Owns You All!");
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
        // console for trial game
      console.log(`A Saxon has received ${damage} points of damage`);
      return `A Saxon has received ${damage} points of damage`;
    } else {
      console.log(`A Saxon has died in combat`);
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    if (this.vikingArmy.length === 0) {
      this.showStatus();
      return;
    }
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let attackResult = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );
    if (this.saxonArmy[randomSaxon].health <= 0) {
      let index = this.saxonArmy[randomSaxon];
      this.saxonArmy.splice(index, 1);
    }
    return attackResult;
  }

  saxonAttack() {
    if (this.saxonArmy.length === 0) {
      this.showStatus();
      return;
    }
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let attackResult = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );
    if (this.vikingArmy[randomViking].health <= 0) {
      let index = this.vikingArmy[randomViking];
      this.vikingArmy.splice(index, 1);
    }
    return attackResult;
  }

  showStatus() {
    if (this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
}

// // Trial Game
// // Creating a war
// const battle = new War();

// // Creating and add soldiers to the armies
// function generate5Vikings() {
//   const viking1 = new Viking("Ragnar", 100, 150);
//   battle.addViking(viking1);
//   const viking2 = new Viking("Floki", 80, 130);
//   battle.addViking(viking2);
//   const viking3 = new Viking("Astrid", 100, 100);
//   battle.addViking(viking3);
//   const viking4 = new Viking("Lagertha", 120, 120);
//   battle.addViking(viking4);
//   const viking5 = new Viking("Björn", 120, 140);
//   battle.addViking(viking5);
// }

// function generate6Saxons() {
//   const saxon1 = new Saxon(100, 70);
//   battle.addSaxon(saxon1);
//   const saxon2 = new Saxon(80, 70);
//   battle.addSaxon(saxon2);
//   const saxon3 = new Saxon(100, 70);
//   battle.addSaxon(saxon3);
//   const saxon4 = new Saxon(100, 70);
//   battle.addSaxon(saxon4);
//   const saxon5 = new Saxon(100, 70);
//   battle.addSaxon(saxon5);
//   const saxon6 = new Saxon(100, 70);
//   battle.addSaxon(saxon6);
// }
// generate5Vikings();
// generate6Saxons();

// console.log(battle.vikingArmy);
// console.log(battle.saxonArmy);

// // Attacks
// battle.saxonAttack();

// battle.vikingArmy[0].battleCry();
// battle.vikingAttack();
// battle.showStatus();
// battle.saxonAttack();
// battle.showStatus();

// battle.vikingArmy[1].battleCry();
// battle.vikingAttack();
// battle.saxonAttack();

// battle.showStatus();
// battle.vikingAttack();
// battle.showStatus();
// battle.saxonAttack();

// battle.showStatus();
// battle.vikingAttack();
// battle.showStatus();
// battle.saxonAttack();

// battle.showStatus();
// battle.vikingAttack();
// battle.saxonAttack();
// battle.vikingAttack();
// battle.saxonAttack();
// console.log(battle.showStatus());

