// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health,
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(inflictedDamage) {
    this.health -= inflictedDamage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength) 
    this.name = name;
  }

  receiveDamage(inflictedDamage) {
    this.health -= inflictedDamage
    if (this.health > 0) {
      return `${this.name} has received ${inflictedDamage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
  
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(inflictedDamage) {
    this.health -= inflictedDamage;
    if (this.health > 0) {
      return `A Saxon has received ${inflictedDamage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [],
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  armyAttack(attacker) {
    if(attacker.toLowerCase() === 'vikings') {
      attackingArmy = this.vikingArmy;
      defendingArmy = this.saxonArmy
    }
    else {
      attackingArmy = this.saxonArmy
      defendingArmy = this.vikingArmy;
    }

    // Select random Viking & Saxon
    let randomAttacker = this.attackingArmy[Math.floor(Math.random() * this.attackingArmy.length)]
    let randomDefender = this.defendingArmy[Math.floor(Math.random() * this.defendingArmy.length)]
    
    let statement = randomDefender.receiveDamage(randomAttacker.strength)
    
    // Remove dead defenders
    if (randomDefender.health <= 0) {
      this.defendingArmy.splice(this.defendingArmy.indexOf(randomDefender), 1)
    }
    
    return statement
  }

  vikingAttack() {
    // Select random Viking & Saxon
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let statement = randomSaxon.receiveDamage(randomViking.strength)

    // Remove dead saxons from the army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
    }

    return statement
  }


  saxonAttack() {
        // Select random Viking & Saxon
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    
        let statement = randomViking.receiveDamage(randomSaxon.strength)
    
        // Remove dead saxons from the army
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(this.vikingArmy.indexOf(randomSaxon), 1)
        }
    
        return statement
  }

  showStatus() {
    if (this.saxonArmy.length && this.vikingArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
    else if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    else  {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
