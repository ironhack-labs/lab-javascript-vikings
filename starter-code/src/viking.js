// Soldier
function Soldier(health,strength) {
this.health = health
this.strength = strength

  this.attack = function() {
    return this.strength
  }

  this.receiveDamage = function(damage) {
    this.health -= damage
  }
}


// Viking
function Viking(name, health, strength) {
  Soldier.call(this, name, health, strength)
  this.name = name
  this.health = health
  this.strength = strength

  this.receiveDamage = function(damage){
    this.health -= damage
    if(this.health >0) {
      return this.name + " has received " + damage + " points of damage"
    } else {
      return this.name + " has died in act of combat"
    }
  }

  this.battleCry = function(){
    return "Odin Owns You All!"
  }
}
Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)

  this.receiveDamage = function(damage) {
    this.health -= damage
    if(this.health >0) {
      return "A Saxon has received " + damage + " points of damage"
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

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking)
  }
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  this.vikingAttack = function() {
    let indSax = Math.floor(Math.random()*this.saxonArmy.length)
    let indVik = Math.floor(Math.random()*this.vikingArmy.length)
    let defSax = this.saxonArmy[indSax]
    let attVik = this.vikingArmy[indVik]
    
    let r = defSax.receiveDamage(attVik.strength)

    if(defSax.health <= 0) {
      this.saxonArmy.splice(indSax,1)
    }
    return r
  }
  this.saxonAttack = function() {
    let indSax = Math.floor(Math.random()*this.saxonArmy.length)
    let indVik = Math.floor(Math.random()*this.vikingArmy.length)
    let attSax = this.saxonArmy[indSax]
    let defVik = this.vikingArmy[indVik]
    
    let r = defVik.receiveDamage(attSax.strength)

    if(defVik.health <= 0) {
      this.vikingArmy.splice(indVik,1)
    }
    return r
  }
  this.showStatus = function() {
    if(this.saxonArmy.length===0) {
      return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length===0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
