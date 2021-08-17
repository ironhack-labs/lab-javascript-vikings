// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(dmg){
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg){
    console.log(dmg)
    this.health -= dmg;
    if (this.health > 0){
      return (`${this.name} has received ${dmg} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(dmg){
    this.health -= dmg;
    if (this.health > 0){
      return (`A Saxon has received ${dmg} points of damage`)
    } else {
      return (`A Saxon has died in combat`)
    }
  } 
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){  
    this.saxonArmy.push(saxon);
    
  }
  vikingAttack(){
    console.log('VIKING ATTACK!')
    let saxon = this.saxonArmy[
      Math.floor(this.saxonArmy.length * Math.random())
    ];
    let viking = this.vikingArmy[
      Math.floor(this.vikingArmy.length * Math.random())
    ];
    
    console.log(viking);
    console.log(saxon);
    
    let fightResult = saxon.receiveDamage(viking.strength);
    
    console.log(saxon);
    
    // could also do with index and splice or smh like that
    this.saxonArmy = this.saxonArmy.filter(function(individual){
      return individual.health > 0;
    })
    
    console.log(this.saxonArmy)
    
    return (fightResult);
    
  }
  
  saxonAttack(){
    console.log('VIKING ATTACK!')
    let saxon = this.saxonArmy[
      Math.floor(this.saxonArmy.length * Math.random())
    ];
    let viking = this.vikingArmy[
      Math.floor(this.vikingArmy.length * Math.random())
    ];
    
    console.log(viking);
    console.log(saxon);
    
    let fightResult = viking.receiveDamage(saxon.strength);
    
    console.log(viking);
    
    // could also do with index and splice or smh like that
    this.vikingArmy = this.vikingArmy.filter(function(individual){
      return individual.health > 0;
    })
    
    console.log(this.vikingArmy)
    
    return (fightResult);
    
  }
  
  showStatus(){
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
