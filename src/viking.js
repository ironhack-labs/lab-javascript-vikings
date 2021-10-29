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
    let string = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health < 1 ) {
      this.saxonArmy.splice(randomS,1);
    }
    return string;
  }

  saxonAttack() {
    let randomS = Math.floor(this.saxonArmy.length * Math.random());
    let randomV = Math.floor(this.vikingArmy.length * Math.random());
    let saxon = this.saxonArmy[randomS];
    let viking = this.vikingArmy[randomV];
    let string = viking.receiveDamage(saxon.attack());

    if(viking.health < 1) {
      this.vikingArmy.splice(randomV,1);
    }
    return string;
  }

  showStatus () {
    if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === this.saxonArmy.length && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
