// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = damage => {
    this.health -= damage
  }
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this,health,strength)
  this.name = name
  this.health = health
  this.strength = strength
  this.receiveDamage = damage => {
    this.health -= damage
    if(this.health > 0) {
      // NAME has received DAMAGE points of damage
      return `${this.name} has received ${damage} points of damage`
    } else {
      // "NAME has died in act of combat"
      return `${this.name} has died in act of combat`
    }
  }
  this.battleCry = () => "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health,strength)
  this.health = health
  this.strength = strength
  this.receiveDamage = damage => {
    this.health -= damage
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = viking => {this.vikingArmy.push(viking)}
  this.addSaxon = saxon => {this.saxonArmy.push(saxon)}
  this.vikingAttack = () => {
    //Random Saxon
    var saxon = Math.floor(Math.random() * this.saxonArmy.length);
    //Random Viking
    var viking = Math.floor(Math.random() * this.vikingArmy.length);
    var res = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength)
    if (res === `A Saxon has died in combat`) {
      this.saxonArmy.splice(saxon,1)
    } 
    return res
  }
  this.saxonAttack = () => {
    //Random Saxon
    var saxon = Math.floor(Math.random() * this.saxonArmy.length);
    //Random Viking
    var viking = Math.floor(Math.random() * this.vikingArmy.length);
    var res = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength)
    if (res === `${this.vikingArmy[viking].name} has died in act of combat`) {
      this.vikingArmy.splice(viking,1)
    } 
    return res
  }
  this.showStatus = () => {
    var status = ""
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
