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
var viking1 = new Viking('Marco', 30, 10)
var viking2 = new Viking('Gabri', 20, 5)
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

var saxon1 = new Saxon(25, 5)
var saxon2 = new Saxon(20, 2)


// Constructor War
function War () {
	this.vikingArmy = [];
	this.saxonArmy = [];

}

War.prototype.addViking = function(viking){
	this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
	this.saxonArmy.push(saxon);
}

//viking attack method
War.prototype.vikingAttack = function(){
	//get random index from 0 to length of array
	var randomIndexViking = getRandom(this.vikingArmy.length)
	var randomIndexSaxon = getRandom(this.saxonArmy.length)
	//get random object from array with random index
	var randomViking = this.vikingArmy[randomIndexViking];
	var randomSaxon = this.saxonArmy[randomIndexSaxon];
	
	var message = randomSaxon.receiveDamage(randomViking.strength)

	if(randomSaxon.health < 1){
		this.saxonArmy.splice(randomIndexSaxon,1);
	}
	return message;
}

//saxon attack method
War.prototype.saxonAttack = function() {
	//get random index from 0 to length of array
	var randomIndexViking = getRandom(this.vikingArmy.length)
	var randomIndexSaxon = getRandom(this.saxonArmy.length)
	//get random object from array with random index
	var randomViking = this.vikingArmy[randomIndexViking];
	var randomSaxon = this.saxonArmy[randomIndexSaxon];

	var message = randomViking.receiveDamage(randomSaxon.strength)

	if(randomViking.health < 1){
		this.vikingArmy.splice(randomIndexViking,1)
	}
	return message;
}

//show status method
War.prototype.showStatus = function(){
	if(this.saxonArmy.length < 1){
		return "Vikings have won the war of the century!";
	} else if (this.vikingArmy.length < 1){
		return "Saxons have fought for their lives and survive another day...";
	} else {
		return "Vikings and Saxons are still in the thick of battle.";
	}
}


var war = new War()
var wa2 = new War();

//function for return random number
function getRandom(limit){
	return Math.floor(Math.random()*limit)
}

war.addViking(viking1)
war.addViking(viking2)

war.addSaxon(saxon1)
war.addSaxon(saxon2)



// Modify the Soldier constructor function and add 2 methods to its prototype: attack(), and receiveDamage().

// constructor function

// should receive 2 arguments (health & strength)
// should receive the health property as its 1st argument
// should receive the strength property as its 2nd argument
