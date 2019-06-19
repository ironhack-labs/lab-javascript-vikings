// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.healthArg = theHealthArg;
    this.strengthArg = theStrengthArg;
  }
  attack() {
    return this.strengthArg;
  }
  receiveDamage(amtOfDmg) {
    this.healthArg -= amtOfDmg; 
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  receiveDamage(amtOfDmg) {
    super.receiveDamage(amtOfDmg);
    if (this.healthArg > 0){
      return `${this.name} has received DAMAGE points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(heathArg, strengthArg);
  }

  receiveDamage(amtOfDmg){
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}


// // War
// class War {
//   constructor() {
//     this.vikingArmy = [];
//     this.saxonArmy = [];
//   }

//   addViking(aViking) {
//     this.vikingArmy.push(aViking);
//   }

//   addSaxon(aSaxon) {
//     this.saxonArmy.push(aSaxon);
//   }

//   vikingAttack() {
//     let randomSaxNumber = Math.floor(Math.random() * this.saxonArmy.length);
//     let randomSaxon = this.saxonArmy[randomSaxNumber];
//     let randomVikeNumber = Math.floor(Math.random() * this.vikingArmy.length);
//     let randomViking = this.vikingArmy[randomVikeNumber];
//     let result = randomSaxon.receiveDamage(randomViking.attack());

//     if (randomSaxon.health <= 0) {
//       this.saxonArmy.splice(randomSaxNumber, 1);
//     }
//     return result;
//   }

//   saxonAttack() {
//     let randomSaxNumber = Math.floor(Math.random() * this.saxonArmy.length);
//     let randomSaxon = this.saxonArmy[randomSaxNumber];
//     let randomVikeNumber = Math.floor(Math.random() * this.vikingArmy.length);
//     let randomViking = this.vikingArmy[randomVikeNumber];
//     let result = randomViking.receiveDamage(randomSaxon.attack());

//     if (randomViking.health <= 0) {
//       this.vikingArmy.splice(randomVikeNumber, 1);
//     }
//     return result;
//   }

//   showStatus() {
//     if (this.saxonArmy.length === 0) {
//       return "Vikings have won the war of the century!";
//     } else if (this.vikingArmy.length === 0) {
//       return "Saxons have fought for their lives and survive another day...";
//     } else {
//       return "Vikings and Saxons are still in the thick of battle.";
//     }
//   }
}
