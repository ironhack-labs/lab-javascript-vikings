// Soldier
function Soldier (healthParam,strengthParam) {
this.health=healthParam;
this.strength=strengthParam;
}
Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
this.health -= damage;
};



// Viking
function Viking (name,healthParam,strengthParam) {
  Soldier.call(this,healthParam,strengthParam);
    this.name= name;
}
Viking.prototype= Object.create(Soldier.prototype);

Viking.prototype.receiveDamage= function(damage){
  this.health -= damage;
if(this.health>0){
  return this.name + " has received " + damage + " points of damage";
}else{
  return this.name +  " has died in act of combat";
  }
};

Viking.prototype.battleCry= function(){
  return "Odin Owns You All!";
};
// Saxon
function Saxon (healthParam,strengthParam) {
Soldier.call(this,healthParam,strengthParam);
}
Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage= function(damage){
  this.health-= damage;
  if(this.health>0){
    return "A Saxon has received " + damage + " points of damage";
  }else{
     return "A Saxon has died in combat";
  }
};
// War
function War () {
this.vikingArmy= [];
this.saxonArmy=[];
}
War.prototype.addViking =function(viking){
this.vikingArmy.push(viking);
};
War.prototype.addSaxon=function(saxon){
this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack= function(){


};
