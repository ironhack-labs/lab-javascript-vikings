// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }


    attack() {
        return this.strength;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
    }

}


// Viking

class Viking extends Soldier {



    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(thedamage) {
        this.health -= thedamage
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
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

    attack() {
        return this.strength

    }

    receiveDamage(thedamage) {
        this.health -= thedamage
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// War

class War {

    vikingArmy = []
    saxonArmy = []


    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {

        const viking = Math.floor(Math.random() * vikingArmy.length)
        const saxon = Math.floor(Math.random() * vikingArmy.length)

        const damage = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength)
        if (this.saxonArmy[saxon].health <= 0) {
            this.saxonArmy[splice(saxon, 1)]
        }
        return damage
    }


    saxonAttack() {

        const viking = Math.floor(Math.random() * vikingArmy.length)
        const saxon = Math.floor(Math.random() * vikingArmy.length)

        const damage = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength)
        if (this.vikingArmy[viking].health <= 0) {
            this.vikingArmy[splice(viking, 1)]
        }
        return damage
    }

}