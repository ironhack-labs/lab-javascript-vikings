// Soldier

function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function() {
	return this.strength;
    };

    this.receiveDamage = function(damage) {
	this.health -= damage;
    };
}

// Viking
function Viking (name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;

    this.receiveDamage = function(damage) {
	this.health -= damage;
	if (this.health > 0)
	    return this.name + " has received " + damage + " points of damage";
	else
	    return this.name + " has died in act of combat";
    };

    this.battleCry = function() {
	return "Odin Owns You All!";
    };
}

// Saxon
function Saxon (healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);

    this.receiveDamage = function(damage) {
	this.health -= damage;
	if (this.health > 0)
	    return "A Saxon has received " + damage + " points of damage";
	else
	    return "A Saxon has died in combat";
    };
}

// War
function War() {
    var vikingArmy = [];
    var saxonArmy = [];

    this.addViking = function(viking) {

    };

     this.addSaxon = function() {

     };

     this.vikingAttack = function() {

     };

     this.saxonAttack = function() {

     };

     this.showStatus = function() {

    };
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);
