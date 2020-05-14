// Soldier
class Soldier {
  constructor ( health, strength ){
    this.health = health
    this.strength = strength
  }
  attack () {
    return this.strength
  }
  receiveDamage ( damage ) {
    this.health - damage <= -100 ? this.health = undefined : this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor ( name, health, strength ) {
    super ( health, strength )
    this.name = name
  }
  receiveDamage ( damage ) {
    if ( this.health <= damage ) {
      this.health -= damage
      return `${this.name} has died in act of combat`
    }else{
      this.health -= damage
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry () {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor ( health, strength ) {
    super ( health, strength )
    
  }
  receiveDamage ( damage ) {
    if ( this.health <= damage ) {
      this.health -= damage
      return `A Saxon has died in combat`
    }else{
      this.health -= damage
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  ramdomNuber(max){
    return Math.floor ( Math.random() * max )
  }
  vikingAttack(){
    let viking = this.vikingArmy[this.ramdomNuber(this.vikingArmy.length)]
    let saxon = this.saxonArmy[this.ramdomNuber(this.saxonArmy.length)]
    saxon.receiveDamage(viking.strength)
    if (saxon.health <= 0) {
    let indexOfSaxon = this.saxonArmy.indexOf(saxon)
    this.saxonArmy.splice(indexOfSaxon, 1)
    return 'A Saxon has died in combat'
    }
  }
  saxonAttack(){
    let viking = this.vikingArmy[this.ramdomNuber(this.vikingArmy.length)]
    let saxon = this.saxonArmy[this.ramdomNuber(this.saxonArmy.length)]
    viking.receiveDamage(saxon.strength)
    if(viking.health <= 0){
      let indexOfViking = this.vikingArmy.indexOf(viking)
      this.vikingArmy.splice(indexOfViking,1)  
    }
    return `${viking.name} has received ${saxon.strength} points of damage`
  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!'
    }
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }

}
