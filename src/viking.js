// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  
  attack(){
    return this.strength

  }

  receiveDamage(theDamage){
     this.health -= theDamage 

  }

}

//Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name

  }

  receiveDamage(theDamage){
    super.receiveDamage(theDamage)
    if(this.health > 0) return `${this.name} has received ${theDamage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry(){
    return "Odin Owns You All!"
  }
    
}



// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    super.receiveDamage(theDamage)
    if(this.health > 0) return `A Saxon has received ${theDamage} points of damage`;
    else return "A Saxon has died in combat"
  }

}


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(aVikingObject){
    this.vikingArmy.push(aVikingObject)
  }

  addSaxon(aSaxonObject){
    this.saxonArmy.push(aSaxonObject)

  }

  vikingAttack(){
    let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[saxonIndex]
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking = this.vikingArmy[vikingIndex]

    let saxonDamage = randomSaxon.receiveDamage(randomViking.attack())

    if(randomSaxon.health <= 0)
    this.saxonArmy.splice(saxonIndex, 1)
    
    return saxonDamage
   
  }

  saxonAttack(){
    let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[saxonIndex]
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking = this.vikingArmy[vikingIndex]

    let vikingDamage = randomViking.receiveDamage(randomSaxon.attack())

    if(randomViking.health <= 0)
    this.vikingArmy.splice(vikingIndex, 1)
    
    return vikingDamage
   
  }

  showStatus(){
    if(this.saxonArmy.length === this.vikingArmy.length && this.saxonArmy.length >=1 && this.vikingArmy.length >=1) return "Vikings and Saxons are still in the thick of battle."

    if(this.saxonArmy.length <= 0) return  "Vikings have won the war of the century!"
    if(this.vikingArmy.length <= 0) return "Saxons have fought for their lives and survived another day..."

  }

}







