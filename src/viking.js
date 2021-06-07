// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}
// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry(){
    return (`Odin Owns You All!`)
  }
}
// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
      if (this.health > 0) {
        return (`A Saxon has received ${damage} points of damage`)
      } else {
        return(`A Saxon has died in combat`)
      }
  }
}

//WAR
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
addViking(Viking) {
   this.vikingArmy.push(Viking)
}
addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
};

callTenVikings () {
  for (var i = 0; i < 10; i++) {
    addViking(); 
  };
}
 callTenSaxons () {
  for (var i = 0; i < 10; i++) {
    addSaxon(); 
  }
}  
vikingAttack() {
  let vikingPosition = Math.floor(Math.random() * this.vikingArmy.length)
  let randomViking = this.vikingArmy[vikingPosition]
  let saxonPosition = Math.floor(Math.random() * this.saxonArmy.length)
  let randomSaxon = this.saxonArmy[saxonPosition]
  let result = randomSaxon.receiveDamage(randomViking.strength)
  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(saxonPosition, 1)
  }
  return result 
}

saxonAttack() {
  let vikingPosition = Math.floor(Math.random() * this.vikingArmy.length)
  let randomViking = this.vikingArmy[vikingPosition]
  let saxonPosition = Math.floor(Math.random() * this.saxonArmy.length)
  let randomSaxon = this.saxonArmy[saxonPosition]
  let result = randomViking.receiveDamage(randomSaxon.strength)
  if (randomViking.health <= 0) {
    this.vikingArmy.splice(vikingPosition, 1)
  }
  return result 
}


  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    } 
    return "Vikings and Saxons are still in the thick of battle."
  }
}
  


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
