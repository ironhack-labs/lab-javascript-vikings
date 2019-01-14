// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(health, strength);

  this.name = name;
  this.health = health;
  this.strength = strength;

  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(health, strength);

  this.health = health;
  this.strength = strength;
  
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
   //Viking's army property array (empty)
  this.vikingArmy = [];
  //Saxon's army property array (empty)
  this.saxonArmy = [];

  this.addViking = function(vikingObject){
    this.vikingArmy.push(vikingObject);

  }

  this.addSaxon = function(saxonObject){
    this.saxonArmy.push(Saxon);

  }

  this.vikingAttack = function(){
    Saxon.receiveDamage(Viking.strength);

    for(var i = 0; i < this.saxonArmy.length; i++){
        if(this.saxonArmy[i].health <= 0){
          this.saxonArmy.splice(this.saxonArmy[i]);
        }
    }
    return Saxon.receiveDamage();
  }

  this.saxonAttack = function(){
    Viking.receiveDamage = Saxon.strength;

    for(var i = 0; i < this.vikingArmy.length; i++){
        if(this.vikingArmy[i].health <= 0){
          this.vikingArmy.splice(this.vikingArmy[i]);
        }
    }
    return Viking.receiveDamage();
  }

  this.showStatus = function(){

  }


}
