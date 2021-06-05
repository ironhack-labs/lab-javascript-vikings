// Soldier
class Soldier { 
constructor (health, strength) {
  this.health = health;
  this.strength = strength;
  }
} 

  attack () {
    return this.strength;
  }
  
  receiveDamange (damange) {
    this.health -= damange;
  }


// Viking
class Viking  extends Soldier {
  constructor (name, health, strength){
  this.name = name;
  }
}
receiveDamange (damange) {
  this.health -= damange;
  retunr this.health > 0
  ? `${this.name} has receive ${damage} points of damange`;
  : `${this.name} has died in combat`;
}

battleCry () {
  return "Odin owns you all"
}



// Saxon
class Saxon extends Soldier (){
  receiveDamange (damange) {
    this.health -= damange;
    return this.health > 0;
    ?`A Saxon has receive ${damange} points of damange`;
    : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
}

addViking (Viking){ 
  this.vikingArmy.push(Viking);
}

addSaxon (Saxon) {
  this.saxonArmy.push (Saxon);
}

vikingAttack () {
  let attacker = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.lenght)];
  let atackedSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.lenght)];
  if (atackedSaxon.receiveDamange(attacker.strength === "A Saxon has died in combat")){
    this.saxonArmy.splice(this.saxonArmy.indexOf(atackedSaxon),1);
  }
  return atackedSaxon.receiveDamange(attacker.strength);
}






saxonAttack () {
  let attacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.lenght)];
  let atackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.lenght)];
  atackedViking.receiveDamange(attacker.strength);
  if (this.vikingArmy.atackedViking.health <= 0){
    this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
  }
  return atackedViking.receiveDamange(attacker.strength);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
