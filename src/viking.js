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

    if(this.health > 0)
      return `${this.name} has received ${damage} points of damage`

    else
      return `${this.name} has died in act of combat`
  }

  battleCry(){

    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){

    this.health -= damage

    if(this.health > 0)
      return `A Saxon has received ${damage} points of damage`

    else
      return `A Saxon has died in combat`

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

  // vikingAttack(){

  //   let aRandomIndexOfSaxonArmyArr = Math.floor(Math.random() * this.saxonArmy.length)

  //   let aRandomSaxon = this.saxonArmy[aRandomIndexOfSaxonArmyArr]

  //   let aRandomIndexOfVikingArmyArr = Math.floor(Math.random() * this.vikingArmy.length)

  //   let aRandomViking = this.vikingArmy[aRandomIndexOfVikingArmyArr]

  //   let saxonDamage = aRandomSaxon.receiveDamage(aRandomViking.attack())

  //   if(aRandomSaxon.health < 1)
  //     this.saxonArmy.splice(aRandomIndexOfSaxonArmyArr, 1)

  //   return `${saxonDamage}`
  // }

  // saxonAttack(){

  //   let aRandomIndexOfSaxonArmyArr = Math.floor(Math.random() * this.saxonArmy.length)

  //   let aRandomSaxon = this.saxonArmy[aRandomIndexOfSaxonArmyArr]

  //   let aRandomIndexOfVikingArmyArr = Math.floor(Math.random() * this.vikingArmy.length)

  //   let aRandomViking = this.vikingArmy[aRandomIndexOfVikingArmyArr]

  //   let vikingDamage = aRandomViking.receiveDamage(aRandomSaxon.attack())

  //   if(aRandomViking.health < 1)
  //     this.vikingArmy.splice(aRandomIndexOfVikingArmyArr, 1)

  //   return `${vikingDamage}`

  // }

  

  //genral combined function for both the above functions

  attack(attackerArmy){

    let aRandomIndexOfSaxonArmyArr = Math.floor(Math.random() * this.saxonArmy.length)

    let aRandomSaxon = this.saxonArmy[aRandomIndexOfSaxonArmyArr]

    let aRandomIndexOfVikingArmyArr = Math.floor(Math.random() * this.vikingArmy.length)

    let aRandomViking = this.vikingArmy[aRandomIndexOfVikingArmyArr]

    if(attackerArmy === 'viking'){

      let saxonDamage = aRandomSaxon.receiveDamage(aRandomViking.attack())

      if(aRandomSaxon.health < 1)
        this.saxonArmy.splice(aRandomIndexOfSaxonArmyArr, 1)

      return `${saxonDamage}`
    }

    else{

      let vikingDamage = aRandomViking.receiveDamage(aRandomSaxon.attack())

      if(aRandomViking.health < 1)
        this.vikingArmy.splice(aRandomIndexOfVikingArmyArr, 1)

      return `${vikingDamage}`
    }

  }

  showStatus(){

    if(this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!'

    else if(this.vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...'

    else  
      return 'Vikings and Saxons are still in the thick of battle.'
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
