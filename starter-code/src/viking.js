// Soldier
function Soldier (health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = (damage) => {
    this.health -= damage
  }
}
// Viking
function Viking (name,health,strength) {
  this.name = name
  Soldier.call (this,health,strength)
  this.receiveDamage = (damage) => {
    this.health -= damage
    if(this.health <= 0) return `${this.name} has died in act of combat`
    return `${this.name} has received ${damage} points of damage`
  }
  this.battleCry = () => `Odin Owns You All!`
}
Viking.prototype=Soldier.prototype

// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength)
  this.receiveDamage = (damage) => {
    this.health -= damage
    if(this.health <= 0) return `A Saxon has died in combat`
    return `A Saxon has received ${damage} points of damage`
  }
}
Saxon.prototype=Soldier.prototype


// War
function War () {
  this.vikingArmy = []
  
  this.saxonArmy = []
  
  this.addViking=(Viking) => {
    this.vikingArmy.push(Viking)
  }
  this.addSaxon=(Saxon) => {
    this.saxonArmy.push(Saxon)
  }
  this.vikingAttack=() => {
    let rndV = this.random(this.vickingArmy)
    let rndS = this.random(this.saxonArmy)
    this.saxonArmy[rndS].receiveDamage(this.vikingArmy[rndV].strength)
    if(this.saxonArmy[rndS].health <= 0) this.saxonArmy.splice(rndS,1)
    return this.saxonArmy[rndS].receiveDamage(this.vikingArmy[rndV].strength)
  }

  this.random =(arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  this.saxonAttack=() => {
  }
  this.showStatus=() => {
  }

}
rnd = Math.floor(Math.random() * this.saxonArmy.length)
    console.log(`${this.name} attacked with ${this.powers[rnd].name}`)
    pokemon.hp -= this.powers[rnd].damage