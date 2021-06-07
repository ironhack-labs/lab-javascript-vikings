// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;``
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
     if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
    else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
    else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor(){
  this.vikingArmy  = [];
  this.saxonArmy = [];
  }

  
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  
  // rando(tribe) {
  //   if (tribe === saxon) {
  //     return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  //   } else if (tribe === viking) {
  //     return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  //   }
  // }
  // vikingAttack() {
  //   this.rando(saxon).receiveDamage(this.rando(viking).attack())
  // }
  // saxonAttack() {
  //   this.rando(viking).receiveDamage(this.rando(saxon).attack())
  // }


  randomSaxon() {
    return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  }
  randomViking() {
    return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  }
  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let saxHurt = this.saxonArmy[saxonIndex].receiveDamage(this.randomViking().attack())
    if (this.saxonArmy[saxonIndex].health <= 0) {
      this.saxonArmy.splice(saxonIndex,1)
    }
    return saxHurt;
  }
  saxonAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let vikHurt = this.vikingArmy[vikingIndex].receiveDamage(this.randomSaxon().attack())
    if (this.vikingArmy[vikingIndex].health <= 0) {
      this.vikingArmy.splice(vikingIndex,1)
    }
    return vikHurt
  }

  showStatus() {
    if (this.vikingArmy.length) {
      if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!'
    } else { 
      return 'Vikings and Saxons are still in the thick of battle.'
    } 
  } else { 
    return 'Saxons have fought for their lives and survived another day...'}
}
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
