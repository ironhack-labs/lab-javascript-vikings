// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
      return this.strength;
    }
    receiveDamage(theDamage) {
      this.health -= theDamage;
    }
  }
// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
      super(health,strength);
      this.name = name;
    }
    receiveDamage(theDamage) {
      this.health -= theDamage;
      if(this.health <= 0) {
      return `${this.name} has died in act of combat`;
      } 
      return `${this.name} has received ${theDamage} points of damage`;
      }
    
      battlecry() {
      return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if(this.health <= 0) {
    return `A Saxon has died in combat`;
    } 
    return `A Saxon has received ${theDamage} points of damage`;
    }

}

// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.VikingArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.saxonArmy[randomVikingIndex];

    const attack = randomSaxon.receiveDamage(randomViking.strength);
    
    if(attackResults === 'A Saxon has dies in combat'){
      this.saxonArmy.splice(randomSaxonIndex,1);
    }
    return attackResults;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
