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
    this.health = health; //Uros didn't do it, why?
    this.strength = strength; //Uros didn't do it, why?
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    // or receiveDamage by Calling the method that already exists on the Soldier `.prototype`
    // Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
    //console.log("Added vikingObj:" + this.vikingArmy);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
    //console.log("Added saxonObj:" + this.saxonArmy);
  }

  vikingAttack() {
    const saxonPosiz =
      Math.floor(Math.random() * this.saxonArmy.length + 1) - 1;
    const vikingPosiz =
      Math.floor(Math.random() * this.vikingArmy.length + 1) - 1;
    const damageSax = this.saxonArmy[saxonPosiz].receiveDamage(
      this.vikingArmy[vikingPosiz].strength
    );
    //Uros created  the soldiers obj
    // var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // var saxonSoldier = this.saxonArmy[randomSaxon];

    // var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // var vikingSoldier = this.vikingArmy[randomViking];

    if (this.saxonArmy[vikingPosiz].health <= 0) {
      console.log(this.saxonArmy[vikingPosiz], "Killed");
      this.saxonArmy.splice(vikingPosiz, 1);
    }

    return damageSax;
  }
  saxonAttack() {
    const saxonPosiz = Math.floor(Math.random() * this.saxonArmy.length + 1);
    const vikingPosiz = Math.floor(Math.random() * this.vikingArmy.length + 1);
    let damageVik = "";
    console.log(saxonPosiz, vikingPosiz);
    console.log(
      saxonPosiz,
      "Saxon strength =>>> ",
      this.saxonArmy[saxonPosiz].health
    );
    console.log(
      vikingPosiz,
      "Viking strength =>>> ",
      this.vikingArmy[vikingPosiz].health
    );
    if (this.saxonArmy[saxonPosiz].health) {
      damageVik = this.vikingArmy[vikingPosiz].receiveDamage(
        this.saxonArmy[saxonPosiz].strength
      );
    } else {
      console.log(this.vikingArmy.name, "killed");
      this.vikingArmy.splice(saxonPosiz, 1);
    }
    return damageVik;
  }

  showStatus() {
    const statusOb = new War();
    if (statusOb.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (statusOb.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

let warObj = new War();
console.log(warObj.showStatus());
// let viking1 = new Viking("Erik", 100, 100);
// let viking2 = new Viking("Frode", 50, 50);
// let viking3 = new Viking("Gorm", 60, 60);
// let viking4 = new Viking("Halfdan", 40, 40);
// console.log(viking1, viking2, viking3, viking4);
// let saxon1 = new Saxon(100, 100);
// let saxon2 = new Saxon(50, 50);
// let saxon3 = new Saxon(60, 60);
// let saxon4 = new Saxon(40, 40);
// console.log(saxon1, saxon2, saxon3, saxon4);

// //Creating Viking's Army
// let warObj = new War();
// warObj.addViking(viking1);
// warObj.addViking(viking2);
// warObj.addViking(viking3);
// warObj.addViking(viking4);

// // Creating Saxon's Army

// warObj.addSaxon(saxon1);
// warObj.addSaxon(saxon2);
// warObj.addSaxon(saxon3);
// warObj.addSaxon(saxon4);

// //War begins
// warObj.vikingAttack();
// console.log(warObj.showStatus());
// warObj.saxonAttack();
// console.log(warObj.showStatus());
// warObj.vikingAttack();
// warObj.saxonAttack();
// warObj.saxonAttack();
// warObj.vikingAttack();
// warObj.saxonAttack();
