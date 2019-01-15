// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

  Soldier.prototype.attack = function(){
    return this.strength;
  } 

  Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health-damage;
  }

// Viking

function Viking(name,health,strength) {
  Soldier.call(this,health, strength);
  this.name = name

  }
  
  Viking.prototype = Object.create(Soldier.prototype);

  Viking.prototype.constructor = Viking;
  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      var text = " has received " + damage + "points of damage";
      return this.name + text;
    }
    else {
      return this.name + " has died in act of comba";
    }
  }

  Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  }

// Saxon
function Saxon(health, strength) {
  Saxon.call(this,health, strength);
  }
  
  Viking.prototype = Object.create(Soldier.prototype);

  Viking.prototype.constructor = Saxon;
  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      var text = "A Saxon has received " + damage + " points of damage";
      return this.name + text;
    }
    else {
      return this.name + "A Saxon has died in combat";
    }
  }


// War
function War() {}
