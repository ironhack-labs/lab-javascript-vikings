// Soldier

/*function Soldier(healthArg, strengthArg) {

    var soldier = {
        health: healthArg,
        strength: strengthArg
    };
       
    return soldier;
}
*/

function Soldier(health, strength) {

        this.health = health;
        this.strength = strength;

        var soldier = {health, strength};
       
    return soldier;
}

//var attack = new Soldier("a", "b");

/*
var attack = function() {

    strength = 150;
    health   = 300;
  
    return "Soldier strength is " + this.strength;
}
*/

/*function attack(){
    return "Soldier strength is " + this.strength;
  };
*/

var attack = new Soldier(150, 300);

attack.showSoldierStrength = function(){
    return "Soldier strength is " + this.strength;
  };


var receiveDamage = function(damage) {

damage - this.health;

}

// Viking
function Viking(name, health, strength) {

    Soldier.call(this, health, strength);
    this.name = name;
    var viking = {name, health, strength};
    return viking;
}

var vikingAttack = new Viking();

vikingAttack.showVikingStrength = function(){
    return "Viking strength is " + this.strength;
};



//var battleCry = new Soldier();

// Saxon
function Saxon() {}

// War
function War() {}
