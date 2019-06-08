// Soldier
class Soldier {
    constructor (healthArg ,strengthArg){
      this.health = healthArg 
      this.strength = strengthArg
    }
 attack = () => {
    return this.strength
}
 receiveDamage = (_thedamage) =>{
    this.health -= _thedamage
 }
}


// Viking

class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name
        }   
        receiveDamage = (_thedamage) =>{
          this.health -= _thedamage
            if(this.health <= 0)  return `${this.name} has died in act of combat`
              return `${this.name} has received ${_thedamage} points of damage`
        }
        battleCry = () => {
          return `Odin Owns You All!`   
        } 
      }

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
      super (health, strength)
    }
    receiveDamage = (_thedamage) =>{
      this.health -= _thedamage
        if(this.health <= 0)  return `A Saxon has died in combat`
          return `A Saxon has received ${_thedamage} points of damage`
    }
    
}

// War
class War {
    constructor(){
      this.vikingArmy = []
      this.saxonArmy = []
    }

addViking = (viking1) => {
this.vikingArmy.push(viking1)
}
addSaxon = (saxon1) =>{
this.saxonArmy.push(saxon1)
}

vikingAttack = () => {
 //se crea random
rnd = Math.floor(Math.random()*this.saxonArmy.length)
rnd2 = Math.floor(Math.random()*this.vikingArmy.length)

this.saxonArmy[rnd].receiveDamage(this.vikingArmy[rnd2].strength)

if(this.saxonArmy[rnd].health <=0){


}

}

//se le agrega a receive damage




}
}

