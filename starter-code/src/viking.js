// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => this.strength
  this.receiveDamage = damage => {
    this.health = this.health - damage
  }
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name
  this.receiveDamage = damage => {
    this.health = this.health - damage
    if (this.health <= 0) return name + " has died in act of combat"
    else return name + " has received " + damage + " points of damage"
  }
  this.battleCry = () => "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health, strength)
  this.attack = () => this.strength
  this.receiveDamage = damage =>{
    this.health = this.health - damage
    if (this.health <= 0) return "A Saxon has died in combat"
    else return "A Saxon has received " + damage + " points of damage"
  }
}

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = viking => {
    this.vikingArmy.push(viking)
  }
  this.addSaxon = saxon => {
    this.saxonArmy.push(saxon)
  }
  this.vikingAttack = () => {
    var indexSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1))
    var saxon = this.saxonArmy[indexSaxon]
    var indexViking = Math.floor(Math.random() * (this.vikingArmy.length - 1))
    var viking = this.vikingArmy[indexViking]
    var response = saxon.receiveDamage(viking.strength)
    if(saxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon,1)
      return "A Saxon has died in combat"
    } else return response + "Strength of Viking: " + viking.strength
  }

  this.saxonAttack = () => {
    var indexSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1))
    var saxon = this.saxonArmy[indexSaxon]
    var indexViking = Math.floor(Math.random() * (this.vikingArmy.length - 1))
    var viking = this.vikingArmy[indexViking]
    var response = viking.receiveDamage(saxon.strength)
    if(viking.health <= 0) {
      this.vikingArmy.splice(indexViking,1)
      return "A Viking has died in combat"
    } else return viking.name + " has received " + saxon.strength + " points of damage"
  }

  this.showStatus = () => {
    if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
    else if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day..."
    else return "Vikings and Saxons are still in the thick of battle."
  }
}
