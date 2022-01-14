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

  attack(whoIsAttacking) {
    
    function pickRandom(army) {
      const randIndex = Math.floor(Math.random() * army.length);
      return army[randIndex];
    }

    let attackingArmy;
    let victimArmy;

    switch (whoIsAttacking) {
      case 'Viking':
        attackingArmy = this.vikingArmy;
        victimArmy = this.saxonArmy;
        break;
      case 'Saxon':
        attackingArmy = this.saxonArmy;
        victimArmy = this.vikingArmy;
        break;
    }

    const attacker = pickRandom(attackingArmy);
    const victim = pickRandom(victimArmy);

    const returnMsg = victim.receiveDamage(attacker.attack());

    if (victim.health <= 0) {
      // should also modify property because array..
      victimArmy.splice(victimArmy.indexOf(victim));
    }

    return returnMsg
  }

  vikingAttack() {
    return this.attack('Viking');
  }

  saxonAttack() {
    return this.attack('Saxon');
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
