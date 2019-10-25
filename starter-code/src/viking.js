
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

// // Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// // Saxon

class Saxon extends Soldier {
  contructor (health, strength) {
    // super(health, strength);
    // this.health = health
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// // Math.round(Math.random * vikingArmy.length)
// // Math.round(Math.random * saxonArmy.length)

// let vikingArmy = [];
// let saxonArmy = [];



// // War
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

  // vikingAttack() {
  //   let Viking = this.vikingArmy[Math.round(Math.random * this.vikingArmy.length)];
  //   let Saxon = this.saxonArmy[Math.round(Math.random * this.saxonArmy.length)];
  //   this.Saxon.receiveDamage(this.Viking.attack());
  //   if (this.Saxon.health <= 0) {
  //     this.saxonArmy.splice[(attackedSaxon, 1)];
  //   }
  // }

  // vikingAttack() {
  //   this.attackingViking = this.vikingArmy[Math.round(Math.random * this.vikingArmy.length)];
  //   this.attackedSaxon = this.saxonArmy[Math.round(Math.random * this.saxonArmy.length)];

  //   this.attackedSaxon.receiveDamage(this.attackingViking.attack())

  //   if (this.Saxon.health <= 0) {
  //     this.saxonArmy.splice[(attackedSaxon, 1)];
  //   }
  // }
  vikingAttack() {
    let attackingViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let attackedSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    let damaging = attackedSaxon.receiveDamage(attackingViking.strength);

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxon, 1);
    }
    return damaging;
  }

  saxonAttack() {
    let attackingSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let attackedViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let damaging = attackedViking.receiveDamage(attackingSaxon.strength);

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedViking, 1);
    }
    return damaging;
  }

  // saxonAttack() {
  //   let attackingSaxon = this.saxonArmy[
  //     Math.floor(Math.random() * this.saxonArmy.length)
  //   ];
  //   let attackedViking = this.vikingArmy[
  //     Math.floor(Math.random() * this.vikingArmy.length)
  //   ];

  //   let damaging = attackedViking.receiveDamage(attackingSaxon.strength);

  //   if (attackedViking.health - attackingSaxon.strength <= 0) {
  //     this.vikingArmy.splice(attackedViking, 1);
  //   }
  //   return damaging;
  // }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// vikingAttack() {

//     vikingArmy[Math.round(Math.random * vikingArmy.length)].attack(this.strength)
//     Math.round(Math.random * saxonArmy.length).receiveDamage()

// }

// / failed saxon
// class Saxon extends Soldier {
//     contructor(...args) {
//       super(...args);
//     }