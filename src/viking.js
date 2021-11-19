// Soldier
class Soldier {
constructor(health, strength){
  this.health=health;
  this.strength=strength;
}
attack(){
  return this.strength
}

receiveDamage(damage){
  this.health-=damage
}
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
super(health,strength);
this.name=name;
  }
receiveDamage(damage){
  this.health-=damage;
  if (this.health>0){
    return `${this.name} has received ${damage} points of damage`;
  }else{
    return `${this.name} has died in act of combat`;
  }
}
  battleCry(){
    return "Odin Owns You All!";
  }
}



// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
 this.health-=damage;
 if (this.health>0){
    return `A Saxon has received ${damage} points of damage`;
  }else{
    return  "A Saxon has died in combat";
  }
}
  }


// War
class War {
constructor(){
  this.vikingArmy =[];
  this.saxonArmy=[];
}
addViking(viking){
this.vikingArmy.push(viking);
  }

addSaxon(saxon){
this.saxonArmy.push(saxon);
}

vikingAttack(){
let saxonArmyRandom=Math.floor(this.saxonArmy.length*Math.random());
 let randomSaxon = this.saxonArmy[saxonArmyRandom];

 let vikingArmyRandom = Math.floor(this.vikingArmy.length*Math.random());
  let randomViking = this.vikingArmy[vikingArmyRandom];

let attack = randomSaxon.receiveDamage(randomViking.strength);

  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(saxonArmyRandom, 1)};
  return attack;
}

saxonAttack(){
let vikingArmyRandom=Math.floor(this.vikingArmy.length*Math.random());
  let randomViking=this.vikingArmy[vikingArmyRandom];

let saxonArmyRandom=Math.floor(this.saxonArmy.length*Math.random());
 let randomSaxon = this.saxonArmy[saxonArmyRandom];

 let attack = randomViking.receiveDamage(randomSaxon.strength);

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(vikingArmyRandom, 1)};
  return attack;
}
showStatus(){
if(this.saxonArmy.length===0){
  return "Vikings have won the war of the century!";
} 
if (this.vikingArmy.length===0){
  return "Saxons have fought for their lives and survived another day...";

} else if(this.vikingArmy.length>=1 && this.saxonArmy.length>=1 ) {
  "Vikings and Saxons are still in the thick of battle.";
}
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
