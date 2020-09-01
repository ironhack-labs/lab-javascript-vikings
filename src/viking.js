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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
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
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    var result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      let deadSaxon = this.saxonArmy.indexOf(saxon);
      this.saxonArmy.splice(deadSaxon);
    }

    return result;
  }
  saxonAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    var result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      let deadViking = this.vikingArmy.indexOf(viking);
      this.vikingArmy.splice(deadViking);
    }
    return result;
  }

  // SUPER BONUS
//   attack(soldier) {
//     let saxon = this.saxonArmy[
//       Math.floor(Math.random() * this.saxonArmy.length)
//     ];
//     let viking = this.vikingArmy[
//       Math.floor(Math.random() * this.vikingArmy.length)
//     ];

//     // vicking attack
//     if ((soldier = "viking")) {
//       var resultOfVickingAttack = saxon.receiveDamage(viking.strength);

//       if (saxon.health <= 0) {
//         let deadSaxon = this.saxonArmy.indexOf(saxon);
//         this.saxonArmy.splice(deadSaxon);
//       }
//       return resultOfVickingAttack;

//     } else {

//       // saxon attack
//       var resultOfSaxonAttack = viking.receiveDamage(saxon.strength);

//       if (viking.health <= 0) {
//         let deadViking = this.vikingArmy.indexOf(viking);
//         this.vikingArmy.splice(deadViking);
//       }
//       return resultOfSaxonAttack;
//     }
//   }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
