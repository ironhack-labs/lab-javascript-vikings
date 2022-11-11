// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health
		this.strength = strength
	}
	attack() {
		return this.strength
	}

	receiveDamage(theDamage) {
		this.health = this.health - theDamage
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength)
		this.name = name
		this.health = health
		this.strength = strength
	}

	receiveDamage(theDamage) {
		this.health = this.health - theDamage
		if (this.health !== 0) {
			return `${this.name} has received ${theDamage} points of damage`
		} else return `${this.name} has died in act of combat`
	}

	battleCry() {
		return "Odin Owns You All!"
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(theDamage) {
		this.health = this.health - theDamage
		if (this.health !== 0) {
			return `A Saxon has received ${theDamage} points of damage`
		} else return `A Saxon has died in combat`
	}
}

// War
class War {
	constructor(vikingArmy = [], saxonArmy = []) {
		this.vikingArmy = vikingArmy
		this.saxonArmy = saxonArmy
	}

	addViking(Viking) {
		this.vikingArmy.push(Viking)
	}
	addSaxon(Saxon) {
		this.saxonArmy.push(Saxon)
	}
	vikingAttack() {
		const randomNum = Math.floor(Math.random() * this.saxonArmy.length)
		const randomSaxon = this.saxonArmy[randomNum]
		const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
		const randomDamage = randomSaxon.receiveDamage(randomViking.strength)
		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(this.saxonArmy[randomNum])
		}
		return randomDamage
	}
	saxonAttack() {
    const randomNum = Math.floor(Math.random() * this.vikingArmy.length)
		const randomViking = this.vikingArmy[randomNum]
		const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
		const randomDamage = randomViking.receiveDamage(randomSaxon.strength)
		if (randomViking.health <= 0) {
			this.vikingArmy.splice(this.vikingArmy[randomNum])
		}
		return randomDamage
    
  }

	showStatus() {
    if (this.saxonArmy = []) {
      return 'Vikings have won the war of the century!'
    }
    else if (this.vikingArmy = []) {
      return 'Saxons have fought for their lives and survived another day...'
    }
    else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
