// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(dmg){
    this.health -= dmg
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(vikingDmg){
    this.health -= vikingDmg;
    // ask about order of this.health and vikingDmg
    if (this.health > 0){
      return `${this.name} has received ${vikingDmg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
} 

// Saxon
class Saxon extends Soldier {
  receiveDamage(saxonDmg){
    this.health -= saxonDmg;
    if(this.health > 0){
      return `A Saxon has received ${saxonDmg} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){

  }
  saxonAttack(){}
  showStatus(){}
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
