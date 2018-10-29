function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  
  Soldier.prototype.attack = function() {
    return this.strength;
  };
  
  Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  };
  
  // Viking
  
  function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
  }
  
  Viking.prototype = Object.create(Soldier.prototype);//HACE QUE LOS OBJETOS VIKINGS HEREDEN EL PROTOTYPE DE SOLDIER
  //Viking.prototype.constructor = Viking;//NO SE QUE HACE
  
  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return (this.health>0)? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }
  
  Viking.prototype.battleCry = function(){
    return `Odin Owns You All!`
  }
  
  // Saxon
  function Saxon(health, strength) {
    Soldier.call(this, health, strength)
  }
  
  Saxon.prototype = Object.create(Soldier.prototype);
  
  Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return (this.health>0)? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }
  
  // War
  function War() {}
  