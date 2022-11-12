// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(Damage){
    this.health = this.health - Damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health, strength){
    super(health, strength)
    this.name = name
    
  }
  receiveDamage(Damage){
   super.receiveDamage(Damage)
   if(this.health === 0){
    return `${this.name} has died in act of combat`
   } else{
    return `${this.name} has received ${Damage} points of damage`
   }
  
  }
  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
 receiveDamage(Damage){
  super.receiveDamage(Damage)
   if(this.health <= 0 ){
     return `A Saxon has died in combat`
    } 
    return `A Saxon has received ${Damage} points of damage`
 }
}

// War
class War {
  constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
  }
   addViking(vikingObject){
    this.vikingArmy.push(vikingObject)
   }
  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject)
   }
   vikingAttack(){
    const RandomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const RandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        RandomSaxon.receiveDamage(RandomViking.strength)
   }
   saxonAttack(){
    const RandomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const RandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    RandomViking.receiveDamage(RandomSaxon.strength)
   }
  }
