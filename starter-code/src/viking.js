// Soldier

function Soldier(health, strength) {
	this.health = health;
	this.strength = strength;
};

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

Viking.prototype.battleCry = function() {
	return 'Odin Owns You All!';
};

Viking.prototype.receiveDamage = function(damage) {
	this.health -= damage;
	if (this.health > 0) {
		return `${this.name} has received ${damage} points of damage`;
	} else {
		return `${this.name} has died in act of combat`;
	}
};

// Saxon

function Saxon(health, strength) {
	Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return 'A Saxon has died in combat';
  }
};


// War

function War() {
	this.vikingArmy = [];
	this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
	this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
	this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
	var chooseRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
	var chooseRandomViking = Math.floor(Math.random() * this.vikingArmy.length);

	var attackedSaxon = this.saxonArmy[chooseRandomSaxon];
	var attackingViking = this.vikingArmy[chooseRandomViking];

	var vikingAttack = attackedSaxon.receiveDamage(attackingViking.strength);

	if (attackedSaxon.health <= 0) {
		this.saxonArmy.splice(chooseRandomSaxon, 1);
	}

	return vikingAttack;
};

War.prototype.saxonAttack = function() {
	var chooseRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
	var chooseRandomViking = Math.floor(Math.random() * this.vikingArmy.length);

	var attackingSaxon = this.saxonArmy[chooseRandomSaxon];
	var attackedViking = this.vikingArmy[chooseRandomViking];

	var saxonAttack = attackedViking.receiveDamage(attackingSaxon.strength);

	if (attackedViking.health <= 0) {
		this.vikingArmy.splice(chooseRandomViking, 1);
	}

	return saxonAttack;
};

War.prototype.showStatus = function() {
	switch (true) {
		case this.saxonArmy.length < 1:
			return 'Vikings have won the war of the century!';

		case this.vikingArmy.length < 1:
			return 'Saxons have fought for their lives and survive another day...';

		default:
			return 'Vikings and Saxons are still in the thick of battle.';
	}
};
