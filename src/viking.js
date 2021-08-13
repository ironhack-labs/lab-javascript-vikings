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
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

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

  selectRandomSoldier(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const randomSoldier = arr[random];
    return randomSoldier;
  }

  vikingAttack() {
    const randomSaxon = this.selectRandomSoldier(this.saxonArmy);
    const randomViking = this.selectRandomSoldier(this.vikingArmy);
  
    const damage = randomViking.strength;
    if (randomSaxon.health <= damage) {
      const indexSaxon = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(indexSaxon, 1);
    }
    
    return randomSaxon.receiveDamage(damage);
  }

  saxonAttack() {
    const randomSaxon = this.selectRandomSoldier(this.saxonArmy);
    const randomViking = this.selectRandomSoldier(this.vikingArmy);
  
    const damage = randomSaxon.strength;
    if (randomViking.health <= damage) {
      const indexViking = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(indexViking, 1);
    }

    return randomViking.receiveDamage(damage);
  } 

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
