// Soldier
let Soldier = function(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = (damage) => {
      this.health -= damage
      console.log(this.health - damage)
  }
}

// Viking
let Viking = function(name, health, strength) {
   Soldier.call(this, health, strength)
   this.name = name
   this.attack = () => {
    return this.strength
  }
   this.receiveDamage = (damage) => {
     //this.health <= 0 ? console.log(): (this.health -= this.damage
     // console.log(`${this.name} has received $))
     this.health -= damage
      if (this.health <= 0) {
        return (`${this.name} has died in act of combat`)
      } else {
        return (`${name} has received ${damage} points of damage`) 
    }
   }
   this.battleCry = () => {
     return "Odin Owns You All!"
   }
  }

Viking.prototype = Object.create(Soldier.prototype)
// Saxon
let Saxon = function(health,strength) {
  Soldier.call(this, health, strength)
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = (damage) => {
    this.health -= damage
      if (this.health <= 0) {
        return ("A Saxon has died in combat")
      } else {
        return (`A Saxon has received ${damage} points of damage`)
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype)

// War
let War = () => {

}
