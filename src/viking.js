// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
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
    super(health, strength)
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
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health <= 0){
      return "A Saxon has died in combat"
    } else {
      return `A Saxon has received ${damage} points of damage`
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
    let randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let strength = this.vikingArmy[randomIndex].strength
    let result = this.saxonArmy[randomIndex].receiveDamage(strength)
    if (this.saxonArmy[randomIndex].health <= 0){
      this.saxonArmy.splice(randomIndex)
    }
    return result
    // this.saxonArmy[randomIndex].health)
  }

  saxonAttack(){
    let randomIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let strength = this.saxonArmy[randomIndex].strength
    let result = this.vikingArmy[randomIndex].receiveDamage(strength)
    if (this.vikingArmy[randomIndex].health <= 0){
      this.vikingArmy.splice(randomIndex)
    }
    return result
    // this.saxonArmy[randomIndex].health)
  }


  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){
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
