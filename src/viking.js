// Soldier
class Soldier { 
  constructor (health, strength) { 
    this.health = health; 
    this.strength = strength; 
  }

  attack() { 
    return this.strength; 
  }
  
  receiveDamage(damage) { 
  this.health -= damage; 
 }
}

// Viking
class Viking extends Soldier { 
  constructor(name, health, strength) {
    super (health, strength); 
    this.name = name; 
  }

  attack() { 
    return this.strength;
  }
  
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0 ) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random () * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random () * this.vikingArmy.length);

    let vikingDamage = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1) 
    } 
    return vikingDamage;
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random () * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random () * this.vikingArmy.length);

    let saxonDamage = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)
    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1) 
    } 
    return saxonDamage;
  }


  showStatus() {
    if (this.saxonArmy.length === 0) {
     return "Vikings have won the war of the century!" 
  } else if (this.vikingArmy.length === 0) {
     return "Saxons have fought for their lives and survived another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
    }
  }
} 


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
