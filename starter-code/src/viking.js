// Soldier
function Soldier (health, strength) {
	this.health     = health;
	this.strength   = strength;
}

Soldier.prototype.attack = function() {
	return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
	this.health     = this.health - damage;
}

	
	
// Viking
function Viking (name, health, strength) {
	this.name = name;
	Soldier.call(this, health, strength)
}

//Inheritance from soldier to viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function(){
	return "Odin Owns You All!";
}

Viking.prototype.receiveDamage = function(damage){
	this.health = this.health - damage;
	if(this.health<1){
		return this.name + " has died in act of combat";
	} else {
		return this.name + " has received "+ damage +" points of damage";
	}
}
var viking = new Viking('Marco', 30, 10)
// Saxon
function Saxon (health, strength) {
	Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
	this.health = this.health - damage;
	if(this.health<1){
		return "A Saxon has died in combat";
	} else {
		return "A Saxon has received " + damage + " points of damage";
	}
}

var saxon = new Saxon(25, 5)



// War
function War () {}
	





// Modify the Soldier constructor function and add 2 methods to its prototype: attack(), and receiveDamage().

// constructor function

// should receive 2 arguments (health & strength)
// should receive the health property as its 1st argument
// should receive the strength property as its 2nd argument
