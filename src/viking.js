// Soldier
class Soldier {
  constructor(health, strength) {
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
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
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
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health > 0){
       return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const saxon = Math.floor(Math.random() * this.saxonArmy.length)
    const viking = Math.floor(Math.random() * this.vikingArmy.length)

    const damage = this.vikingArmy[viking].attack()
    this.saxonArmy[saxon].receiveDamage(damage)
    
    if(this.saxonArmy[saxon].health <= 0){
      this.saxonArmy.splice(saxon, 1)
      return `A Saxon has died in combat`
    }
    return `${this.saxonArmy[saxon].name} has received ${damage} points of damage`

  }
  saxonAttack(){
    const viking = Math.floor(Math.random() * this.vikingArmy.length)
    const saxon = Math.floor(Math.random() * this.saxonArmy.length)

    const damage = this.saxonArmy[saxon].attack()
    this.vikingArmy[viking].receiveDamage(damage)
    if(this.vikingArmy[viking].health <= 0){
      this.vikingArmy.splice(viking, 1)
      return `A viking has died in combat`
    }
    return `${this.vikingArmy[viking].name} has received ${damage} points of damage`
  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survived another day...'
    } else if(this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
