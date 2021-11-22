// Soldier
class Soldier {
  constructor( health, strength ) {
    this.health =  health;
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage( damage ) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {

  constructor( name, health, strength) {
    super( health, strength) 
    this.name = name
  }

  receiveDamage( damage ) {
    super.receiveDamage(damage)
    if ( this.health > 0 ) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if ( this.health > 0 ) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking( Viking ){
    this.vikingArmy.push(Viking)
  }

  addSaxon( Saxon ) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){

    this.ramdomSaxon = this.saxonArmy[Math.floor( Math.random() * this.saxonArmy.length )]
    this.ramdomViking = this.vikingArmy[Math.floor( Math.random() * this.vikingArmy.length )]
    
    if (this.ramdomSaxon.health <= 0) {

      let index = arr.indexOf(attackedSaxon)
      this.vikingArmy.splice(index, 1)


      return attackedSaxon
    } else {
      attackedSaxon
    }

  }

  saxonAttack(){}
  showStatus(){}
}

new Viking( 'Eduardo Magno', 1000, 100 )
new Viking( 'Eduardo Magno', 1000, 100 )




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}