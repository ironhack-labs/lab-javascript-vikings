// Soldier
function Soldier(health ,strength) {
    this.health= health;
    this.strength= strength;
    this.receiveDamage = function(damage){
         this.health = this.health - damage;
    }
}

// Viking
function Viking(name, health , strength) {
    this.name= name;
    this.health= health;
    this.strength= strength;
    this.battleCry= function(){
    return "Odin Owns You All!"
    };
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if (this.health > 0){return this.name + " has received " + damage + " points of damage";}
        else {return this.name + " has died in act of combat";}
    };
    
}
    
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Soldier.prototype.attack = function(){
    return this.strength
};

// Saxon
function Saxon( health , strength) {
    this.health = health;
    this.strength= strength;
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if (this.health > 0){return  "A Saxon has received "  + damage + " points of damage";}
        else {return "A Saxon has died in combat";}
    };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  var vikingArmy = [];
  var saxonArmy = [];
  this.vikingArmy = vikingArmy;
  this.saxonArmy = saxonArmy;

  this.addViking = function(viking){
    vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon){
    saxonArmy.push(saxon);
  };
  this.vikingAttack = function(){
    var randomSaxon = Math.floor(Math.random() * saxonArmy.length);
    var randomViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)];
    var attackResult = saxonArmy[randomSaxon].receiveDamage(randomViking.strength);
    if (saxonArmy[randomSaxon].health < 1){
      saxonArmy.splice(randomSaxon, 1);
    }
    return attackResult;
  };
  this.saxonAttack = function(){
    var randomViking = Math.floor(Math.random() * vikingArmy.length);
    var randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
    var attackResult = vikingArmy[randomViking].receiveDamage(randomSaxon.strength);
    if (vikingArmy[randomViking].health < 1){
      vikingArmy.splice(randomViking, 1);
    }   
    return attackResult;
  };
  this.showStatus = function(){
    if (saxonArmy.length < 1){
        return "Vikings have won the war of the century!";
    }
    else if (vikingArmy.length < 1){
        return "Saxons have fought for their lives and survive another day...";
    }
    else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}