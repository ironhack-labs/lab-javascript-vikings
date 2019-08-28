// Soldier
class Soldier {
    constructor(health, strength, ) {
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
        super(health, strength);
        this.name = name;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        console.log(this.health)
        this.health -= damage;
        console.log(this.health)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
        super(health, strength);
    }
    attack() {
        return this.strength
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
    addViking(Viking) {
        this.vikingArmy.push(Viking)
            // console.log(this.vikingArmy)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
            // console.log(this.saxonArmy)

    }
    vikingAttack() {



        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        this.randomSaxon.receiveDamage(this.randomViking.strength)
            // console.log(damage)

        // Saxon.receiveDamage(Viking.strength);

    }

}