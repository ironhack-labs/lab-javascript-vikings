// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
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
    return this.health > 1 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 1 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
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
  setArena(attackerArmy, victimArmy) {
    const attacker = attackerArmy[Math.floor(attackerArmy.length * Math.random())];
    const victim = victimArmy[Math.floor(victimArmy.length * Math.random())];
    const victimDamageStatus = victim.receiveDamage(attacker.attack());
    victimArmy.forEach((victm, indx) => {if(victm.health < 1) victimArmy.splice(indx, 1)});
    return victimDamageStatus;
  }
  vikingAttack() {
    return this.setArena(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.setArena(this.saxonArmy, this.vikingArmy);
  }
  showStatus() {
    return !this.saxonArmy.length ? `Vikings have won the war of the century!` : !this.vikingArmy.length ? `Saxons have fought for their lives and survived another day...` : `Vikings and Saxons are still in the thick of battle.`
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
