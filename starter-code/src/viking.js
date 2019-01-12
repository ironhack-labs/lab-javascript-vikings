// Soldier
function Soldier(healthArg, strengthArg) {

  this.strength = strengthArg;
  this.health = healthArg;

  this.attack = function(){
    return this.strength;
}
this.receiveDamage = function(damage){

    this.health = this.health - damage; 
    }
      }
// Viking
function Viking(name, health, strength) {
  Soldier.call(this,name,health,strength)
  this.name = name;
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function(damage){

    this.health = this.health - damage;

    if(this.health > 0){    
      return  this.name + " has received " + damage + " points of damage";
    } 
        return  this.name + " has died in act of combat";
  }
  this.battleCry = function(){
    return "Odin Owns You All!"
  
  } 
}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health,strength) {
Soldier.call(this,name, health, strength);
this.name = name;
this.health = health
this.strength = strength

this.receiveDamage = function(damage){
  this.health = this.health - damage;  
  if(this.health > 0){
        return  "A Saxon has received " + damage + " points of damage";    
        }  
        return "A Saxon has died in combat"
        }
          }      
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];


  this.addViking = function(viking){
    
    this.vikingArmy.push(viking) ;
    
  }

  this.addSaxon = function(saxon){
    
    this.saxonArmy.push(saxon);
    
  }

  this.vikingAttack = function(){
    
    var saxonRandom =  Math.floor(Math.random() * this.saxonArmy.length)    
    var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length) 
  //Queda pendiente random
    var sentence = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength)
   
    for(var a = 0; a < this.saxonArmy.length;a++){
   
      if(this.saxonArmy[a].health <= 0){
        
        this.saxonArmy.splice(a,1)
      }
    }

   return sentence
  //He intentado un foreach y splice pero veo que no son compatibles.
  //No se la manera de borrar el elemento actual en un foreach.    
    };

    this.saxonAttack = function(){

      var saxonRandom =  Math.floor(Math.random() * this.saxonArmy.length)    
      var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length) 

      var sentenceViking = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength)
      
      for(var a = 0; a < this.vikingArmy.length;a++){
        if(this.vikingArmy[a].health <= 0){
          this.vikingArmy.splice(a,1) 
        }
      }
           return sentenceViking

    }

    this.showStatus = function(){
    

      console.log("V " + this.vikingArmy.length + " " + " S " + this.saxonArmy.length)
      
      if(this.saxonArmy.length === 0){
        console.log()
        return "Vikings have won the war of the century!";
        
      }

      if(this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day...";
       } 

      if(this.vikingArmy.length >= 0 && this.saxonArmy.length >= 0){
        
        return "Vikings and Saxons are still in the thick of battle.";
      } 

      
      
     

    
    }

  

}
