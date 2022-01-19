// Soldier
class Soldier {
  constructor(healthArgument, strengthArgument) {
    this.health = healthArgument;
    this.strength = strengthArgument;
  }
  attack() {
    
    return this.strength;
    
  }
  receiveDamage(damageArgument) {
    // I need to remove the damage from health
    this.health = this.health - damageArgument;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
  super(health, strength)
  this.name = name;
  }

  receiveDamage(damageArgument) {
    
    this.health = this.health - damageArgument;
    
    if (this.health > 0) {
      return `${this.name} has received ${damageArgument} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }


}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    }
  
    receiveDamage(damageArgument) {
      this.health = this.health - damageArgument;
  
      if (this.health > 0) {
        return `A Saxon has received ${damageArgument} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
}

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
/*  
  vikingAttack() {
    receiveDamage() {
      Math.floor((Math.random() * ) + 1);
    }
  }*/
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
