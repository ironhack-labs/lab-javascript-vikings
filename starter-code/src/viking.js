// Soldier
function Soldier (healthParam,strengthParam) {
  this.health = healthParam;
  this.strength = strengthParam;
}

Soldier.prototype.attack = function (){
  return this.strength;
};
Soldier.prototype.receiveDamage = function (damageParam) {
 this.health -= damageParam;
};

// Viking
function Viking (nameParam,healthParam,strengthParam) {
  var viking;
  var name     = "Harald";
  var strength = 150;
  var health   = 300;



this.name= name;
this.health = health;
this.strength = strength;
Soldier.call(this,healthParam,strengthParam);

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function (damageParam) {
 this.health -= damageParam;
 if (this.health > 0){
   return this.name + " has received " + damageParam + " points of damage";
 }
 else{
   return this.name + " has died in act of combat";
 }
};
Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
  };



// Saxon
function Saxon (healthParam,strengthParam) {
  Soldier.call(this,healthParam,strengthParam);


  }
  Saxon.prototype = Object.create(Soldier.prototype);
  Saxon.prototype.receiveDamage = function (damageParam) {
    this.health -= damageParam;
    if (this.health > 0){
      return "A Saxon has received " + damageParam + " points of damage";
    }
    else{
      return "A Saxon has died in combat";
      }
};









// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
var saxon1 = this.saxonArmy[0];
var viking1 = this.vikingArmy[0];
saxon1.receiveDamage(viking1.strength);
if (saxon1.health <= 0){
  this.saxonArmy.splice(saxon1,1);
  return "A Saxon has died in combat";
}

};

War.prototype.saxonAttack = function(){
var saxon2 = this.saxonArmy[0];
var viking2 = this.vikingArmy[0];
viking2.receiveDamage(saxon2.strength);
if (viking2.health <= 0){
  this.vikingArmy.splice(viking2,1);
  return viking2.name + " has received " + saxon2.strength + " points of damage";
}
else{
    return viking2.name + " has received " + saxon2.strength + " points of damage";
}

};


War.prototype.showStatus = function (){

  return "Vikings have won the war of the century!";

};
