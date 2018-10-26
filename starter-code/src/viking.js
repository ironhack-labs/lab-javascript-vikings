// Soldier
function Soldier(healthArg, strengthArg) {
  this.health= healthArg;
  this.strength=strengthArg;
}
Soldier.prototype.attack=function(){
  return this.strength;
}

Soldier.prototype.receiveDamage=function(damage){
  this.health-=damage;
}

// Viking
function Viking(name, health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
}
Viking.prototype=Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;

Viking.prototype.receiveDamage=function(damage){
  this.health-=damage;
  return (this.health<=0?`${this.name} has died in act of combat`:`${this.name} has received ${damage} points of damage`);
}

Viking.prototype.battleCry=function(){
  return "Odin Owns You All!";
}
// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
}


Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Viking;

Saxon.prototype.receiveDamage=function(damage){
  this.health-=damage;
  return (this.health<=0?`A Saxon has died in combat`:`A Saxon has received ${damage} points of damage`);
}


// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
}
War.prototype.vikingAttack=function(){
  saxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
  var attackResult=this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
  if (this.saxonArmy[saxonIndex].health<=0){
      this.saxonArmy.splice(saxonIndex,1);
  }
  return attackResult;  
}
War.prototype.saxonAttack=function(){
  vikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
  var attackResult=this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength);
  if (this.vikingArmy[vikingIndex].health<=0){
      this.vikingArmy.splice(vikingIndex,1);
  }
  return attackResult;  
}
War.prototype.showStatus=function(){
  if (this.saxonArmy.length==0){
    return "Vikings have won the war of the century!"
  }
  else if (this.vikingArmy.length==0){
    return "Saxons have fought for their lives and survive another day..."
    }
  else{
    return "Vikings and Saxons are still in the thick of battle."}
}
