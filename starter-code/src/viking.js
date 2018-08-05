// Soldier
function Soldier(health, strength) {
	this.health = health;
	this.strength = strength;
	this.attack = function() {
		return strength;
	};
	this.receiveDamage = function() {
		return health;
	};
}

// Viking
function Viking(name, health, strength) {
	this.name = name;
	Soldier.call(this, health, strength);
	this.receiveDamage = function(damage) {
		this.health -= damage;
		if (this.health > 0) {
			return this.name + ' has received ' + damage + ' points of damage';
		} else {
			return this.name + ' has died in act of combat';
		}
		return this.health;
	};
	this.battleCry = function() {
		return 'Odin Owns You All!';
	};
}

// Saxon
function Saxon(health, strength) {
	Soldier.call(this, health, strength);
	this.receiveDamage = function(damage) {
		return (this.health -= damage);
		if (this.health > 0) {
			return 'a Saxon has received ' + damage + ' points of damage';
		} else {
			return 'a Saxon has died in act of combat';
		}
		return this.health;
	};
}

// War
function War() {}
