// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength;
  }

  receiveDamage (damage){
    //this.health -= damage;
    this.health = this.health - damage; 
  }
}


// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    //this.health = this.health - damage;
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}



// War

class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const attack = saxon.receiveDamage(viking.attack())
    if (saxon.health <= 0) {
      this.saxonArmy.pop()
    }
    return attack

  }

  saxonAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const attack = viking.receiveDamage(saxon.attack())
    if (viking.health <= 0) {
      this.vikingArmy.pop()
    }
    return attack
  }

  showStatus() {
    //Verificamos si esta vacio con su propiedad length es igual a 0
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
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
