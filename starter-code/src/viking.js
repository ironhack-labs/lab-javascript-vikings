// Soldier
function Soldier(health,strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health,strength);
  this.battleCry = function() {
    return "Odin Owns You All!"
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  };
  
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  };
  
  
  
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  // debugger;
  
  this.vikingArmy = [];
  this.saxonArmy = [];
  
  this.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  }
  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
    
  }
  this.vikingAttack = function(){
    
    var randomNumber = Math.floor(Math.random()*this.saxonArmy.length);
    var currentSaxon = this.saxonArmy[randomNumber];
    
    var output = currentSaxon.receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
    
    (currentSaxon.health <= 0) ? (this.saxonArmy.splice(randomNumber,1), console.log("this guy did not make it")): console.log("still alive");

    return output;


  }
  this.saxonAttack = function(){
    var randomNumber = Math.floor(Math.random()*this.vikingArmy.length);
    var currentViking = this.vikingArmy[randomNumber];
    
    var output = currentViking.receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength);
    
    (currentViking.health <= 0) ? (this.vikingArmy.splice(randomNumber,1), console.log("this guy did not make it")): console.log("still alive");

    return output;


  }
  this.showStatus = function(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }

    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }

    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
    
  }
  
  
  
  
  
}





