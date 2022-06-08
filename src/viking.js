// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
   // return strength to Soldier
   return this.strength
  };

  receiveDamage (damage) {
    this.damage = damage
    // should --> remove received damage from health -> [  health - (received damage) ]
    this.health -= this.damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    
    if (this.health > 0) {
      return (this.name) + " has received " + (damage) + " points of damage"
    } else if (this.health <= 0) {
      return  (this.name) + " has died in act of combat";
    }
    
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return 'A Saxon has received ' + (damage) + ' points of damage'
    } else if (this.health <= 0) {
      return 'A Saxon has died in combat';
    }
}
}

// War
class War {
  
  vikingArmy = []
  saxonArmy= []
  
  addViking (viking) {
    // this.viking = 1
    this.vikingArmy.push(viking)
  }
  
  addSaxon(saxon) {
    // this.saxon = 1
    this.saxonArmy.push(saxon)
  }
  
  vikingAttack() {
    this.saxon[receiveDamage()] = this.vikingArmy[strength[Math.floor(Math.random() * this.vakingArmy.length)]]
    
  }

// saxonAttack()
// showStatus()
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
