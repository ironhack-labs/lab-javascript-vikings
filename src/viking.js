// Soldier
class Soldier {
  constructor(health, strength){
    this.health   = health;
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
    super(health, strength);
    this.name = name;
  }
  
  battleCry(){
    return "Odin Owns You All!";
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
}

// Saxon
class Saxon extends Soldier {
  //constructor(){}

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
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
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let saxIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let sax    = this.saxonArmy [saxIndex]
    //safe the Index of the sax, even if you search witch indexOF
    //there could be two saxs with the same name!

    //simple attack
    let result= sax.receiveDamage(viking.attack())
    //dead??
    if (sax.health <= 0) {
      this.saxonArmy.splice(saxIndex,1)
    }
    return result
  }
  saxonAttack(){
    let sax = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let viking    = this.vikingArmy [vikingIndex]

    //simple attack
    let result = viking.receiveDamage(sax.attack())
    //dead??
    if (viking.health <= 0) {
    this.vikingArmy.splice(vikingIndex,1)
    }
    return result
  }

  showStatus(){
    if (this.saxonArmy.length === 0) { return "Vikings have won the war of the century!"};
    if (this.vikingArmy.length === 0) { return "Saxons have fought for their lives and survived another day..."};
    return "Vikings and Saxons are still in the thick of battle."
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
