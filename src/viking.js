// Soldier
class Soldier {

    constructor(health, strength) {
        this.nameHealth = health
        this.nameStrenght = strength
    }

    attack() {
        return this.nameStrenght

    }
    receiveDamage(thedamage) {
        return
    }

}

const soldier1 = new Soldier("alive", 10)

console.log("el soldado esta", soldier1.nameHealth)

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.nameLabel = name
    }
    receiveDamage() {
        return this.nameStrenght
    }

    battleCry() {
        return "Odin Owns You All!"
    }


}



const viking1 = new Viking("die", 102)



// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }


}

// War
class War {


}

