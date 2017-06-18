// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health= this.health - damage;
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  War.call(this);


}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
    if (this.health - damage > 0 ) {
      this.health = this.health - damage;
      return this.name + " has received "+damage+" points of damage";

    }else {
      this.health = this.health - damage;
      return this.name + " has died in act of combat";
    }
}
Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
}
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  War.call(this);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
  if (this.health - damage > 0 ) {
    this.health = this.health - damage;
    return   "A Saxon has received " +damage +" points of damage";
  }else {
    this.health = this.health - damage;

    return   "A Saxon has died in combat";
  }
}


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
}


War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
}


War.prototype.vikingAttack = function (){
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var saxon = this.saxonArmy[randomSaxon];
  var text = "A Saxon has died in combat";
  var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  var viking = this.vikingArmy[randomViking];
  viking.strength = saxon.receiveDamage();
  if (viking.strength == text) {
    this.saxonArmy.splice(randomSaxon);

  }
return viking.strength;
}


War.prototype.saxonAttack = function (){
  var randomSaxon2 = Math.floor(Math.random() * this.saxonArmy.length);
  var saxon1 = this.saxonArmy[randomSaxon2];
  var randomViking2 = Math.floor(Math.random() * this.vikingArmy.length);
  var viking1 = this.vikingArmy[randomViking2];
  var text1 = viking1.name + " has died in act of combat";
//  console.log(viking.name);
console.log(saxon1.strength + "daño de saxon");
console.log(viking1.health + "vida viking");

//  console.log(viking.d);

  saxon1.strength = viking1.receiveDamage();

  if (saxon1.strength == text1) {
    this.vikingArmy.splice(randomViking2);

  }
console.log(saxon1.strength);
 return saxon1.strength;
  }
  War.prototype.showStatus = function(){
    console.log(this.saxonArmy);
    console.log(this.vikingArmy);
  if(this.saxonArmy.length <= 0){
    return "Vikings have won the war of the century!";
  }else if (this.vikingArmy.length <= 0) {

    return "Saxons have fought for their lives and survive another day...";
  }else if ((this.saxonArmy.length >= 1) && (this.vikingArmy >= 1)){
    return "Vikings and Saxons are still in the thick of battle.";

  }
  };
