// Soldier
function Soldier(soldierHealth, soldierStrength) {
	this.health = soldierHealth;
	this.strength = soldierStrength;
}

Soldier.prototype.attack = function() {
	return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
	this.health -= damage;
};

// Viking
function Viking(vikingName, vikingHealth, vikingStrength) {
	Soldier.call(this, vikingHealth, vikingStrength);
	this.name = vikingName;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
	this.health -= damage;
	if (this.health > 0) {
		return this.name + " has received " + damage + " points of damage";
	} else {
		return this.name + " has died in act of combat";
	}
};
Viking.prototype.battleCry = function() {
	return "Odin Owns You All!";
};

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(saxonHealth, saxonStrength) {
	Soldier.call(this, saxonHealth, saxonStrength);
}

Saxon.prototype.receiveDamage = function(damage) {
	this.health -= damage;
	if (this.health > 0) {
		return this.name + " has received " + damage + " points of damage";
	} else {
		return this.name + " has died in act of combat";
	}
};

// War
function War() {}
