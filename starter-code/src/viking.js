// Soldier
// function Soldier(healthArg, strengthArg) {
//   this.health = healthArg;
//   this.strength = strengthArg;
// }

class Soldier {
  constructor (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -= damage;
  }
}


// Viking
//function Viking() {}

class Viking extends Soldier{
  constructor(name, healthArg, strengthArg){
    super(healthArg, strengthArg);
    this.name = name;
 }

 receiveDamage (damage) {
  this.health -= damage;
  if (this.health === 0){
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
}

battleCry () {
  return "Odin Owns You All!";
}
}

// Saxon
//function Saxon() {}

class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super (healthArg, strengthArg);
  }

  receiveDamage (damage) {
    this.health -= damage;
    if (this.health === 0){
      return "A Saxon has died in combat";
    } else {
      return "A Saxon has received " + damage + " points of damage";
    }
  }
}

//----------------------------Bonus NOT FUNCTIONAL------------------------------------------


// War
//function War() {}

// class War {
//   constructor () {
//     this.vikingArmy = [];
//     this.saxonArmy = [];
//   }

//   addViking (Viking) {
//     this.vikingArmy.push(Viking);
//   }

//   addSaxon (Saxon) {
//     this.saxonArmy.push(Saxon);
//   }

//   vikingAttack () {
//     const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//     const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
//     return randomSaxon.receiveDamage(randomViking.strength);
//     if (randomSaxon.health === 0) {
//       saxonArmy.splice(randomSaxon);
//     } 
//   }

//   showStatus () {

//     if (this.saxonArmy > 0 && this.vikingArmy > 0){
//       return "Vikings and Saxons are still in the thick of battle.";
//     } else if (this.saxonArmy.length === 0) {
//       return "Vikings have won the war of the century!";
//     } else if (this.vikingArmy === 0) {
//       return "Saxons have fought for their lives and survive another day...";
//     }
// }}