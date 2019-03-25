// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	};

	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;
		return;
	} 

}


// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health>0) return `${this.name} has received ${damage} points of damage`
		else return `${this.name} has died in act of combat`;
	}
	battleCry() {
		return "Odin Owns You All!"
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength)
	}
receiveDamage(damage) {
		this.health -= damage;
		if (this.health>0) return `A Saxon has received ${damage} points of damage`
		else return `A Saxon has died in combat`;
	}
}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(viking) {
		this.vikingArmy.push(viking);
		return;
	}

	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
		return;
	}

/*
	armiesAttack() {
	}

	vikingAttack() {
		var random1 = Math.floor(Math.random()*this.saxonArmy.length)
		var random2 = Math.floor(Math.random()*this.vikingArmy.length)

		var aSaxon = this.saxonArmy[random1];
		var aViking = this.vikingArmy[random2];

		if (aSaxon.health <= aViking.strength) this.saxonArmy.splice(random1, 1);
		return aSaxon.receiveDamage(aViking.strength);
	}

	saxonAttack() {
		var random1 = Math.floor(Math.random()*this.saxonArmy.length)
		var random2 = Math.floor(Math.random()*this.vikingArmy.length)

		var aSaxon = this.saxonArmy[random1];
		var aViking = this.vikingArmy[random2];

		if (aSaxon.health <= aViking.strength) this.saxonArmy.splice(random1, 1);
		return aSaxon.receiveDamage(aViking.strength);
	}
}
*/

	chooseRandomSoldiers() {
		var random1 = Math.floor(Math.random()*this.saxonArmy.length)
		var random2 = Math.floor(Math.random()*this.vikingArmy.length)

		var randomSaxon = this.saxonArmy[random1];
		var randomViking = this.vikingArmy[random2];

		return [ randomSaxon, randomViking, random1, random2 ];

	}
	vikingAttack() {		
		var fighters = this.chooseRandomSoldiers()
		var aSaxon = fighters[0]
		var aViking = fighters[1]

		if (aSaxon.health <= aViking.strength) this.saxonArmy.splice(fighters[3], 1);
		return aSaxon.receiveDamage(aViking.strength);
	}

	saxonAttack() {
		var fighters = this.chooseRandomSoldiers()
		var aSaxon = fighters[0]
		var aViking = fighters[1]

		if (aViking.health <= aSaxon.strength) this.vikingArmy.splice(fighters[4], 1);
		return aViking.receiveDamage(aSaxon.strength);
	}

	showStatus() {
		if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
		else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";
		else return "Vikings and Saxons are still in the thick of battle.";
	}
}
