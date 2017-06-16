//iteration 1 soldier
function Soldier(health,strength){
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}
  
Soldier.prototype.receiveDamage = function(damage){
    return this.health -= damage;
}
  
var soldier = new Soldier(300,150);

soldier.receiveDamage(4);

//iteration 2 viking
function Viking(name,health,strength){
  Soldier.call(this,health,strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage){
  
  Soldier.prototype.receiveDamage.call(this,damage);
  if(this.health <= 0){
    return this.name + " has died in act of combat";
    
  }else{
    return this.name + " has received "+ damage +" points of damage";
  }
}

var viking = new Viking("Harald",300,150);

viking.receiveDamage(10);


Viking.prototype.battleCry = function(){
  return "Odin Owns you all!";
}

viking.battleCry();

//iteration 3 saxon
function Saxon(health,strength){
  Soldier.call(this,health,strength)
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function (){
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage){
  Soldier.prototype.receiveDamage.call(this,damage);
  if(this.health <= 0){
    return "A saxon has died in act of combat";
    
  }else{
    return "A saxon has received "+ damage +" points of damage";
  }
}
var saxon = new Saxon(60,25);
saxon.receiveDamage(10);
