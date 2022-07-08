// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;

    if(this.health > 0){
      return (`${this.name} has received ${theDamage} points of damage`);
  } else {
    return (`${this.name} has died in act of combat`);
  }
  }
  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;

    if(this.health > 0){
      return (`A Saxon has received ${theDamage} points of damage`);
  } else {
    return (`A Saxon has died in combat`);
  }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy  = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  
  }
  
  vikingAttack(){
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let fight = saxon.receiveDamage(viking.attack());
     
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    } 
    return fight;
  }
  
  saxonAttack(){
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let fight = viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
      this.vikingArmy.splice(viking, 1)
    }
    return fight;
  }
  
      showStatus(){
        if(this.vikingArmy.length != 0 && this.saxonArmy.length != 0){
          return "Vikings and Saxons are still in the thick of battle.";
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0){
          return "Saxons have fought for their lives and survived another day..."
        } else {
          return "Vikings have won the war of the century!"
        } 
      }
    }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
