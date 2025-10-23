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
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return super.attack()
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
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return super.attack()
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return 'A Saxon has died in combat'
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

    getRandomPlayerViking() {
        return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    }

    getRandomPlayerSaxon() {
        return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }

    vikingRemove() {
        this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0)
    }

    saxonRemove() {
        this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0)
    }

    vikingAttack() {
        const playerVinking = this.getRandomPlayerViking()
        const playerSaxon = this.getRandomPlayerSaxon()
        const resultBattle = playerSaxon.receiveDamage(playerVinking.strength)
        
        this.vikingRemove()
        
        return resultBattle
    }

    saxonAttack() {
        const playerVinking = this.getRandomPlayerViking()
        const playerSaxon = this.getRandomPlayerSaxon()
        const resultBattle = playerVinking.receiveDamage(playerSaxon.strength)
        
        this.saxonRemove()

        return resultBattle
    }
    showStatus() {
        const scoreViking = this.vikingArmy.length
        const scoreSaxon = this.saxonArmy.length

        if (scoreSaxon === 0) {
            return "Vikings have won the war of the century!"
        }

        if (scoreViking === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }

        if (scoreViking > 0 && scoreSaxon > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}