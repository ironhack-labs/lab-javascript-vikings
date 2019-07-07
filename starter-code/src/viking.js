// Soldier ==========================================================================================
class Soldier {

    constructor(healthArg, strengthArg) {

        this.health = healthArg
        this.strength = strengthArg
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking ==========================================================================================
class Viking extends Soldier {

    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg)
        this.name = nameArg
    }

    receiveDamage(damage) {

        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }


    }

    battleCry() {
        return "Odin Owns You All!"
    }
}



// Saxon ==========================================================================================
class Saxon extends Soldier {

    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
    }


    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War ==========================================================================================
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }



    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let v = Math.floor(Math.random() * this.vikingArmy.length)
        let s = Math.floor(Math.random() * this.saxonArmy.length)

        let combat = this.saxonArmy[s].receiveDamage(this.vikingArmy[v].strength)

        if (this.saxonArmy[s].health <= 0) {
            this.saxonArmy.splice(s, 1)
        }

        return combat
    }

    saxonAttack() {

        let v = Math.floor(Math.random() * this.vikingArmy.length)
        let s = Math.floor(Math.random() * this.saxonArmy.length)

        let combat = this.vikingArmy[v].receiveDamage(this.saxonArmy[s].strength)

        if (this.vikingArmy[v].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[v])
        }

        return combat
    }

    showStatus() {

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
    }
}


// should return "Vikings have won the war of the century!", if the Saxons array is empty
// should return "Saxons have fought for their lives and survive another day...", if the Vikings array is empty
// should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons

// const ragnar = new Viking('Ragni', 20, 4)

// console.log(`El vikingo ${viking.name} tiene ${viking.health} de vida y ${viking.strength} de fuerza y grita: ${ragnar.battleCry()}`)
// viking.attack()
// viking.receiveDamage(2)
// console.log(`${viking.name} got ${viking.health} life points`)
