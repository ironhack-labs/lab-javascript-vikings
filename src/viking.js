const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min

// Soldier
class Soldier {
    constructor (health, strength) {
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
        super()
        this.name = name
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
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

    attack(dealerArmy, recieverArmy) {
        randomDealerIndex = randomNum(0, dealerArmy.length)
        randomReceiverIndex = randomNum(0, receiverArmy.length)
        randomDealer = dealerArmy[randomDealerIndex]
        randomReceiver = receiverArmy[randomReceiverIndex]
        const message = randomReceiver.receiveDamage(randomDealer.strength)
        if (randomReceiver.health <= 0) {
            recieverArmy.splice(randomReceiverIndex, 1)
        }
        return message
    }

    vikingAttack() {
        // This could be optimized in one single function:
        // this.attack(this.vikingArmy, this.saxonArmy)
        const randomSaxonIndex = randomNum(0, this.saxonArmy.length)
        const randomVikingIndex = randomNum(0, this.vikingArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const randomViking = this.vikingArmy[randomVikingIndex]
        const message = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return message
    }
    
    saxonAttack() {
        // This could be optimized in one single function:
        // this.attack(this.saxonArmy, this.vikingArmy)
        const randomVikingIndex = randomNum(0, this.vikingArmy.length)
        const randomSaxonIndex = randomNum(0, this.saxonArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex]
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const message = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return message
    }
    
    showStatus() {
        return `There are ${this.vikingArmy.length} vikings left: ${this.vikingArmy}\n
        and ${this.saxonArmy.length} saxons left: ${this.saxonArmy}`
    }

    // Battle continues until one of the sides is totally defeated
    deathMatch(numberOfSoldiers) {
        for (let i=0; i<numberOfSoldiers; i++) {
          this.addViking(new Viking('asdf', randomNum(10, 10), randomNum(10, 10)))
          this.addSaxon(new Saxon(randomNum(10, 10), randomNum(10, 10)))
        }
        while (true) {
          if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) break
          if (randomNum(1, 3) === 1) { this.vikingAttack() } else { this.saxonAttack() }
        }
        if (this.vikingArmy.length === 0) {
          return `There are ${numberOfSoldiers} vikings and ${numberOfSoldiers} saxons on the battlefield!\nThe saxons win with ${this.saxonArmy.length} survivors!`
        } else {
          return `There are ${numberOfSoldiers} vikings and ${numberOfSoldiers} saxons on the battlefield!\nThe vikings win with ${this.vikingArmy.length} survivors!`
        }
      }
}
