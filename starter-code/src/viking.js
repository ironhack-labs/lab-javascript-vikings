// Soldier
function Soldier(healthArg, strengthArg) {
	this.health = healthArg,
	this.strength = strengthArg,
	this.receiveDamage = function (healthArg) {
			this.health -= healthArg
		},
	this.attack = function attack() {
		return this.strength 
	}
}

 
Soldier.prototype.receiveDamage = function(damageArg) {
	damageArg.receiveDamage()
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

function Viking(nameArg, healthArg, strengthArg) {
	Soldier.call(this, healthArg, strengthArg),
	this.name = nameArg
	this.receiveDamage = function (damageArg) {
		this.health -= damageArg

		if(this.health !== 0 ) {
			return `${this.name} has received ${damageArg} points of damage`
		} else {
			return `${this.name} has died in act of combat`
		}
		
	}
	this.battleCry = function() {
		return `Odin Owns You All!`
	}
}


Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

function Saxon(healthArg, strengthArg) {
	Soldier.call(this, healthArg, strengthArg)
	this.receiveDamage = function (damageArg) {
		this.health -= damageArg

		if(this.health !== 0 ) {
			return `A Saxon has received ${damageArg} points of damage`
		} else {
			return `A Saxon has died in combat`
		}
	}
}

// War
function War() {
	this.vikingArmy = []
	this.saxonArmy = []
	this.addViking = function(vikingObj){
		this.vikingArmy  = vikingArmy.push(vikingObj)
	},
	this.addSaxon = function(saxonObj){
		this.army  = saxonArmy.push(saxonObj)
	},
	this.vikingAttack = function(){

	},
	this.saxonAttack = function(){

	},
	this.showStatus = function(){

	}

}