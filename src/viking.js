// Soldier
class Soldier {
  constructor(health, strength){
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
class Viking extends Soldier {
  constructor(name, health, strength){
    super (health, strength)
    this.name = name
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
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
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
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
      let damageSaxon = this.saxonArmy.length * Math.random();
      let damageSaxonIndex = Math.floor(damageSaxon)
      let randomSaxon = this.saxonArmy[damageSaxonIndex]

      let attackViking = this.vikingArmy[Math.floor(this.vikingArm.length * Math.random())];
  
      let result = randomSaxon.receiveDamage(attackViking.attack())

      if(damageSaxon.health <= 0) {this.saxonArmy.splice(damageSaxonIndex)}

      return result;
    }
    saxonAttack(){
      
    }
    
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
