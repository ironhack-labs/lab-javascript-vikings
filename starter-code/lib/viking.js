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

function Soldier (name, health, strength) {
  this.name = name;
  this.health = 300;
  this.strength = 150;
  this.attack = function(){};
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
  };
}
function  generateSoldier() {
  soldier = new Soldier(health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  Soldier.call(this, name, health, strength);
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health <= 0){
      return name + ' has died in act of combat';
    }
    return name + ' has received ' + damage + ' points of damage';
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}

function  generateViking() {
  viking = new Viking();
  return viking;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.health = 60;
  this.strength = 25;
  this.receiveDamage = function(damage){
  this.health = this.health - damage;
    if (this.health <= 0){
      return "A Saxon has died in combat";
    }
    return 'A Saxon has received ' + damage + ' points of damage';
  };
}

function  generateSaxon() {
  saxon = new Saxon();
  return saxon;
}



function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];
  this.viking = generateViking();
  this.saxon = generateSaxon();
  this.addViking = function(){
  this.vikingsArmy.push(this.Viking);
};
  this.addSaxon = function(){
  this.saxonsArmy.push(this.saxon);
};
  this.saxonAttack = function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.vikingAttack = function(){
    this.saxonsArmy.length = 0;
    return 'A Saxon has died in combat';
  };
  this.fight = function (){};
  this.showStats = function(){
    return 'Vikings have won the war of the century!';
  };
}


module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
