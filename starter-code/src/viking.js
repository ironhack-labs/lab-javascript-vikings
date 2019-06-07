// Soldier
class Soldier {
  constructor (health, strength){
  this.health = health
  this.strength = strength
}
attack = () => {
return this.strength
}
receiveDamage = (damage) => {
  this.health -= damage
}
}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength){
    super(health, strength)
//  super(attack)
    this.name = name
}
receiveDamage = (damage) => {
 this.health -= damage
if (this.health > 0){
return `${this.name} has received ${damage} points of damage`
} else {
  return `${this.name} has died in act of combat`
}
}
battleCry = () =>{
  return `Odin Owns You All!`
}
}
class Saxon extends Soldier {
  constructor (health, strength){
    super(health, strength)
}
receiveDamage = (damage) => {
 this.health -= damage
if (this.health > 0){
return `A Saxon has received ${damage} points of damage`
} else {
  return `A Saxon has died in combat`
}  
}
}
// War
class War {
  constructor () {
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
    let rndSax = Math.floor(Math.random() * (this.saxonArmy.length-1))
    let rndViking = Math.floor(Math.random() * (this.vikingArmy.length-1))
   let result= this.saxonArmy[rndSax].receiveDamage (this.vikingArmy[rndViking].attack())
  if(rndSax.health <= 0){
     this.saxonArmy.splice(rndSax,1)
  }
  return result
  }
  saxonAttack = () => {
    let rndSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let rndViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
   let result= rndViking.receiveDamage(rndSax.attack())
  if(rndViking.health <= 0){
     this.vikingArmy.splice((this.vikingArmy.indexOf(rndViking),1))
  }
  return result
  }  
  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the word of the entury!`
    } if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle`
    }
  }  
}
