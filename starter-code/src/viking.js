function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
  }
  
  Soldier.prototype.attack = function(){
    return this.strength;
  } 
  
  Soldier.prototype.receiveDamage = function(damage){
   this.health = this.health - damage 
  }
  
  function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this,health,strength);
    }
    
    Viking.prototype = Object.create(Soldier.prototype)
  
  
  
  
  Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage 
      if (this.health > 0){
        console.log(this.name + " has received " + damage + " points of damage")
    } else {
      
      console.log(this.name + " has died in act of combat.")
    }
  
  }
  
  
  Viking.prototype.battleCry = function(){
    
    return "Odin owns you all."
    
  }
  
  function Saxon (health,strength){
    
    Soldier.call(this,health,strength);
    
  } 
  
  Saxon.prototype = Object.create(Soldier.prototype)
  
  Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage 
      if (this.health > 0){
        console.log("A Saxon has received " + damage + " points of damage.")
    } else {
      
      console.log("A Saxon has died in act of combat.")
    }
  
  }
  
  