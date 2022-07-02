// Soldier
class Soldier {
  constructor(health, strength) {
  this.health = health;
  this.strength = strength;
  }
  
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    
    super (health, strength);
    this.name = name;
  }
  attack(){
     return (this.strength);}

  receiveDamage(damage){
    this.health -= damage;
if (this.health != 0){
  return `${this.name} has received ${damage} points of damage`;
}
else {
  return `${this.name} has died in act of combat`;
}
}
battleCry(){
  return `Odin Owns You All!`;
}
  }
  

// Saxon
class Saxon extends Soldier{
  attack(){
    return (this.strength);}

 receiveDamage(damage){
   this.health -= damage;
  if (this.health != 0){
    return `A Saxon has received ${damage} points of damage`;
  }
  else {
    return `A Saxon has died in combat`;
  }

}}


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);

  };

  addSaxon(saxon){
this.saxonArmy.push(saxon);
  };

  randomSoldier(armyLength) { 
    return Math.floor(armyLength * Math.random())
  }
  vikingAttack(){
    const viking = this.vikingArmy[this.randomSoldier(this.vikingArmy.length)]; 
    const saxonIndex = this.randomSoldier(this.saxonArmy.length);
    const saxon = this.saxonArmy[saxonIndex]; 

    return this.attack(viking, saxon, this.saxonArmy, saxonIndex)
  };

  saxonAttack(){
    const vikingIndex = this.randomSoldier(this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex]; 
    const saxon = this.saxonArmy[this.randomSoldier(this.saxonArmy.length)]; 

    return this.attack(saxon, viking, this.vikingArmy, vikingIndex) 
  };

  attack(attacker, attacked, attackedArmy, attackedIndex) { 
    const damageResult = attacked.receiveDamage(attacker.strength)
    
    if (attacked.health <= 0) {
      attackedArmy.splice(attackedIndex, 1)
    }
    
    return damageResult;
  }

  showStatus(){
    if(this.saxonArmy.length <= 0){
      return 'Vikings have won the war of the century!'
    }else if(this.vikingArmy.length <= 0){
     return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  };
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
