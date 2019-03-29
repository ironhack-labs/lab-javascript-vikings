// Soldier
function Soldier (health, strength) {
this.health = health
this.strength = strength
this.attack =()=> {
  return this.strength
}
this.receiveDamage =(damage)=> {
  this.health -= damage
}
}

// Viking
function Viking(name, health, strength) {
Soldier.call(this,health, strength)
this.name = name
this.battleCry = ()=> {
return "Odin Owns You All!"
}
this.receiveDamage = (damage) => {
  this.health -= damage
if (this.health <= 0 ){
  return (`${this.name} has died in act of combat`)
} else {
  return (`${this.name} has received ${damage} points of damage`)
  
}

}
}
Viking.prototype = Object.create ( Soldier.prototype)
// Saxon
function Saxon (health, strength){
  Soldier.call(this,health, strength)
  this.receiveDamage = (damage) => {
    this.health -= damage
  if (this.health > 0 ){
    return (`A Saxon has received ${damage} points of damage`)
  } else {
    return (`A Saxon has died in combat`)
    
  }
}
}
Saxon.prototype = Object.create ( Soldier.prototype)
// War
// function War() {
//   this.addViking() 
// }
