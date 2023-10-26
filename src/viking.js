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
		super(name, health);
		this.name = name;
		this.health = health;
		this.strength = strength;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health === 0) {
			return `${this.name} has died in act of combat`;
		} else {
			return `${this.name} has received ${this.damage} points of damage`;
		}
	}
	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	attack() {
		return this.strength;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health === 0) {
			return `A Saxon has died in combat`;
		} else {
			return `A Saxon has received ${this.damage} points of damage`;
		}
	}
}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}
	addViking(Viking) {
		this.vikingArmy.push(Viking);
	}
	addSaxon(Saxon) {
		this.saxonArmy.push(Saxon);
	}
	// After this point, I used help of chatGPT a lot and I still couldn't figure out how can I actually take an action in this code even though I understand the nature of it.So you can consider my submit until this part. I'll go over it again in the weekend.
	vikingAttack() {
		const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
		const randomSaxon = this.saxonArmy[randomSaxonIndex];
		const randomVikingIndex = Math.floor(
			Math.random() * this.vikingArmy.length
		);
		const randomViking = this.vikingArmy[randomVikingIndex];
		const vikingDamage = randomViking.strength;
		const result = randomSaxon.receiveDamage(vikingDamage);
		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(randomSaxonIndex, 1);
		}

		return result;
	}
	saxonAttack() {
		const randomVikingIndex = Math.floor(
			Math.random() * this.vikingArmy.length
		);
		const randomViking = this.vikingArmy[randomVikingIndex];
		const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
		const randomSaxon = this.saxonArmy[randomSaxonIndex];
		const saxonDamage = randomSaxon.strength;
		const result = randomViking.receiveDamage(saxonDamage);
		if (randomViking.health <= 0) {
			this.vikingArmy.splice(randomVikingIndex, 1);
		}
		return result;
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return 'Vikings have won the war of the century!';
		} else if (this.vikingArmy.length === 0) {
			return 'Saxons have fought for their lives and survived another day...';
		} else if (!this.vikingArmy.length === 0 && !this.saxonArmy.length === 0) {
			return 'Vikings and Saxons are still in the thick of battle.';
		}
	}
}
