// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function (){
    return this.strength
  }
  this.receiveDamage = function (damage){
    this.health -= damage
  }

  
}
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name
  this.receiveDamage = function (damage){    
    this.health -= damage
    if (this.health > 0) {
      return this.name+" has received "+damage+" points of damage"
    } else {
      return this.name+" has died in act of combat"
    }
  }
  this.battleCry = function (){
    return "Odin Owns You All!"
  }
}
Viking.prototype = Object.create(Soldier.prototype)


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.receiveDamage = function (damage){    
    this.health -= damage
    if (this.health > 0) {
      return "A Saxon has received "+damage+" points of damage"
    } else {
      return "A Saxon has died in combat"
    }
  }
}
Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []  
  this.addViking = function(viking){
    this.vikingArmy.push(viking)
  }
  this.addSaxon = function(saxon){    
    this.saxonArmy.push(saxon)
  }
  this.vikingAttack = function(){
    let saxIndex = Math.floor(Math.random*this.saxonArmy.length)
    let vikIndex = Math.floor(Math.random*this.vikingArmy.length)
    this.saxonArmy[saxIndex].receiveDamage(this.vikingArmy[vikIndex].strength)
    if(this.saxonArmy[saxIndex].health <= 0) {
      this.saxonArmy.splice(saxIndex, 1)
      return "A Saxon has died in combat"
    }
    return "A saxon took "+this.vikingArmy[vikIndex].strength+" of damage from a Viking"
  }

  this.saxonAttack = function(){
    let saxIndex = Math.floor(Math.random*this.saxonArmy.length)
    let vikIndex = Math.floor(Math.random*this.vikingArmy.length)
    this.vikingArmy[vikIndex].receiveDamage(this.saxonArmy[saxIndex].strength)
    if(this.vikingArmy[vikIndex].health <= 0) {
      this.vikingArmy.splice(vikIndex, 1)
      return this.vikingArmy[vikIndex].name+ " the Viking has died in combat"
    }
    return this.vikingArmy[vikIndex].name+ " the Viking took "+this.saxonArmy[saxIndex].strength+" of damage from a Saxon"
  }


  this.showStatus = function(){
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle."
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings have won the war of the century!"
    }
  }
}
