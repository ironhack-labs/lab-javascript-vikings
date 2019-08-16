// Soldier
function Soldier(health,strength){
  this.health=health
  this.strength=strength
  this.attack=function(){
      return this.strength
  }

  this.receiveDamage=function(damage){
    this.damage=damage
    this.health=this.health-this.damage
  }
}

// Viking
function Viking (name,health,strength){
  this.name=name
  this.health=health
  this.strength=strength
  Soldier.call(this,health,strength)

this.receiveDamage = function(damage){
  this.health=this.health-damage
  if(this.health>0){
    return `${this.name} has received ${damage} points of damage`
  }
  else{
      return `${this.name} has died in act of combat`
  }
}

 this.battleCry=function(){
   return "Odin Owns You All!"
 }
}


Viking.prototype = Object.create(Soldier.prototype)




// Saxon
function Saxon (health,strength){
 this.health=health
 this.strength=strength

this.attack=function(){
      return this.strength
  }
 this.receiveDamage=function(damage){

 this.health=this.health-damage
  if(this.health>0){
    return `A Saxon has received ${damage} points of damage`
  }
  else{
      return `A Saxon has died in combat`
  }
   
 }
}
Saxon.prototype = Object.create(Soldier.prototype)

Saxon.prototype.constructor = Saxon


// War
function War (){
this.vikingArmy=[]
this.saxonArmy=[]
this.addViking=function(viking){
this.vikingArmy.push(viking);
}

this.addSaxon=function(saxon){
this.saxonArmy.push(saxon);
}


}
function War(){
  this.vikingArmy=[]
  this.saxonArmy=[]
  this.addViking = function(viking){
   this.vikingArmy.push(viking)
  }

  this.addSaxon=function(saxon){
    this.saxonArmy.push(saxon)
  }

  this.vikingAttack=function(){
    const randomSaxon = Math.floor(Math.random()*this.saxonArmy)
    const randomViking = Math.floor(Math.random()*this.vikingArmy)
    if(this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength).includes('dead')){
    this.saxonArmy[randomSaxon].splice(randomSaxon,1)
    }
    else{
    return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
    }
  
  }

   this.saxonAttack=function(){
    
  }


  this.showStatus=function(){
    
  }

}