// // Soldier
// function Soldier() {}

// // Viking
// function Viking() {}

// // Saxon
// function Saxon() {}

// // War
// function War() {}

// Soldier
// Soldier
//function Soldier() {}
class Soldier {
  constructor(health, strength){
      this.health = health
      this.strength = strength
  }
  attack (){
      return this.strength
  }
  receiveDamage(damage){
      this.health -= damage
  }
}
// Viking
//function Viking() {}
class Viking extends Soldier {
  constructor(name, health, strength){
  super (health, strength)
  this.name = name
  }
  // attack (){
  //  return super.attack()
  // }
  receiveDamage(damage){
      super.receiveDamage(damage)
      if(this.health > 0){
          return this.name + " has received " + damage + " points of damage"
      } else return this.name + " has died in act of combat"
  }
  battleCry(){
      return "Odin Owns You All!"
  }
}


// Saxon
//function Saxon() {}
class Saxon extends Soldier {
  constructor(health, strength){
      super (health, strength)
  }
  attack (){
      return super.attack()
  }
  receiveDamage(damage){
      super.receiveDamage(damage)
      if (this.health > 0){
          return "A Saxon has received " + damage + " points of damage"
      } else {
          return "A Saxon has died in combat"
      }
  }
}

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
  vikingAttack(){
    var randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    var randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    var damageMessage = this.saxonArmy[randSaxonIndex].receiveDamage(this.vikingArmy[randVikingIndex].attack())
    
    if(this.saxonArmy[randSaxonIndex].health < 1) {
      this.saxonArmy.splice(randSaxonIndex ,1)
    }
    return damageMessage
  }

  saxonAttack(){
    var randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    var randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    var damageMessage = this.vikingArmy[randVikingIndex].receiveDamage(this.saxonArmy[randSaxonIndex].attack())

    if(this.vikingArmy[randVikingIndex].health < 1) {
      this.vikingArmy.splice(randVikingIndex,1)
  }
  return damageMessage
  }

  showStatus(){
    if (this.saxonArmy.length < 1) {
      return 'Vikings have won the war of the century!'
    }
    if (this.vikingArmy.length < 1) {
      return 'Saxons have fought for their lives and survive another day...'
    }
    else return 'Vikings and Saxons are still in the thick of battle.'
  }

  }


