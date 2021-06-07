// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage (theDamage) {
     this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
    receiveDamage(theDamage) {
      super.receiveDamage(theDamage); 
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor () {
   this.vikingArmy = [];
   this.saxonArmy = [];
  }
  addViking(newViking) {
   this.vikingArmy.push(newViking);
  }


  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
 
  vikingAttack() {
    
    const randomVikingIndex = Math.floor(Math.random * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
      
    const randomSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
      
  
      
    const result = randomSaxon.receiveDamage(strengthOfAViking);
    if (randomSaxon.health < 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

    saxonAttack() {
    
      const getSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
      const anySaxon = this.saxonArmy[getSaxonIndex];

      const getVikingIndex = Math.floor(Math.random * this.vikingArmy.length);
      const anyViking = this.vikingArmy[getVikingIndex];

      
      const result = anySaxon.receiveDamage(strengthOfASaxon);
      if (randomSaxon.health < 0) {
        this.saxonArmy.splice(getSaxonIndex, 1);
      }
      return result;
    }
  
   showStatus() {}

  }
    
  





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
