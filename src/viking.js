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
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }

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

    // refactor

    genericAttack(attackingArmy, defendingArmy) {
        const randomDefendingIndex = Math.floor(Math.random() * defendingArmy.length)
        const randomAttacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)]

        const result = defendingArmy[randomDefendingIndex].receiveDamage(randomAttacker.attack())

        if (defendingArmy[randomDefendingIndex].health <= 0) {
            defendingArmy.splice(randomDefendingIndex, 1)

        }
        return result

    }
    vikingAttack() {

        return this.genericAttack(this.vikingArmy, this.saxonArmy)
    }

    saxonAttack() {

        return this.genericAttack(this.saxonArmy, this.vikingArmy)
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}

const war = new War()

const viking1 = new Viking('ragnar', 100, 70)
const viking2 = new Viking('loki', 60, 40)
const viking3 = new Viking('rollo', 80, 100)

const saxon1 = new Saxon(30, 30)
const saxon2 = new Saxon(100, 30)
const saxon3 = new Saxon(50, 30)

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addSaxon(saxon1);
war.addSaxon(saxon2)
war.addSaxon(saxon3)

console.log("War Starts!!!!")

//5 rondas

for (let i = 0; i < 5; i++) {
    if (war.saxonArmy.length === 0 || war.vikingArmy.length === 0) {

        break
    }
    console.log(`Round ${i + 1}:`)

    const vikingAttackResult = war.vikingAttack()
    console.log(`Viking attack: ${vikingAttackResult}`)

    if (war.saxonArmy.length === 0 || war.vikingArmy.length === 0) {

        break
    }

    const saxonAttackResult = war.saxonAttack()
    console.log(`Saxon Attack: ${saxonAttackResult}`)

    console.log(war.showStatus())
    console.log("-----------------------")
}

console.log(war.showStatus())
