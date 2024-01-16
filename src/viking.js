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
		this.health = this.health - damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}
	receiveDamage(damage) {
		this.health = this.health - damage;
		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		}
		return `${this.name} has died in act of combat`;
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
	receiveDamage(damage) {
		this.health = this.health - damage;
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
	addViking(vikings) {
		this.vikingArmy.push(vikings);
	}
	addSaxon(saxons) {
		this.saxonArmy.push(saxons);
	}
	vikingAttack() {
		const viking = this.vikingArmy[0];
		const saxon = this.saxonArmy[0];
		const message = saxon.receiveDamage(viking.strength);
		this.saxonArmy = this.saxonArmy.filter((el) => el.health > 0);
		return message;
		// return showStatus();
	}
	saxonAttack() {
		const viking = this.vikingArmy[0];
		const saxon = this.saxonArmy[0];
		const message = viking.receiveDamage(saxon.strength);
		this.vikingArmy = this.vikingArmy.filter((el) => el.health > 0);
		return message;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			this.vikingArmy = this.vikingArmy.filter((el) => el.health > 0);
			return 'Vikings have won the war of the century!';
		} else if (this.vikingArmy.length === 0) {
		this.saxonArmy = this.vikingArmy.filter((el) => el.health > 0);
			return 'Saxons have fought for their lives and survived another day...';
		} else {
			return 'Vikings and Saxons are still in the thick of battle.';
		}
		// 	const viking = this.vikingArmy;
		// 	const saxon = this.saxonArmy;
		// 	const message = saxon.receiveDamage(viking.strength);
		// 	console.log(this.vikingAttack());
		// 	if (saxon === this.saxonArmy) {
		// 		this.saxonAttack();
		// 		viking.receiveDamage(saxon.strength);
		// 		// this.saxonArmy = this.saxonArmy.filter((el) => el.health > 0);
		// 		return 'Vikings have won the war of the century!';
		// 	} else if (viking === this.vikingArmy) {
		// 		this.vikingAttack();
		// 		// this.vikingArmy = this.vikingArmy.filter((el) => el.health > 0);
		// 		return 'Saxons have fought for their lives and survived another day...';
		// 	}
		// 	return 'Vikings and Saxons are still in the thick of battle.';
		// }
	}
}
