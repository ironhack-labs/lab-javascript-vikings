// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
    
  attack () {
      return this.strength;
  }
  receiveDamage (damage) {
    this.health -= damage;
  }
} 

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
     this.health -= damage;
     if (this.health > 0) {
       return `${this.name} has received ${damage} points of damage`
     }else if (this.health <= 0) {
       return `${this.name} has died in act of combat`
     }
  }
  battleCry () {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }else if (this.health <= 0) {
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
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let vikRan = Math.floor(Math.random() * (this.vikingArmy.length));
    let saxRan = Math.floor(Math.random() * (this.saxonArmy.length));
    
    let vivo= this.saxonArmy[saxRan].receiveDamage(this.vikingArmy[vikRan].strength);

    if (vivo == `A Saxon has died in combat`) {
      this.saxonArmy.splice(saxRan, 1);
    }
    return vivo;
  }
  saxonAttack() {
    let vikRan = Math.floor(Math.random() * (this.vikingArmy.length));
    let saxRan = Math.floor(Math.random() * (this.saxonArmy.length));
    
    let vivo= this.vikingArmy[vikRan].receiveDamage(this.saxonArmy[saxRan].strength);

    // if (vivo == `${this.vikingArmy[vikRan].name} has died in act of combat`) {
    //   this.vikingArmy.splice(vikRan, 1);
    // }
    this.vikingArmy = this.vikingArmy.filter((vikin) =>{
      if (vikin.health > 0) {
        return vikin;
      } 
    });
    return vivo;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    }else if(this.saxonArmy.length != 0 && this.vikingArmy.length != 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
