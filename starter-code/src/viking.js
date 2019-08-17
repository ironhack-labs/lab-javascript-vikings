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


for (vikingsWanted=0;vikingsWanted<10;vikingsWanted++){
   this.addViking = function(viking){
   this.vikingArmy.push(viking)
  }
}
 
  for(saxonsWanted=0;saxonsWanted<10;saxonsWanted++){
  this.addSaxon=function(saxon){
    this.saxonArmy.push(saxon)
 }
}


    this.vikingAttack=function(){

   let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
   let randomSaxon =  Math.floor(Math.random()*this.saxonArmy.length);


     let saxonLives= this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

       if(this.saxonArmy[randomSaxon].health<=0){
         this.saxonArmy.shift()
       }
       return saxonLives
    }
    
  

   this.saxonAttack=function(){

       let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
       let randomSaxon =  Math.floor(Math.random()*this.saxonArmy.length);
       let vikingLives= this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

       if(this.vikingArmy[randomViking].health<=0){
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
