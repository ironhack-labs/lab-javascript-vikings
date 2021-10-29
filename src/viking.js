// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health ;
    this.strength = strength ;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  attack(){
    
    return super.attack();
  }

  receiveDamage(damage){
    super.receiveDamage(damage);
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  attack (){
    return super.attack()
  }

  receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy = [viking];
  }

  addSaxon(saxon) {
    this.saxonArmy = [saxon]
  }

  vikingAttack() {
    let randomS = Math.floor(this.saxonArmy.length * Math.random());
    let randomV = Math.floor(this.vikingArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomS];
    let randomViking = this.vikingArmy[randomV];
    randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health < 1 ) {
      this.saxonArmy.splice(randomS,1);
    }
    return randomSaxon.receiveDamage(randomViking.attack())

  }

  saxonAttack() {

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
