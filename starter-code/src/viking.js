// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength; 
  };
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
  };

}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);  
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    }else{
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);  
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    }else{
      return "A Saxon has died in combat";
    };
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function(){
    selVik = Math.floor(Math.random() * (this.vikingArmy.length));
    selSax = Math.floor(Math.random() * (this.saxonArmy.length));
    var message = this.saxonArmy[selSax].receiveDamage(this.vikingArmy[selVik].strength);
    if(this.saxonArmy[selSax].health < 1){
      this.saxonArmy.splice(selSax, 1);
    }
    return message;
  };
  this.saxonAttack = function(){
    selVik = Math.floor(Math.random() * (this.vikingArmy.length));
    selSax = Math.floor(Math.random() * (this.saxonArmy.length));
    var message = this.vikingArmy[selVik].receiveDamage(this.saxonArmy[selSax].strength);
    if(this.vikingArmy[selVik].health < 1){
      this.vikingArmy.splice(selVik, 1);
    }
    return message;
  };
  this.showStatus = function(){
  if(this.saxonArmy.length==0){
    return "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length==0){
    return "Saxons have fought for their lives and survive another day...";
  }else{
    return "Vikings and Saxons are still in the thick of battle.";
  }
  };
}


