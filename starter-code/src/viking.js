// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength
  }
  
  Soldier.prototype.attack=function(){
    return this.strength;
  }
  
  Soldier.prototype.receiveDamage=function(damage){
  
      this.health -= damage;
  }
  
  // Viking
  function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage=function(damage){
  
      this.health -= damage;
      if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
      }
      else{
        return this.name + " has died in act of combat"
      }
    }
    
  this.battleCry=function(){
    return "Odin Owns You All!"
  }
  }
  
  Viking.prototype = Object.create(Soldier.prototype)
  Viking.prototype.constructor=Viking;
  
  
  
  // Saxon
  function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.receiveDamage = function(damage){
      this.health -= damage;
      if(this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
      }
      else{
        return "A Saxon has died in combat";
      }
    }
  }
  Saxon.prototype = Object.create(Soldier.prototype)
  Saxon.prototype.constructor=Saxon;
  
  // War
  function War() {
    this.vikingArmy = [];
    this.saxonArmy =[];
  }
  
  War.prototype.addViking=function(viking){
      this.vikingArmy.push(viking);
  };
  War.prototype.addSaxon=function(saxon){
    this.saxonArmy.push(saxon);
  };
  War.prototype.vikingAttack=function(){
    var num1 = Math.floor(Math.random() * this.saxonArmy.length);
    var num2 =Math.floor(Math.random() * this.vikingArmy.length);
    var saxonHealth = this.saxonArmy[num1].receiveDamage(this.vikingArmy[num2].attack());
    if (this.saxonArmy[num1].health < 1){
      this.saxonArmy.splice(num1, 1);
    }
    return saxonHealth;
  };
  War.prototype.saxonAttack=function(){
    var num1 = Math.floor(Math.random() * this.vikingArmy.length);
    var num2 =Math.floor(Math.random() * this.saxonArmy.length);
    var vikingHealth = this.vikingArmy[num1].receiveDamage(this.saxonArmy[num2].attack());
    if (this.vikingArmy[num1].health < 1){
      this.vikingArmy.splice(num1, 1);
    }
    return vikingHealth;
  
    
  };
  War.prototype.showStatus=function(){
    if(this.saxonArmy.length===0){
      return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length===0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  
  };
