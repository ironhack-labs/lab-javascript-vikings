// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) {
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


    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received DAMAGE points of damage`
        } else if (this.health <= 0) {
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
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        //TRABAJANDO AQUÍ JFK console.log(Saxon[randomSaxon]) //.receiveDamage(Viking[randomViking].strength)

    }

}


const theWar = new War();

// ARMY OF VIKINGS
theWar.addViking('Wakanda', 100, 60)
theWar.addViking('Kily', 100, 60)
theWar.addViking('Mucmad', 100, 60)
theWar.addViking('Wassa', 100, 60)

//ARMY OF SAXONS
theWar.addSaxon(200, 30)
theWar.addSaxon(200, 30)
theWar.addSaxon(200, 30)
theWar.addSaxon(200, 30)

console.log(theWar)
