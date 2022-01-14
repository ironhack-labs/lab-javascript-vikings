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
    // how do I call parent class method here instead of re-defining? 
    this.health -= damage;
    if (this.health > 0) {
      return(`${this.name} has received ${damage} points of damage`)
    } else {
      return(`${this.name} has died in act of combat`)
    }
  }

  battleCry() {
    return('Odin Owns You All!')
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage) {
    // how do I call parent class method here instead of re-defining? 
    this.health -= damage;
    if (this.health > 0) {
      return(`A Saxon has received ${damage} points of damage`)
    } else {
      return('A Saxon has died in combat')
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  }

  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  }

  vikingAttack() {

    // where would I best define this function so that I don't define it twice?
    function pickRandom(army) {
      const randIndex = Math.floor(Math.random() * army.length);
      return army[randIndex];
    }

    const randomViking = pickRandom(this.vikingArmy);
    const randomSaxon = pickRandom(this.saxonArmy);

    const returnMsg = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
    }

    return returnMsg;
  }

  saxonAttack() {
    
    // this is basically the same function as viking - 
    // what would be an elegant way to avoid duplicate code here?

    // where would I best define this function so that I don't define it twice?
    function pickRandom(army) {
      const randIndex = Math.floor(Math.random() * army.length);
      return army[randIndex];
    }

    const randomViking = pickRandom(this.vikingArmy);
    const randomSaxon = pickRandom(this.saxonArmy);

    const returnMsg = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking))
    }

    return returnMsg;

  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } 
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    }

    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
