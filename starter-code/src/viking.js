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

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(name, health, strength);

		this.name = name;
		this.health = health;
		this.strength = strength;
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			console.log(name + " has received " + this.damage + " points of damage");
			return this.name + " has received " + damage + " points of damage";
		} else return this.name + " has died in act of combat";
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
			console.log("A Saxon has received " + damage + " points of damage");
			return "A Saxon has received " + damage + " points of damage";
		} else return "A Saxon has died in combat";
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
		const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
		const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

		let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());

		if (this.saxonArmy[randomSaxon].health <= 0) {
			this.saxonArmy.splice(randomSaxon, 1);
		}

		return result;
	}

	saxonAttack() {
		const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
		const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

		let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());

		if (this.vikingArmy[randomViking].health <= 0) {
			this.vikingArmy.splice(randomViking, 1);
		}

		return result;
	}

	showStatus() {
	
		if (this.vikingArmy.length <= 0) {
			return "Saxons have fought for their lives and survived another day...";
		} else if (this.saxonArmy.length <= 0) {
			return "Vikings have won the war of the century!";
		} else return "Vikings and Saxons are still in the thick of battle.";
	}
}
