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

// console.log(soldierSly.receiveDamage(90))

// -----------------------------------------------------------------------------------------------

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}
const vikingStrong = new Viking('Harald', 200, 40);
// console.log(vikingStrong.receiveDamage(300))

// -----------------------------------------------------------------------------------------------

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}
const saxonNervous = new Saxon(200, 50);
// console.log(saxonNervous.receiveDamage(300))
// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let selectSaxon = selectRandom(this.saxonArmy);
    let selectViking = selectRandom(this.vikingArmy);
    let atackViking = selectSaxon.receiveDamage(selectViking.strength);
    if (selectSaxon.health <= 0) {
      let saxonIndex = this.saxonArmy.indexOf(selectSaxon);
      this.saxonArmy.splice(saxonIndex);
    }
    return atackViking;
  }
  saxonAttack() {
    let selectSaxon = selectRandom(this.saxonArmy);

    let selectViking = selectRandom(this.vikingArmy);
    let atackSaxon = selectViking.receiveDamage(selectSaxon.strength);
    if (selectViking.health <= 0) {
      let vikingIndex = this.vikingArmy.indexOf(selectViking);
      this.vikingArmy.splice(vikingIndex);
    }
    return atackSaxon;
  }
  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    Soldier,
    Viking,
    Saxon,
    War
  };
}

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let selectSoldier = array[randomIndex];
  return selectSoldier;
}