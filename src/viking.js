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

/* 
This doesn't work, need to find out why.

selectCombatants() {
    let combatantsArray = [Math.floor(Math.random() * this.vikingArmy.length), Math.floor(Math.random() * this.saxonArmy.length)];
    return combatantsArray; 
 }
*/

addViking(viking) {
this.vikingArmy.push(viking);
}

addSaxon(saxon) {
  this.saxonArmy.push(saxon);
}

vikingAttack() {
 let vikingFighter = Math.floor(Math.random() * this.vikingArmy.length);
 let saxonFighter = Math.floor(Math.random() * this.saxonArmy.length);
 let fightResult = this.saxonArmy[saxonFighter].receiveDamage(this.vikingArmy[vikingFighter].strength);
 if (this.saxonArmy[saxonFighter].health <= 0) {
  this.saxonArmy.splice(saxonFighter, 1);
} 
return fightResult;

  /*const combatants = selectCombatants();
  this.saxonArmy[combatants[1]].receiveDamage(this.vikingArmy[combatants[0]].strength);
  if (this.saxonArmy[combatants[1]].health <= 0) {
    this.saxonArmy.splice(combatants[1], 1);
  }
  return this.saxonArmy[combatants[1]].receiveDamage(this.vikingArmy[combatants[0]].strength);

  */
}

saxonAttack() {
 let vikingFighter = Math.floor(Math.random() * this.vikingArmy.length);
 let saxonFighter = Math.floor(Math.random() * this.saxonArmy.length);
 let fightResult = this.vikingArmy[vikingFighter].receiveDamage(this.saxonArmy[saxonFighter].strength);
 if (this.vikingArmy[vikingFighter].health <= 0) {
  this.vikingArmy.splice(vikingFighter, 1);
} 
return fightResult;
}

doBattle(attackingArmy, defendingArmy) {
   if (attackingArmy === defendingArmy) {
     return "This army ain't gonna fight itself";
   }
   let attackingFighter = Math.floor(Math.random() * this.attackingArmy.length);
   let defendingFighter = Math.floor(Math.random() * this.defendingArmy.length);
   let fightResult = this.attackingArmy[attackingFighter].receiveDamage(this.defendingArmy[defendingFighter].strength);
 if (this.attackingArmy[attackingFighter].health <= 0) {
  this.attackingArmy.splice(attackingFighter, 1);
} 
return fightResult;
 
}

showStatus() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survived another day..."
  } else {return "Vikings and Saxons are still in the thick of battle."}

}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
