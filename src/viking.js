// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {

  attack(){
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    const respond = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return respond;
  }
  saxonAttack(){
    const respond = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return respond;
  }
  showStatus(){
    if(!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
