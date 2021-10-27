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
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    if (this.health <= 0){
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

  addViking(Viking){
    this.vikingArmy.push(Viking)

  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)

  }

  vikingAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let result = randomSaxon.receiveDamage(randomViking.strength)
    for (let saxon of this.saxonArmy){
      if (saxon.health <= 0){ this.saxonArmy.shift(saxon)}
    }
    return result;
  }

  saxonAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let result = randomViking.receiveDamage(randomSaxon.strength)
    for (let viking of this.vikingArmy){
      if (viking.health <= 0){ this.vikingArmy.shift(viking)}
    }
    return result;
  }

  showStatus(){
    if (this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!'
    }
    if (this.vikingArmy.length === 0){ 
      return 'Saxons have fought for their lives and survived another day...'
    }
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
