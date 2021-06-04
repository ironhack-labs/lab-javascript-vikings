// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength=strength;

  }
  attack(){
    return this.strength;
  }
  receiveDamage(takeDamage){
    this.health -= takeDamage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name = name;
  }
  receiveDamage(takeDamage){
    this.health -= takeDamage;
    if (this.health > 0){
      return `${this.name} has received ${takeDamage} points of damage`
    };
    if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(takeDamage){
    this.health -= takeDamage;
    if (this.health > 0){
      return `A Saxon has received ${takeDamage} points of damage`
    };
    if (this.health <= 0){
      return `A Saxon has died in combat`
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
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const rngViking = Math.floor(Math.random()*this.vikingArmy.length);
    const rngSaxon =  Math.floor(Math.random()*this.saxonArmy.length);
    const saxonArr = new Saxon(this.saxonArmy[rngSaxon].health, this.saxonArmy[rngSaxon].strength)

    this.saxonArmy[rngSaxon].receiveDamage(this.vikingArmy[rngViking].attack())
    if(this.saxonArmy[rngSaxon].health <= 0){
      this.saxonArmy.splice(rngSaxon, 1)
    }
    return saxonArr.receiveDamage(this.vikingArmy[rngViking].attack())
    



  }
  saxonAttack(){
    const rngViking = Math.floor(Math.random()*this.vikingArmy.length);
    const rngSaxon =  Math.floor(Math.random()*this.saxonArmy.length);
    const vikingArr = new Viking(this.vikingArmy[rngViking].name,this.vikingArmy[rngViking].health,this.vikingArmy[rngViking].strength)
    this.vikingArmy[rngViking].receiveDamage(this.saxonArmy[rngSaxon].attack())
    if(this.vikingArmy[rngViking].health ===0){
      this.vikingArmy.splice(rngViking,1)
    }
    return vikingArr.receiveDamage(this.saxonArmy[rngSaxon].attack())
  }
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
