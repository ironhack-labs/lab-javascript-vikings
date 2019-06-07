// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
    }
   attack = () => {
     return this.strength
   }
   receiveDamage = damage => {
    this.health -= damage
   }
}

// Viking
class Viking extends Soldier{
  
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }
  attack = () =>{
    return this.strength
  }

  receiveDamage = (damage)=> {
    this.health -= damage
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry = () => {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength)
    
  }
  attack = () => {
    return this.strength
  }
  receiveDamage = (damage) => {
    this.health -= damage
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0) {
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
  addViking = (viking) => {
    this.vikingArmy.push(viking)
  }

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon)
  }

  vikingAttack = () => {
    let rnd = Math.floor(Math.random() * this.vikingArmy.length)
   let rndSax = this.saxonArmy[rnd]
   let msj = rndSax.receiveDamage(this.vikingArmy[rnd].strength)
   if(msj === 'A Saxon has died in combat'){
     this.saxonArmy.splice(rnd, 1)
   }
   return msj
    }

  saxonAttack = () => {
    let rnd = Math.floor(Math.random() * this.saxonArmy.length)
    let msj = this.vikingArmy[rnd].receiveDamage(this.saxonArmy[rnd].strength)
    if(msj.includes('died')){
      this.vikingArmy.splice(rnd, 1)
    }
    return msj
  }
  showStatus= () => {
    if(this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length ===1 ) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
}

}
