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
    // Question - can we just do super() to inherit all the parameters and arguments from the parent class, or do the parameters always have to be listed?
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
      return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
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
  vikingArmy = [];
  saxonArmy = [];

addViking(viking) {
this.vikingArmy.push(viking);
}

addSaxon(saxon) {
  this.saxonArmy.push(saxon);
}

selectCombatants() {
    let combatantsArray = [Math.floor(Math.random() * this.vikingArmy.length), Math.floor(Math.random() * this.saxonArmy.length)];
    return combatantsArray;
  }

vikingAttack() {
  let combatants = selectCombatants();
  this.saxonArmy[combatants[1]].receiveDamage(this.vikingArmy[combatants[0]].strength);
  if (saxonArmy[combatants[1]].health <= 0) {
    this.saxonArmy.splice(combatants[1], 1);
  }
  return this.saxonArmy[combatants[1]].receiveDamage(this.vikingArmy[combatants[0]].strength);
}
saxonAttack() {
  
}
showStatus() {
  
}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
