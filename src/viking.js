// Soldier
class Soldier {
  constructor(firstArg, secArg) {
    this.health = firstArg;
    this.strength = secArg;
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
  constructor(firstArg, secArg, thirdArg) {
    super(secArg, thirdArg);
    this.name = firstArg;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

      if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }else{ 
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}


// Saxon
class Saxon extends Soldier {


  receiveDamage(damage) {
    super.receiveDamage(damage);

      if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }else{ 
      return `A Saxon has died in combat`;
    } 
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(aViking) {
  this.vikingArmy.push(aViking);
}

  addSaxon(aSaxon) {
  this.saxonArmy.push(aSaxon);
}

  vikingAttack() {
    let saxonReceive = Viking.secArg;

    if (this.Viking.health < 0) {
      this.Viking = " ";
    }

    this.Viking.receiveDamage.value = this.Saxon.strength.value;
  }

  saxonAttack() {
    let vikingReceive = Saxon.firstArg;

    if (this.Saxon.health < 0) {
      this.Saxon = " ";
    }

    this.Saxon.receiveDamage.value = this.Viking.strength.value;
  }

  showStatus() {}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
