// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack (){
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

  receiveDamage(damage){
    this.health -= damage;
    if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if (this.health <= 0){
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${damage} points of damage`
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const randomViking = Math.floor(this.vikingArmy.length * Math.random());
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    const newHealth = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    const newArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    this.saxonArmy = newArmy;
    return newHealth
  };

  saxonAttack(){
    const randomViking = Math.floor(this.vikingArmy.length * Math.random());
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    const damage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    const newViking = this.vikingArmy.filter(viking => viking.health > 0);
    this.vikingArmy = newViking;
    return damage
  };
  showStatus(){
    if (!this.saxonArmy.length){
      return "Vikings have won the war of the century!"
    }
    if (!this.vikingArmy.length){
      return "Saxons have fought for their lives and survived another day..."
    }
    return "Vikings and Saxons are still in the thick of battle."
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
