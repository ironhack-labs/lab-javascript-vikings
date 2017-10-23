// Soldier
function Soldier ( health, strength ) {
this.health = health; 
this.strength = strength;

}

// Functions 
Soldier.prototype.attack = function () {
	return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
	 this.health -=  damage;
};

// -------------NEXT---------------------

// Viking
function Viking ( name, health, strength ) {
	 Soldier.call(this, health, strength );
	 this.name = name;

	
}


Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
	this.health -=  damage;
	if (this.health > 0) {
		return this.name + ' has received ' + damage + ' points of damage';
	} else {
		 return this.name + ' has died in act of combat';
	}
};

Viking.prototype.battleCry = function () {
	return "Odin Owns You All!";
};




// -------------NEXT---------------------
// Saxon
function Saxon (health, strength) {
	Soldier.call(this, health, strength);
}


Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
	this.health -=  damage;
	if (this.health > 0) {
		return 'A Saxon has received ' + damage + ' points of damage';
	} else {
		 return 'A Saxon has died in combat';
	}
};

// -------------NEXT---------------------
// War
function War () {
	this.vikingArmy = [];
	this.saxonArmy = [];

	

	War.prototype.addViking = function ( Viking ) {
		this.vikingArmy.push( Viking );
	};

	War.prototype.addSaxon = function ( Saxon ) {
		this.saxonArmy.push( Saxon );
	};

	War.prototype.vikingAttack = function () {
		var i = Math.floor( Math.random() * this.saxonArmy.length  );
		var j = Math.floor( Math.random() * this.vikingArmy.length );

			this.saxonArmy[i].receiveDamage( this.vikingArmy[j].strength );
			
			if ( this.saxonArmy[i] <= 0 ) {
			this.saxonArmy.pop([i]);
		}
	};
}




