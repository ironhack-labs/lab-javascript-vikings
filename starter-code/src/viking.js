// Soldier
class Soldier {
	//Should recieve 2 arguments(health, strength)
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	//Attack method should receive 0 arguments and return the strength
	attack() {
		return this.strength;
	}

	//Receive damage should receive 1 argument and remove received damage from the health
	receiveDamage(damage) {
		this.health -= damage;
	}
}

// Viking
//Should inherit from Soldier
class Viking extends Soldier {
	//Receives name, health and strength
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	//receiveDamage() receives 1 argument: damage
	receiveDamage(damage) {
		this.health -= damage;
		return this.health > 0
			? `${this.name} has received ${damage} points of damage`
			: `${this.name} has died in act of combat`;
	}

	//battleCry() receives 0 arguments and returns "Odin owns you all"
	battleCry() {
		return `Odin Owns You All!`;
	}
}

// Saxon
//Should inherit from Soldier
class Saxon extends Soldier {
	//receives 2 arguments health and strength
	constructor(health, strength) {
		super(health, strength);
	}

	//receiveDamage reeives 1 argument: damage and returns text
	receiveDamage(damage) {
		this.health -= damage;
		return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
	}
}

// War
class War {
	//Should receive 0 arguments and create to empty arrays
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	//addViking receives Viking Object, fills array and return void
	addViking(Viking) {
		this.vikingArmy.push(Viking);
	}

	//addSaxon receives Saxon object, fills array and returns void
	addSaxon(Saxon) {
		this.saxonArmy.push(Saxon);
	}

	//vikingAttack receives 0 arguments
	vikingAttack() {
		//Make saxon receive damage
		//Next attack is Saxons
		//Get saxon
		let saxon = Math.floor(Math.random() * this.saxonArmy.length);
		//Get viking
		let viking = Math.floor(Math.random() * this.vikingArmy.length);
		//Is saxon dead
		let result = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength);
		console.log(this.saxonArmy, this.saxonArmy[saxon], saxon);
		if (this.saxonArmy[saxon].health <= 0) {
			this.saxonArmy.pop();
		}

		return result;
	}

	//saxonAttack
	saxonAttack() {
		//Make viking receive damage
		//Next attack is Saxons
		//Get saxon
		let saxon = Math.floor(Math.random() * this.saxonArmy.length);
		//Get viking
		let viking = Math.floor(Math.random() * this.vikingArmy.length);
		//Is viking dead
		let result = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength);
		console.log(this.vikingArmy, this.vikingArmy[viking], viking);
		if (this.vikingArmy[viking].health <= 0) {
			this.vikingArmy.pop();
		}

		return result;
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survive another day...`;
		} else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}
