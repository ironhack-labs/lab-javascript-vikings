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
    // -----choosing a random member of the army (try later) -------
    // const randomSaxon = Math.floor(Math.random()*this.saxonArmy)
    // const randomViking = Math.floor(Math.random()*this.vikingArmy)
    // if(this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength).includes('dead')){
    // this.saxonArmy[0].splice(randomSaxon,1)
    // }

    // else{
    // return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
    // }
    //------------------------------------------------------------------------

     let saxonLives= this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)

       if(this.saxonArmy[0].health<=0){
         this.saxonArmy.shift()
       }
       return saxonLives
    }
    
  

   this.saxonAttack=function(){
    let vikingLives= this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)

       if(this.vikingArmy[0].health<=0){
         this.vikingArmy.shift()
       }
       return vikingLives
  }


  this.showStatus=function(){

    if(this.saxonArmy.length<=0){
      return `Vikings have won the war of the century!`
    }
   else if (this.vikingArmy.length<=0) {
     return `Saxons have fought for their lives and survive another day...`
   }

   else if(this.vikingArmy.length>=1 && this.vikingArmy.length>=1)  {
    return `Vikings and Saxons are still in the thick of battle.`
   }

  }

}
