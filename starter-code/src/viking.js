// Soldier
function Soldier(health, strength) {
	this.health = health;
	this.strength = strength;
}
Soldier.prototype.attack = function() {
	return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
	this.health -= damage;
};
// Viking
function Viking(name, health, strength) {
	Soldier.call(this, health, strength);

	this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
	this.health -= damage;

	if (this.health <= 0) {
		return this.name + ' has died in act of combat';
	} else {
		return this.name + ' has received ' + damage + ' points of damage';
	}
};
Viking.prototype.battleCry = function() {
	return 'Odin Owns You All!';
};

// Saxon
function Saxon(health, strength) {
	Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage) {
	this.health -= damage;

	if (this.health <= 0) {
		return 'A Saxon has died in combat';
	} else {
		return 'A Saxon has received ' + damage + ' points of damage';
	}
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(Viking) {
	this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function (){
	var saxonRandom = Math.trunc(Math.random()*this.saxonArmy.length)
	var saxon = this.saxonArmy[saxonRandom];
	var vikingRandom =Math.trunc(Math.random()*this.vikingArmy.length)
	var viking = this.vikingArmy[vikingRandom];
	 
	 var daño = saxon.receiveDamage (viking.strength);

if (viking.strength > saxon.health ){
	 this.saxonArmy.splice(saxonRandom,1);
}else{
	
}
return daño;
};

War.prototype.saxonAttack = function (){
	var saxonRandom = Math.trunc(Math.random()*this.saxonArmy.length)
	var saxon = this.saxonArmy[saxonRandom];
	var vikingRandom =Math.trunc(Math.random()*this.vikingArmy.length)
	var viking = this.vikingArmy[vikingRandom];
	 
	 var daño = viking.receiveDamage (saxon.strength);

if (saxon.strength > viking.health ){
	 this.vikingArmy.splice(vikingRandom,1);
}else{
	
}
return daño;
};
War.prototype.showStatus = function (){

if ( this.saxonArmy = []){
	return "Vikings have won the war of the century!";
}
if ( this.vikingArmy = []){
	return "Saxons have fought for their lives and survive another day...";
}
if (this.vikingArmy != [] && this.saxonArmy != []){
	return "Vikings and Saxons are still in the thick of battle."
}

};