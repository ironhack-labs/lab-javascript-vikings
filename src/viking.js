// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength = strength
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
   this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
     this.health -= damage;
     console.log('health: ', this.health)
    if(this.health <= 0){
      return `${this.name} has died in act of combat`
    }
    else{
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry(){
      return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health <= 0){
      return `A Saxon has died in combat`
    }
    else{
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
 constructor() {
    this.vikingArmy = [], 
    this.saxonArmy = []
  }
  addViking(viking){
      this.vikingArmy.push(viking)
    }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
     let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
     let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
     console.log(this.saxonArmy)
     let saxonResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
     if (saxonResult === "A Saxon has died in combat"){
       this.saxonArmy.splice(randomSaxon, 1)
     }
     return saxonResult
  }
  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] //different way for the randomsizer 
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    console.log('saxon healt',randomSaxon.health)
    // console.log(this.saxonArmy[randomSaxon].strength)
    // console.log(this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength))
    let vikingResult = randomViking.receiveDamage(randomSaxon.strength)
    console.log('vikingResult' + vikingResult)
    if (vikingResult === `${randomViking.name} has died in act of combat`){
      this.vikingArmy.splice(randomViking, 1)
    }
    return vikingResult
  }
  showStatus(){
    if(this.saxonArmy.length == 0){
      return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else if (this.saxonArmy.length >= 1 &&  this.vikingArmy.length >= 1){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
