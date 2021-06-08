// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  //attack() {super.attack();} --why this does not work
 // attack() {
   // return this.strength;
  //}
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  };
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  };
  vikingAttack() {
    //1.chose a saxon at random
    let randomXon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //2.chose a viking at random
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //3. saxon receive damage = strength of viking
    let newHealth = randomXon.receiveDamage(randomVik.strength)
    //4. if saxon is dead, remove
    if (randomXon.health <= 0) {
      this.saxonArmy.splice(randomXon, 1);
    }
    //5.return result of calling receiveDamage() of a Saxon with the strength of a Viking
    return newHealth;
  };
  saxonAttack() {
    let randomXon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let newHealth = randomVik.receiveDamage(randomXon.strength)
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(randomVik, 1);
    }
    return newHealth;
  };
  showStatus() {
   if (this.saxonArmy.length == 0) {
     return `Vikings have won the war of the century!`
   }
   if (this.vikingArmy.length == 0) {
     return `Saxons have fought for their lives and survived another day...`
   }
   if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1 ) {
     return `Vikings and Saxons are still in the thick of battle.`
   }
  };
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
