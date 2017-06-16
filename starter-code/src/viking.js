// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

}
  Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}



// Viking
function Viking (name, health , strength) {
  Soldier.call(this,health,strength)
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health>damage){
  return  this.name+ " has received "+damage+ " points of damage";

  }else {
    return this.name+" has died in act of combat";
  }
};
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}

// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength)
  this.name = name;
}
Saxon.prototype= Object.create(Soldier.prototype);

Soldier.prototype.attack = function(){
return this.strength;
}
Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return "A Saxon has received "+ damage + " points of damage";
  }else{
    return "A Saxon has died in combat";

  }
}
// War
function War () {}
