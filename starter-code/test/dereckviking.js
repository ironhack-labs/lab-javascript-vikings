dariusz.glowinski [7:15 PM]
// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };

function Soldier(health, strength){
this.health = health;
this.strength = strength;

}
Soldier.prototype.attack = function(victim){
  return victim.receiveDamage(this.strength);
};
Soldier.prototype.receiveDamage = function(damage) {
this.health-=damage;
};

// Add a second class
function Viking(name, health, strength){
this.health = health;
this.strength = strength;
this.name = name;
this.battleCry = function(){
  return "Odin Owns You All!";
};
}

// And declare it is a subclass of the first
Viking.prototype = new Soldier();

// Override the instance method
Viking.prototype.receiveDamage = function(damage){

Soldier.prototype.receiveDamage.call(this, damage);

if(this.health>0) {
  return this.name + " has received " + damage + " points of damage";
} else {
  return this.name + ' has died in act of combat';
}

};

function Saxon (health, strength) {
 this.health = health;
 this.strength = strength;
}
Saxon.prototype = new Soldier();

Saxon.prototype.receiveDamage = function(damage){

Soldier.prototype.receiveDamage.call(this, damage);

if(this.health>0) {
  return  "A Saxon has received " + damage + " points of damage";
} else {
  return  "A Saxon has died in combat";
}

};

function War () {
this.vikingsArmy = [];
this.saxonsArmy = [];
this.addViking = function(viking){
 this.vikingsArmy.push(viking);
};
this.addSaxon = function(saxon){
 this.saxonsArmy.push(saxon);
};
this.vikingAttack = function(){
 var result ="";
 var that = this;
 this.vikingsArmy.forEach(function (viking , index){

 result = viking.attack(that.saxonsArmy[index]);
    if (that.saxonsArmy[index].health<=0){
      that.saxonsArmy.splice(index,1);
    }
 });
 return result;
};
this.saxonAttack = function(){
  var result ="";
  var that = this;
  this.saxonsArmy.forEach(function(saxon,index){
    result = saxon.attack(that.vikingsArmy[index]);
    if (that.vikingsArmy[index].health<=0){
      that.vikingsArmy.splice(index,1);
    }
  });
  return result;
};

this.fight = function (){
  this.saxonAttack();
  this.vikingAttack();
};
this.showStats = function (){
  if (this.vikingsArmy.length > this.saxonsArmy.length){
    return "Vikings have won the war of the century!";
  }
};
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
