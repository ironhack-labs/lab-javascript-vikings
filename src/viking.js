// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	attack = () => this.strength;
	receiveDamage(damage) {
		this.health -= damage;
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
		return this.health > 0
			? `${this.name} has received ${damage} points of damage`
			: `${this.name} has died in act of combat`;
	}
	battleCry = () => `Odin Owns You All!`;
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;
		return this.health > 0
			? `A Saxon has received ${damage} points of damage`
			: `A Saxon has died in combat`;
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
		return this.armyAttack('Viking');
	}
	saxonAttack() {
		return this.armyAttack('Saxon');
	}
	armyAttack(attacker) {
		let indexDefender;
		let randomDefender;
		let randomAttacker;

		switch(attacker){
			case 'Viking':
				indexDefender = Math.floor(Math.random() * this.saxonArmy.length);
				randomDefender = this.saxonArmy[indexDefender];
				randomAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
				break;
			case 'Saxon':
				indexDefender = Math.floor(Math.random() * this.vikingArmy.length);
				randomDefender = this.vikingArmy[indexDefender];
				randomAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
				break;
		}
		let output = randomDefender.receiveDamage(randomAttacker.strength);

		if (randomDefender.health <= 0) {
			(attacker === 'Viking') ? this.saxonArmy.splice(indexDefender, 1) :	this.vikingArmy.splice(indexDefender, 1);
		}
		return output;
	}
	showStatus() {
		if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
			return "Vikings and Saxons are still in the thick of battle.";
		}
		if (this.vikingArmy.length === 0) {
			return "Saxons have fought for their lives and survived another day...";
		}
		if (this.saxonArmy.length === 0) {
			return "Vikings have won the war of the century!";
		}
	}
}
