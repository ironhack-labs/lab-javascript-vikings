// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(theDamage) {
      this.health -= theDamage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
     super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
    if (this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`
    } else return `${this.name} has died in act of combat`;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    this.health -= theDamage
    if (this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`
    } else return `A Saxon has died in combat`;
  }
}

// War
 //  let viking1 = new Viking(`viking1`, 100, 25)
 //  let saxon1 = new Saxon(75, 75)
 function selectRandom(object) {
  let randomNumber = Math.floor(Math.random() * object.length)
return object[randomNumber];
}
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
  this.vikingArmy.push(viking)
  };
  addSaxon(saxon){
  this.saxonArmy.push(saxon)
  };
  vikingAttack(){
  let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    recieveDamage(randomSaxon) * randomViking.strength
    if (saxon.health === 0){
      randomSaxon.splice(0, )
    }
  };
  saxonAttack(){};
  showStatus(){};
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
