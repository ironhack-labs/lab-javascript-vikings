// Soldier
function Soldier (health,strength) {
this.health = health;
this.strength= strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage= function(theDamage){
this.health= this.health - theDamage;
};
// Viking
function Viking (name, health, strength) {
Soldier.call(this, health, strength);
this.name = name;
}
Viking.prototype= Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(theDamage){
this.health -= theDamage;
if( this.health > 0 ){
return this.name + " has received " + theDamage + " points of damage";
} else {
  return this.name +' has died in act of combat';
}
};
// Saxon
function Saxon (health, strength) {
  Soldier.call(this,health,strength);
}
Saxon.prototype=Object.create(Soldier.prototype);
Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!';
};
Saxon.prototype.receiveDamage= function(theDamage){
this.health= this.health - theDamage;
if( this.health > 0 ){
return "A Saxon has received "+ theDamage + " points of damage";
}
else{
  return 'A Saxon has died in combat';
}
};
// War
function War () {
this.vikingArmy=[];
this.saxonArmy=[];
}
Viking.prototype.addViking= function(){
return;
};
