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

		const isAlive = this.health > 0;

		return isAlive
			? `${this.name} has received ${damage} points of damage`
			: `${this.name} has died in act of combat`;
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;

		const isAlive = this.health > 0;

		return isAlive
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
		const randomSaxonIndex = this.#randomSoldierIndexFrom(this.saxonArmy);
		const randomVikingIndex = this.#randomSoldierIndexFrom(this.vikingArmy);

		const randomSaxon = this.saxonArmy[randomSaxonIndex];
		const randomViking = this.vikingArmy[randomVikingIndex];

		const battleResult = randomSaxon.receiveDamage(randomViking.strength);

		if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxonIndex, 1);

		console.table(this.saxonArmy);
		console.table(this.vikingArmy);

		return battleResult;
	}

	saxonAttack() {
		const randomSaxonIndex = this.#randomSoldierIndexFrom(this.saxonArmy);
		const randomVikingIndex = this.#randomSoldierIndexFrom(this.vikingArmy);

		const randomSaxon = this.saxonArmy[randomSaxonIndex];
		const randomViking = this.vikingArmy[randomVikingIndex];

		const battleResult = randomViking.receiveDamage(randomSaxon.strength);

		if (randomViking.health <= 0) this.vikingArmy.splice(randomVikingIndex, 1);

		console.table(this.saxonArmy);
		console.table(this.vikingArmy);

		return battleResult;
	}

	// this makes vikingAttack() and saxonAttack() obsolete
	// they are kept so the tests wouldn't break
	attackBy(attacker) {
		let attackerArmy = this.vikingArmy;
		let defenderArmy = this.saxonArmy;

		switch (attacker) {
			case 'viking':
				attackerArmy = this.vikingArmy;
				defenderArmy = this.saxonArmy;
				break;

			case 'saxon':
				attackerArmy = this.saxonArmy;
				defenderArmy = this.vikingArmy;
				break;

			// default values handled during initialisation
		}

		const randomAttackerIndex = this.#randomSoldierIndexFrom(attackerArmy);
		const randomDefenderIndex = this.#randomSoldierIndexFrom(defenderArmy);

		const randomAttacker = attackerArmy[randomAttackerIndex];
		const randomDefender = defenderArmy[randomDefenderIndex];

		const battleResult = randomDefender.receiveDamage(randomAttacker.strength);

		if (randomDefender.health <= 0) defenderArmy.splice(randomDefenderIndex, 1);

		console.table(attackerArmy);
		console.table(defenderArmy);

		return battleResult;
	}

	showStatus() {
		let statusText = '';

		if (this.vikingArmy.length && this.saxonArmy.length) {
			statusText = 'Vikings and Saxons are still in the thick of battle.';
		} else if (!this.saxonArmy.length) {
			statusText = 'Vikings have won the war of the century!';
		} else if (!this.vikingArmy.length) {
			statusText =
				'Saxons have fought for their lives and survived another day...';
		}

		return statusText;
	}

	#randomSoldierIndexFrom(army) {
		return Math.floor(Math.random() * army.length);
	}
}

// TEST & DEBUGGING
const ragnar = new Viking('Ragnar', 100, 20);
const saxon = new Saxon(30, 10);
const bigSaxon = new Saxon(40, 15);
const war = new War();

war.addSaxon(saxon);
war.addSaxon(bigSaxon);
war.addViking(ragnar);

console.table(war.saxonArmy);
console.table(war.vikingArmy);

console.log('1st attack');
console.log(war.attackBy('viking'));

console.log('2nd attack');
console.log(war.attackBy('saxon'));

console.log('3rd attack');
console.log(war.attackBy('viking'));

console.log('3rd attack');
console.log(war.attackBy('viking'));
console.log(war.showStatus());

console.log('4th attack');
console.log(war.attackBy('viking'));
console.log(war.showStatus());
