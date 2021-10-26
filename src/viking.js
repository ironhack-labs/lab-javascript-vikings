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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy =[];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }

  attack(attackers, defenders) {
    const strength =  this.getRndSoldier(attackers).strength;
    const defender = this.getRndSoldier(defenders);
    const result = defender.receiveDamage(strength);
    this.removeDeadSoliers();
    return result;
  }

  showStatus() {
    if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
    if(this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';
    return 'Vikings and Saxons are still in the thick of battle.';
  }

  getRndSoldier(army){
    return army[Math.floor(Math.random() * army.length)];
  }

  removeDeadSoliers(){
    this.vikingArmy = this.vikingArmy.filter(v => v.health > 0);
    this.saxonArmy = this.saxonArmy.filter(s => s.health > 0);
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
