// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health
    this.strength = strength
  }
   attack(){
  return this.strength
  }
  receiveDamage(receiveDamage){
     this.health = this.health - receiveDamage
  }
  
}
const Soldier1 = new Soldier(300,3)
Soldier1.receiveDamage(50)


// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
  
    super (health, strength)
    
     this.name = name
  
    }
    receiveDamage (damage){
      this.health -= damage;
      return this.health > 1 ? `${this.name} has recived ${damage} points of damage ${this.name} has died in combat`
    :
    battleCry ();{
      return "Odin Owns You All!"
    }
}

// Saxon
}
class Saxon extends Soldier{
  receiveDamage (damage){
    this.health -= damage
    if (this.health > 0){
      let msg = `A saxon has recived ${damage} points of damage`
      return msg
    }
  }
}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  addViking (viking){
    this.vikingArmy.push (viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push (saxon)
  }
  vikingAttack(){
    let idRnd = Math.floor (Math.random ()* this.saxonArmy.length)
    let rndSaxon = this.saxonArmy[idRnd]
    let rndViking = this.vikingArmy [Math.floor (Math.random ()* this.vikingArmy.length)]
   let message = rndSaxon.receiveDamage(rndViking.attack())
    if (rndSaxon.health <=0){
      this.saxonArmy.splice(idRnd,1)
      return message
    }
  }


  saxonAttack (){
    let idRnd = Math.floor (Math.random() * this.vikingArmy.length)
    let rndViking = this.vikingArmy [idRnd]
    let rndSaxon = this.saxonArmy[(Math.floor()* this.saxonArmy.length)]

    let message = rndViking.receiveDamage(rndSaxon.attack())
    if (rndViking.health <=0){
      this.vikingArmy.splice(idRnd,1)
      return message
    }

    
}

showStatus (){
  if (!this.vikingArmy.length) return "","Vikings have won the war of the century!"
  if (!this.saxonArmy.length) return "","Saxons have fought for their lives and survived another day..."
  if (this.saxonArmy.length && this.vikingArmy.length) return "","Vikings and Saxons are still in the thick of battle."
}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeoff ) ('undefined'); {
  module.exports = { Soldier, Viking, Saxon, War };
}
