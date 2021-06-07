// Soldier
class Soldier {
  constructor(health, strength){
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
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage

    if (this.health !== 0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage

    if(this.health !== 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
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

  vikingAttack() {
    let randomIndexViking =  Math.floor(Math.random() * this.vikingArmy.length)
    let randomIndexSaxon =  Math.floor(Math.random() * this.saxonArmy.length)
    let takeTheDamage  = this.saxonArmy[randomIndexSaxon].receiveDamage(this.vikingArmy[randomIndexViking].attack())
    
    if(this.saxonArmy[randomIndexSaxon].health <= 0){
       this.saxonArmy.splice(randomIndexSaxon, 1)
    }
    return takeTheDamage;
  }

   saxonAttack(){
    let randomIndexViking =  Math.floor(Math.random() * this.vikingArmy.length)
    let randomIndexSaxon =  Math.floor(Math.random() * this.saxonArmy.length)
    let takeTheDamage = this.vikingArmy[randomIndexViking].receiveDamage(this.saxonArmy[randomIndexSaxon].attack())
    if(this.vikingArmy[randomIndexViking].health <= 0){
      this.vikingArmy.splice(randomIndexViking,1)
    }
    return takeTheDamage;
  }

  // showStatus()
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}























