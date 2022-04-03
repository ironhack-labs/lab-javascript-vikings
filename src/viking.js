// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }
  attack() {
    console.log(this.strength)
    return this.strength
  };

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
    }
  };
}

const conan = new Soldier(30, 30);
conan.receiveDamage(10);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {

    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health === 0) {
      return `${this.name} has died in act of combat`
    }
  };
  battleCry() {
    return "Odin Owns You All!"
  };


}
const vikingStatus = new Viking('Duncan', 45, 45);
vikingStatus.receiveDamage(45);
vikingStatus.battleCry()


// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health === 0) {
      return "A Saxon has died in combat"
    }
  }
}



// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(number) {
    this.vikingArmy.push(number);
  };


  addSaxon(number){
    this.saxonArmy.push(number)
  };


  

  vikingAttack(){
    saxonMath.random(this.saxonArmy).receiveDamage(vikingStatus.strength)
  }



};












// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
