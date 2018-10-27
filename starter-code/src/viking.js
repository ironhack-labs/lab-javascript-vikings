// Soldier
function Soldier(health, strength) {
  this.health=health;
  this.strength=strength;
  /*this.attack=function(){
    return this.strength;
  }
  this.receiveDamage=function(damage){
    this.health-=damage;
  }*/
}
Soldier.prototype.attack=function(){
  return this.strength;
}
Soldier.prototype.receiveDamage=function(damage){
  this.health-=damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name=name;
  this.receiveDamage=function(hit){
    this.health-=hit;
    if (this.health>0){
      return `${this.name} has received ${hit} points of damage`;
    }
    else
    return `${this.name} has died in act of combat`;
  }
  this.battleCry = function(){
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage=function(hit){
    this.health-=hit;
    if (this.health>0){
      return `A Saxon has received ${hit} points of damage`;
    }
    else
    return `A Saxon has died in combat`;
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking= function(viking){
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon= function(saxon){
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack= function(){
 // debugger;
  var randViking=Math.floor(Math.random()*this.vikingArmy.length);
  var randSaxon=Math.floor(Math.random()*this.saxonArmy.length);
  var battleResult = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].attack());
   if (this.saxonArmy[randSaxon].health<=0){
     this.saxonArmy.splice(randSaxon,1);
   }
   return battleResult;
};
War.prototype.saxonAttack= function(){
  var randViking=Math.floor(Math.random()*this.vikingArmy.length);
  var randSaxon=Math.floor(Math.random()*this.saxonArmy.length);
  var battleResult = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].attack());
   if (this.vikingArmy[randViking].health<=0){
     this.vikingArmy.splice(randViking,1);
   }
   return battleResult;
};
War.prototype.showStatus= function(){
  if(this.saxonArmy.length == 0)
    return "Vikings have won the war of the century!";
  
  if(this.vikingArmy.length == 0)
    return "Saxons have fought for their lives and survive another day...";

  return "Vikings and Saxons are still in the thick of battle.";
};
