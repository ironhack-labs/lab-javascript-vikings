// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength =  strength;
}
Soldier.prototype.attack =  function() {
return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {

this.health = this.health - damage;
console.log(this.health);
}

// Viking
function Viking(name, health, strength) {
  this.name = name; 
  this.health = health; 
  this.strength = strength; 
} 
Viking.prototype = Object.create(Soldier.prototype);


Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
 
  if(this.health > 0){
   return(this.name + " has received "+ damage + " points of damage"); 
  }
  else{ 
  return(this.name + " has died in act of combat"); 
} 
}
Viking.prototype.battleCry = function (){
 return("Odin Owns You All!");
}

// Saxo
function Saxon(health,strength) {
  this.health = health;
  this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;

  if(this.health > 0){
    return("A Saxon has received "+ damage + " points of damage"); 
   } else {
     return( "A Saxon has died in combat");
   }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking= function(viking){
    this.vikingArmy = [viking];
  }
  
  War.prototype.addSaxon = function(saxon){
    this.saxonArmy = [saxon];
 }
  
 War.prototype.vikingAttack = function(saxon){
 console.log(this.saxonArmy[0])
} 

