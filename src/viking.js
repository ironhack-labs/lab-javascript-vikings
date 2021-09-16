// Soldier
class Soldier {
  constructor (health, strength) {
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
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

const viking1 = new Viking("foo", 50, 70); 
console.log(viking1)

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
	  this.health -= damage;
	  if (this.health > 0) {
	  	return `A Saxon has received ${damage} points of damage`;
	  }
	  return `A Saxon has died in combat`;	
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
    let chosenSaxon = this.saxonArmy[Math.trunc(Math.random() * this.saxonArmy.length)];
    let chosenViking = this.vikingArmy[Math.trunc(Math.random() * this.vikingArmy.length)];
    let saxonCalling = chosenSaxon.receiveDamage(chosenViking.strength);
  	// for (let i = 0; i < this.saxonArmy.length; i ++) {
    //   if (saxonSoldier.health <= 0) {
    //     this.saxonArmy.splice(i, 1);
    //   }
    // }
    this.saxonArmy = this.saxonArmy.filter(saxonEl => saxonEl.health > 0);
    return saxonCalling;
  }
  saxonAttack() {
    let chosenSaxon = this.saxonArmy[Math.trunc(Math.random() * this.saxonArmy.length)];
    let chosenViking = this.vikingArmy[Math.trunc(Math.random() * this.vikingArmy.length)];
    let vikingCalling = chosenViking.receiveDamage(chosenSaxon.strength);
  	// for (let i = 0; i < this.saxonArmy.length; i ++) {
    //   if (saxonSoldier.health <= 0) {
    //     this.saxonArmy.splice(i, 1);
    //   }
    // }
    this.vikingArmy = this.vikingArmy.filter(vikingEl => vikingEl.health > 0);
    return vikingCalling;
  }
  
  attack(attacker, victim) {
    let chosenSaxon = this.saxonArmy[Math.trunc(Math.random() * this.saxonArmy.length)];
    let chosenViking = this.vikingArmy[Math.trunc(Math.random() * this.vikingArmy.length)];
    if (attacker.name) {
      let victimCalling = chosenSaxon.receiveDamage(chosenViking.strength);
      this.saxonArmy = this.saxonArmy.filter(saxonEl => saxonEl.health > 0);
    } 
    else {
      let victimCalling = chosenViking.receiveDamage(chosenSaxon.strength);
      this.vikingArmy = this.vikingArmy.filter(vikingEl => vikingEl.health > 0);
    }
    return victimCalling;
  }
  
  showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survived another day...`;
		} else {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
