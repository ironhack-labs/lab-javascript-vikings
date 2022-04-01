// Soldier
//ignore the attack method github after doing it once, for the viking you just extend it 
class Soldier {
constructor(health, strength) {
  this.health = health;
  this.strength = strength;
}

attack(){
  return this.strength;
}

receiveDamage(thedamage){
  this.health = this.health - thedamage;
} 
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength){ 
  super(health,strength)
  this.name = name;
  }

  receiveDamage(thedamage){
  this.health = this.health - thedamage;
  if(this.health > 0){
    return `${this.name} has received ${thedamage} points of damage`;
  }else if (this.health === 0){
    return `${this.name} has died in act of combat`;
  }
  }
  attack (){
    return this.strength;
  }

  battleCry(){
  return "Odin Owns You All!";
  } 
}

// Saxon
class Saxon extends Soldier {
constructor(health, strength){
super(health,strength);

  }
  attack(){
  return this.strength;
  }

  receiveDamage(thedamage){
    this.health = this.health - thedamage;
    if(this.health > 0){
      return `A Saxon has received ${thedamage} points of damage`;
    }else if (this.health === 0){
      return `A Saxon has died in combat`
    };
    }

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
  viking++;
  }

  addSaxon(saxon){
  saxon++;
  }

  vikingAttack(){}

  saxonAttack(){}

  showStatus(){}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
