// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength

  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }

  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    return `A Saxon has died in combat`
  }
}

// War
class War{
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  random(size){
    return Math.floor(Math.random() * size)
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let indexViking = this.random(this.vikingArmy.length)
    let indexSaxon = this.random(this.saxonArmy.length)
    let viking = this.vikingArmy[indexViking]
    let saxon = this.saxonArmy[indexSaxon]
    let damageAttack = saxon.receiveDamage(viking.attack())

    if (saxon.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
    }

    return damageAttack
    
  }

  saxonAttack(){
    let indexViking = this.random(this.vikingArmy.length)
    let indexSaxon = this.random(this.saxonArmy.length)

    let viking = this.vikingArmy[indexViking]
    let saxon = this.saxonArmy[indexSaxon]

    let damageAttack = viking.receiveDamage(saxon.attack())

    if (viking.health <= 0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1)
    }

    return damageAttack
    
  }

  showStatus(){
    let winner

    if (this.saxonArmy.length < 1){
      winner = "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length < 1){
      winner = "Saxons have fought for their lives and survived another day..."
    } else if (this.vikingArmy.length === this.saxonArmy.length){
      winner = "Vikings and Saxons are still in the thick of battle."
    }

    return winner 
  }
}
