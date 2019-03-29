// Soldier
let Soldier = function(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => { return this.strength }
  this.receiveDamage = (damage) =>  { this.health -= damage }
 }
 
 // Viking
 let Viking = function(name, health, strength) {
  Soldier.call(this, health = 10, strength = 8) //attack
  this.name = name
  this.receiveDamage = (damage) => {
    this.health -= damage 
    if(this.health <= 0) return `${this.name} has died in act of combat`
    return `${this.name} has recieved ${damage} points of damage`
  }
  this.battleCry = () => `Odin Owns You All!`
 }
 Viking.prototype = Object.create(Soldier.prototype)
 
 // Saxon
 let Saxon = function(health, strength){
   Soldier.call(this, health = 5, strength = 4)
   this.receiveDamage = (damage) => {
     this.health -= damage 
     if(this.health <= 0) return `A Saxon has died in combat`
     return `A Saxon has received ${damage} points of damage`
   }
 }
 Saxon.prototype = Object.create(Soldier.prototype)

 // War
 let War = function() {}
  
 