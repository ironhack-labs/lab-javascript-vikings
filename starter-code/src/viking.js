// Soldier
function Soldier(health,strength) {
  this.health = health ? health : 0
  this.strength = strength ? strength : 0
  this.attack = () => {
    return this.strength
  }
  this.receiveDamage = (damage) => {
    this.health -= damage
  }
}

// Viking
function Viking(name,health,strength){
  Soldier.call(this,health,strength)
  this.name = name
  this.receiveDamage = (damage) =>{
    this.health -= damage
    if(this.health > 0 ){
      return this.name +" has received "+damage+" points of damage"
    }else if(this.health <= 0){
      return this.name + " has died in act of combat"
    }
  }
  this.battleCry = () =>{
    return "Odin Owns You All!"
  }
  }

// Saxon
function Saxon(health,strength){
  Soldier.call(this,health,strength)
  this.receiveDamage = (damage) =>{
  this.health -= damage
  if(this.health > 0 ){
    return "A Saxon has received "+ damage +" points of damage"
  }else if(this.health <= 0){
    return "A Saxon has died in combat"
  }
}
}

// War
function War(){
  this.vikingArmy = []
  this.saxonArmy = []
  
  this.addViking = (newViking) =>{
    this.vikingArmy.push(newViking)
  }
  this.addSaxon = (newSaxon) =>{
    this.saxonArmy.push(newSaxon)
  }
  this.vikingAttack = () =>{
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      var auxSaxonArmy = []
      var vikingAttackSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].attack())
        for(var i=0;i<this.saxonArmy.length;i++){
          if(this.saxonArmy[i].health > 0){
            auxSaxonArmy.push(this.saxonArmy[i])
      }
    }
    this.saxonArmy = auxSaxonArmy
    return vikingAttackSaxon
    }
    return "A team has won"
  }
  
  this.saxonAttack = () =>{
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
    var auxVikingArmy = []
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
    var randomSaxon =  Math.floor(Math.random()*this.saxonArmy.length)
    var saxonAttackViking = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
    for (var i=0;i<this.vikingArmy.length;i++){
      if(this.vikingArmy[i].health > 0){
        auxVikingArmy.push(this.vikingArmy[i])
      }
    }
    this.vikingArmy = auxVikingArmy
    return saxonAttackViking
      }
    return "A team has won"
  }
  this.showStatus = () =>{
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle."
    }else if (this.vikingArmy.length > 0 && this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }else if(this.saxonArmy.length > 0 && this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
  }
  }