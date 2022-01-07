// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier{
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

addViking(Viking) {
  this.vikingArmy.push(Viking);
}

addSaxon(Saxon) {
  this.saxonArmy.push(Saxon);
}

vikingAttack() {
    let attacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let defender = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let battleScore = defender.receiveDamage(attacker.strength);
    if (defender.health<=0) {
       this.saxonArmy.splice(this.saxonArmy.indexOf(defender),1);
    }
    
    return battleScore;
}

saxonAttack() {
   let attacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
   let defender = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
   let battleScore = defender.receiveDamage(attacker.strength);
   if (defender.health<=0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(defender),1);
 }
 return battleScore;

}

//--- BONUS ITERATION 5 ---
//try to create one generic method and call it in the case of vikingAttack and in the case of saxonAttack instead of using almost the same code for both methods.

 attack(attackerArmy,defenderArmy) {
  let attacker = attackerArmy[Math.floor(Math.random()*attackerArmy.length)];
  let defender = defenderArmy[Math.floor(Math.random()*defenderArmy.length)]
  let battleScore = defender.receiveDamage(attacker.strength);
  if (defender.health<=0) {
   defenderArmy.splice(defenderArmy.indexOf(defender),1);
}
return battleScore;

 }
 
//------------------------------------

showStatus() {
   if (this.saxonArmy.length===0) {
     return `Vikings have won the war of the century!`
   }

   if (this.vikingArmy.length===0){
     return `Saxons have fought for their lives and survived another day...`;
   }

   return `Vikings and Saxons are still in the thick of battle.`

}

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
