// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health
		this.strength = strength
	}
	attack() {
		return this.strength
	}
	receiveDamage(damage) {
		this.health -= damage
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength)
		this.name = name
	}

	receiveDamage(damage) {
		this.health -= damage
		return this.health > 0
			? `${this.name} has received ${damage} points of damage`
			: `${this.name} has died in act of combat`
	}
	battleCry() {
		return 'Odin Owns You All!'
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage
		return this.health > 0
			? `A Saxon has received ${damage} points of damage`
			: 'A Saxon has died in combat'
	}
}

// War
class War {
	constructor() {
		this.vikingArmy = []
		this.saxonArmy = []
	}
	addViking(viking) {
		this.vikingArmy.push(viking)
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon)
	}
	vikingAttack() {
		const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
		const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
		const strength = this.vikingArmy[vikingIndex].strength
		const attack = this.saxonArmy[saxonIndex].receiveDamage(strength)
		if (attack === 'A Saxon has died in combat') {
			this.saxonArmy.splice(saxonIndex, 1)
		}

		return attack
	}
	saxonAttack() {
		const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
		const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
		const strength = this.saxonArmy[saxonIndex].strength
		const viking = this.vikingArmy[vikingIndex]
		const attack = viking.receiveDamage(strength)
		if (attack === `${viking.name} has died in act of combat`) {
			this.vikingArmy.splice(vikingIndex, 1)
		}
		return attack
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return 'Vikings have won the war of the century!'
		} else if (this.vikingArmy.length === 0) {
			return 'Saxons have fought for their lives and survived another day...'
		} else {
			return 'Vikings and Saxons are still in the thick of battle.'
		}
	}
}
