// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(dmg) {
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(dmg) {
        this.health -= dmg
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(dmg) {
        this.health -= dmg
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
        this.randomSax
        this.randomVik

    }

    addViking(vikObj) {
        this.vikingArmy.push(vikObj)
    }

    addSaxon(saxObj) {
        this.saxonArmy.push(saxObj)
    }

    vikingAttack() {


        this.randomVik = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
        this.randomSax = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]

        this.randomSax.receiveDamage(this.randomVik.strength)
        if (this.randomSax.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(this.randomSax), 1)
            return `A Saxon has died in combat`
        }

    }
    saxonAttack() {

        this.randomVik = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
        this.randomSax = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]

        console.log(this.randomVik.name)
        console.log(this.randomSax.dmg)

        this.randomVik.receiveDamage(this.randomSax.strength)
        if (this.randomVik.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(this.randomvik), 1)
        }
        return `${this.randomVik.name} has received ${this.randomSax.strength} points of damage`
    }
    showStatus() {
        if (this.vikingArmy.length <= 0)
            return "Vikings have won the war of the century!"
        else if (this.saxonArmy.length <= 0)
            return "Saxons have fought for their lives and survive another day..."
        else
            return "Vikings and Saxons are still in the thick of battle."
    }
}

var war = new War

for (let i = 0; i < 10; i++) {
    war.addViking(new Viking("vik" + i, 50, 100))
    war.addSaxon(new Saxon(50, 100))

}


