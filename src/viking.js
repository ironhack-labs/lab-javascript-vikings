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
		super(health, strength);
		this.name = name;
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
		return "Odin Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return "A Saxon has died in combat";
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
		const firstSaxon = this.saxonArmy[0];
		const firstViking = this.vikingArmy[0];
		const battleResult = firstSaxon.receiveDamage(firstViking.attack());
		if (firstSaxon.health <= 0) {
			this.saxonArmy.shift();
		}
		return battleResult;
	}
	saxonAttack() {
		const firstSaxon = this.saxonArmy[0];
		const firstViking = this.vikingArmy[0];
		const battleResult = firstViking.receiveDamage(firstSaxon.attack());
		if (firstViking.health <= 0) {
			this.vikingArmy.shift();
		}
		return battleResult;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			return "Vikings have won the war of the century!";
		}
		if (this.vikingArmy.length === 0) {
			return "Saxons have fought for their lives and survived another day...";
		}
		if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
			return "Vikings and Saxons are still in the thick of battle.";
		}
	}
}

let viking, saxon, war;

function generateViking() {
	const name = "Harald";
	const strength = 150;
	const health = 300;
	return new Viking(name, health, strength);
}

function generateSaxon() {
	const health = 60;
	const strength = 25;
	return new Saxon(health, strength);
}


//Test code to run the war between vikings and saxons
/* 
viking = generateViking();
saxon = generateSaxon();
war = new War();

// console.log(viking.attack());
// console.log(viking);

// let oldHealth = saxon.health;

war.addViking(viking);
war.addSaxon(saxon);
war.addViking(viking);
war.addSaxon(saxon);
war.addViking(viking);
war.addSaxon(saxon);

console.log(war.saxonArmy);

war.vikingAttack();
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();

console.log(war.saxonArmy);

console.log(war);
 */