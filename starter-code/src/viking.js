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
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.saxonRandIdx = 0;
  this.vikingRandIdx = 0;
  this.returnMsg = '';

  this.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function(){
    this.saxonRandIdx = Math.floor(Math.random()*(this.saxonArmy.length));
    this.vikingRandIdx = Math.floor(Math.random()*(this.vikingArmy.length));

    this.returnMsg = this.saxonArmy[this.saxonRandIdx].receiveDamage(this.vikingArmy[this.vikingRandIdx].strength);
    if (this.saxonArmy[this.saxonRandIdx].health <= 0){
      this.saxonArmy.splice(this.saxonRandIdx, 1);
    };
    return this.returnMsg;

  };

  this.saxonAttack = function(){
    this.saxonRandIdx = Math.floor(Math.random()*(this.saxonArmy.length));
    this.vikingRandIdx = Math.floor(Math.random()*(this.vikingArmy.length));

    this.returnMsg = this.vikingArmy[this.vikingRandIdx].receiveDamage(this.saxonArmy[this.saxonRandIdx].strength);
    if (this.vikingArmy[this.vikingRandIdx].health <= 0){
      this.vikingArmy.splice(this.vikingRandIdx, 1);
    };
    return this.returnMsg;

  };

  this.showStatus = function(){};

}
