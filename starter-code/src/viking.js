// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function() {
      return this.strength;
      
  };
  this.receiveDamage = function(damage){
      this.health = this.health - damage;
  }
}


// Viking
function Viking(name,health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function(){
      return "Odin Owns You All!";
  }
  this.receiveDamage = function(damage){
      this.health = this.health - damage;
      if (this.health > 0) {
          return this.name + " has received " + damage +" points of damage";
      }
      else{
          return this.name + " has died in act of combat";
      }
  }
}

Viking.prototype.constructor = Viking;
Viking.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function() {
      return this.strength;

  }
  this.receiveDamage = function(damage){
      this.health = this.health - damage;
      if (this.health > 0) {
          return "A Saxon has received " + damage +" points of damage";
      }
      else{
          return "A Saxon has died in combat";
      }
  }
}
Saxon.prototype.constructor = Saxon;
Saxon.prototype = Object.create(Soldier.prototype);   


// War
function War() {}
//