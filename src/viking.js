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
		return this.damage;
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

	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
	}

	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
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
		let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
		let randomVikingIndex = getRandomInt(this.vikingArmy.length);
		let randomSaxon = this.saxonArmy[randomSaxonIndex];
		let randomViking = this.vikingArmy[randomVikingIndex];
		// console.log(randomViking);
		// console.log(randomSaxon);

		let damage = randomViking.attack();
		let message = randomSaxon.receiveDamage(damage);

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(randomSaxonIndex, 1);
		}
		return message;
	}

	saxonAttack() {
		// same que vikingAttack
		let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
		let randomVikingIndex = getRandomInt(this.vikingArmy.length);
		let randomSaxon = this.saxonArmy[randomSaxonIndex];
		let randomViking = this.vikingArmy[randomVikingIndex];
		// console.log(randomViking);
		// console.log(randomSaxon);

		let damage = randomSaxon.attack();
		let message = randomViking.receiveDamage(damage);

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(randomVikingIndex, 1);
		}
		return message;
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return 'Vikings have won the war of the century';
		} else if (this.vikingArmy.length === 0) {
			return 'Vikings have fought for their lives and survived another day';
		} else {
			return 'Vikings and Saxons are still in the thick of battle.';
		}
	}
}

// Retourne un nombre aleatoire entre 0 et "max"
function getRandomInt(max) {
	return Math.floor(math.random() * max);
}
