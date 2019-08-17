// Soldier
function Soldier(healthArg, strengthArg) {
	this.health = healthArg
	this.strength = strengthArg,
		this.receiveDamage = function (healthArg) {
			this.health -= healthArg
		},
		this.attack = function attack() {
			return this.strength
		}
}

Viking.prototype = Object.create(Soldier.prototype)


// Viking
function Viking(nameArg, healthArg, strengthArg) {
	Soldier.call(this, healthArg, strengthArg)
	this.name = nameArg
	this.attack = function () {
		return this.strength
	}
	this.receiveDamage = function (damageArg) {
		this.health -= damageArg

		if (this.health !== 0) {
			return `${this.name} has received ${damageArg} points of damage`
		} else {
			return `${this.name} has died in act of combat`
		}

	}
	this.battleCry = function () {
		return `Odin Owns You All!`
	}
}


Saxon.prototype = Object.create(Soldier.prototype)

function Saxon(healthArg, strengthArg) {
	Soldier.call(this, healthArg, strengthArg)
	this.receiveDamage = function (damageArg) {
		this.health -= damageArg

		if (this.health !== 0) {
			return `A Saxon has received ${damageArg} points of damage`
		} else {
			return `A Saxon has died in combat`
		}
	}
}

// War
function War() {
	this.saxonArmy = new Array()
	this.vikingArmy = new Array()
	this.addViking = function (vikingArg) {
		this.vikingArmy.push(vikingArg)
	}
	this.addSaxon = function (saxonArg) {
		this.saxonArmy.push(saxonArg)
	}
	this.vikingAttack = function () {
		let damageReceived = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
		if (this.saxonArmy[0].health <= 0) {
			this.saxonArmy.shift()
		}
		return damageReceived
	}
	this.saxonAttack = function () {
		let damageReceived = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
		if (this.vikingArmy[0].health <= 0) {
			this.vikingArmy.shift()
		}
		return damageReceived
	}
	this.showStatus = function () {
		if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
			return ("Vikings and Saxons are still in the thick of battle.")
		} else if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
			return ("Vikings have won the war of the century!")
		} else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
			return ("Saxons have fought for their lives and survive another day...")
		}
	}
}