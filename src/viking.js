// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name
  } 
  receiveDamage(damage) {
this.health= this.health - damage
  if (this.health > 0 ) {
    return `${this.name} has received ${damage} points of damage`
  } else if (this.health === 0){ 
return `${this.name} has died in act of combat`
  }
  }
  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier { 
  receiveDamage(damage) { 
    this.health= this.health - damage
    if (this.health > 0 ) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health === 0) {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    let randomIndex1 = Math.random * this.saxonArmy.length;
    let index1 = Math.floor(randomIndex1);
    let randomSaxon = this.saxonArmy[index1];
    let randomIndex2 = Math.random * this.vikingArmy.length;
    let index2 = Math.floor(randomIndex2);
    let randomViking = this.vikingArmy[index2];
  }
  saxonAttack(){
    let randomIndex1 = Math.random * this.saxonArmy.length;
    let index1 = Math.floor(randomIndex1);
    let randomSaxon = this.saxonArmy[index1];
    let randomIndex2 = Math.random * this.vikingArmy.length;
    let index2 = Math.floor(randomIndex2);
    let randomViking = this.vikingArmy[index2]
  }
  showStatus(){

  }
  

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
