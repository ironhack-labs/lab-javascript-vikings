// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damageAmount){
    this.health -= damageAmount;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name; 
  this.receiveDamage = function(damageAmount){
    this.health -= damageAmount;
      if(this.health > 0){
        return (this.name + ' has received '+ damageAmount +
      ' points of damage');
      } else{
        return (this.name + ' has died in act of combat');
    }
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
//Viking.prototype.receiveDamage = function(damageAmount){
//  this.health -= damageAmount;
//  if(this.health > 0){
//    return (this.name + ' has received '+ damageAmount +
//  ' points of damage');
//  } else{
//    return (this.name + ' has died in act of combat');
//  }
//};


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damageAmount){
    this.health -= damageAmount;
    if(this.health > 0){
      return ('A Saxon has received ' + damageAmount + ' points of damage');
    } else {
      return('A Saxon has died in combat');
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {}
