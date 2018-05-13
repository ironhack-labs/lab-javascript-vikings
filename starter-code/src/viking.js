// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
      return this.strength;
    }
    this.receiveDamage = function (damage){
      this.health = this.health - damage;
    }
  }
  
  
  // Viking
  function Viking(name, health, strength) {
    
    Soldier.call(this, health, strength);
    this.name = name;
    
    this.battleCry = function(){
      return "Odin Owns You All!"
    }
    
    this.receiveDamage = function(damage){
      this.health = this.health - damage;
      console.log(this.health);
      if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
        } else if (this.health <= 0){
        return this.name + " has died in act of combat";
      }
    }
  }
  
  Viking.prototype=Object.create(Soldier.prototype);
  
  
  
  
  // Saxon
  function Saxon(health, strength) {
    
    Soldier.call(this,health,strength);
   
    this.receiveDamage = function (damage){
     this.health = this.health - damage;
      if (this.health > 0){
        return "A Saxon" + " has received " + damage + " points of damage";
        } else if (this.health <= 0){
        return "A Saxon" + " has died in combat";
      } 
    }
  }
  
  Saxon.prototype = Object.create(Soldier.prototype);
  
  
  
  // War
  function War() {

    this.vikingArmy = [];
    this.saxonArmy = [];
    
    this.addViking = function(viking){
      this.vikingArmy.push(viking);
      
    }
    
    this.addSaxon = function(saxon){
      this.saxonArmy.push(saxon);
      
    }
    
    this.vikingAttack = function(){
      
      
    
    
    }
    
    
    this.saxonAttack = function(){
      
    }
    
    
    this.showStatus = function(){
      
    }
    
  }
  