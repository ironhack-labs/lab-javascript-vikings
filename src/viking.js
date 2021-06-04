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
    if( this.health <= 0){
      return `${this.name} has died in act of combat`
    }
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier{
  
  receiveDamage(damage){
    this.health -= damage
    if( this.health <= 0){
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${damage} points of damage`
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
    
    const randSaxonId = Math.floor( Math.random() * this.saxonArmy.length) 
    const randVikingId = Math.floor( Math.random() * this.vikingArmy.length) 
    //cojimos un saxon aleatorio
    const elSaxonHerido = this.saxonArmy[randSaxonId]
    //cojimos un vikingo aleatorio
    const damageDelVikingo = this.vikingArmy[randVikingId].strength

    //receiveDamage() returns un mensaje
    const mensaje = elSaxonHerido.receiveDamage( damageDelVikingo )
    if( elSaxonHerido.health <= 0){
      this.saxonArmy.splice( randSaxonId, 1)
    }

    return mensaje
  }




  saxonAttack(){
    
    const randSaxonId = Math.floor( Math.random() * this.saxonArmy.length) 
    const randVikingId = Math.floor( Math.random() * this.vikingArmy.length) 


    //cojimos un vikingo aleatorio
    const elVikingHerido = this.vikingArmy[randVikingId]
    //cojimos un saxon aleatorio
    const damageDelSaxon = this.saxonArmy[randSaxonId].strength

    //receiveDamage() returns un mensaje
    const mensaje = elVikingHerido.receiveDamage( damageDelSaxon )
    if( elVikingHerido.health <= 0){
      this.vikingArmy.splice( randVikingId, 1)
    }

    return mensaje
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length === 0){
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
