// Soldier
//### Iteration 1: Soldier
//Modify the `Soldier` class and add 2 methods to it: `attack()`, and `receiveDamage()`.

class Soldier {
  constructor(health, strength) {
      this.health = health;
      this.strength = strength;
  }

  attack(){
    return (this.strength);
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
  super (health,strength);
  this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    let message = "";
    if (this.health>0){
    message = `${this.name} has received ${damage} points of damage`;
    } else {
    message = `${this.name} has died in act of combat`;
    }
    return (message);
  }
  
  battleCry() { 
    return ("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
      this.health = this.health - damage;
      let message = "";
      if (this.health>0){
      message = `A Saxon has received ${damage} points of damage`;
      } else {
      message = `A Saxon has died in combat`;
      }
      return (message);
    }

}

// War
class War {
  constructor () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  //SUPERBONUS

  genericAttack(attackerArmy, defenderArmy){
    let attacker = attackerArmy[Math.floor(Math.random () * attackerArmy.length)]; 
    let defender =  defenderArmy[Math.floor(Math.random () * defenderArmy.length)];
    let hit = attacker.strength;
    let message = defender.receiveDamage(hit);
    if (defender.health<=0){
    let defenderIndex = defenderArmy.indexOf (defender);
    defenderArmy.splice (defenderIndex,1);
    }
    return (message);
  }

  vikingAttack(){
    let viking = this.vikingArmy[Math.floor(Math.random () * this.vikingArmy.length)]; 
    let saxon =  this.saxonArmy [Math.floor(Math.random () * this.saxonArmy.length)];
    let hit = viking.strength;
    let message = saxon.receiveDamage(hit);
    if (message === `A Saxon has died in combat`){
    let saxonIndex = this.saxonArmy.indexOf (saxon);
    this.saxonArmy.splice (saxonIndex,1);
    }
    return (message);
  }

  saxonAttack(){
    let viking = this.vikingArmy[Math.floor(Math.random () * this.vikingArmy.length)]; 
    let saxon =  this.saxonArmy [Math.floor(Math.random () * this.saxonArmy.length)];
    let hit = saxon.strength;
    let message = viking.receiveDamage(hit);
    if (viking.health<=0){
    let vikingIndex = this.vikingArmy.indexOf (viking);
    this.vikingArmy.splice (vikingIndex,1);
    }
    return (message);
  }

  showStatus(){
    if (this.saxonArmy.length === 0){
      return ("Vikings have won the war of the century!");
    } else if (this.vikingArmy.length === 0) {
      return ("Saxons have fought for their lives and survived another day...");
    } else { 
      return ("Vikings and Saxons are still in the thick of battle.")
    }
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
