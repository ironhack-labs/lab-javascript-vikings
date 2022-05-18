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
    return this.attack(this.vikingArmy, this.saxonArmy, 'viking');
  }

  saxonAttack(){
    return this.attack(this.saxonArmy, this.vikingArmy, 'saxon');
  }

  attack(attackingArmy = [], defendingArmy = [], typeArmy = ''){
    const respond = defendingArmy[this.getRandomNumber(defendingArmy)].receiveDamage(attackingArmy[this.getRandomNumber(attackingArmy)].attack());
    switch(typeArmy){
      case 'viking':
        this.saxonArmy = defendingArmy.filter((defender) => defender.health > 0);
        break;
      case 'saxon':
        this.vikingArmy = defendingArmy.filter((defender) => defender.health > 0);
        break;
      default:
        break;
    }
    return respond;
  }

  showStatus(){
    if(!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

  getRandomNumber(arraySoldiers) {
    return Math.floor(Math.random() * arraySoldiers.length);
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
