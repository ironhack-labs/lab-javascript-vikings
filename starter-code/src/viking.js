// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    Soldier.prototype.receiveDamage = function(damage){
        this.health -=50;
    }

}



// Viking
function Viking(name, health, strength) { 
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  Viking.prototype = Object.create(Soldier.prototype);

  Viking.prototype.attack = function(){
      return this.strength;
  };
  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
   // if function (this.health === 0) {
   // return name + "has received" + damage + "points of damage";
  };






// Saxon
function Saxon() {}

// War
function War() {}
