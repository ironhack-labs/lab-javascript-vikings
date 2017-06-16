// Soldier
function Soldier ( health, strength ) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
function Viking ( name, health, strength) {
  Soldier.call(this, health, strength );
  this.name = name;
  this.receiveDamage = function( damage ) {
    this.health -= damage;
    return (this.health <= 0)
      ? this.name + " has died in act of combat"
      : this.name + " has received " + damage + " points of damage";
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon ( health , strength ) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function( damage ){
    this.health -= damage;
    return (this.health <= 0)
      ? "A Saxon has died in combat"
      : "A Saxon has received " + damage + " points of damage";
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (saxon){
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function(){

    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if(this.saxonArmy[0].health <= 0) this.saxonArmy.splice(0, 1);
    return result;
  };
  this.saxonAttack = function () {
    var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if(this.vikingArmy[0].health <= 0) this.vikingArmy.splice(0, 1);
    return result;
  }



}
