// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;
	}
}
let soldierExample = new Soldier(10, 20);
console.log(soldierExample);

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super();
		this.name = name;
		this.health = health;
		this.strength = strength;
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		} else if (this.health <= 0) {
			return `${this.name} has died in act of combat`;
		}
	}

	battleCry() {
		return "Odin Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else if (this.health <= 0) {
			return `A Saxon has died in combat`;
		}
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
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}
	vikingAttack() {
		let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
		let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

		if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
			this.saxonArmy[randomSaxon].receiveDamage(
				this.vikingArmy[randomViking].strength
			);
			if (this.saxonArmy[randomSaxon].health <= 0) {
				this.saxonArmy.splice(randomSaxon, 1);
				return "A Saxon has died in combat";
			}
		} else if (this.vikingArmy.length <= 0) {
			return "You have no vikings to attack with!";
		} else if (this.saxonArmy.length <= 0) {
			return "The enemie's saxon army has been decimated. You have no one to attack!";
		} else {
			return "Unexpected error.";
		}
	}
	saxonAttack() {
		let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
		let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

		if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
			this.vikingArmy[randomViking].receiveDamage(
				this.saxonArmy[randomSaxon].strength
			);
			let returnMessage = `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`; // because return cmd stops my method before I can remove the viking and because if he gets removed I wont have access to his name I need to put his in a variable and call it later after this part of the method finishes executing.

			if (this.vikingArmy[randomViking].health <= 0) {
				this.vikingArmy.splice(randomViking, 1);
			}

			return returnMessage; // i'm calling it here (see previous comment)
		} else if (this.saxonArmy.length <= 0) {
			return "You have no vikings to attack with!";
		} else if (this.vikingArmy.length <= 0) {
			return "The enemie's viking army has been decimated. You have no one to attack!";
		} else {
			return "Unexpected error.";
		}
	}
	showStatus() {
		if (this.vikingArmy.length === 0) {
			return "Saxons have fought for their lives and survived another day...";
		} else if (this.saxonArmy.length === 0) {
			return "Vikings have won the war of the century!";
		} else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
			return "Vikings and Saxons are still in the thick of battle.";
		} else {
			return "Unexpected error.";
		}
	}
}
