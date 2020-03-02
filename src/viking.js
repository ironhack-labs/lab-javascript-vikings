// Soldier
class Soldier {
    constructor( health, strength ) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage( damage ) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor( name, health, strength ) {
        super( health, strength )
        this.name = name
    }

    receiveDamage( damage ) {
        this.health -= damage
        return this.health != 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier {
    constructor( health, strength ) {
        super( health, strength )
    }

    receiveDamage( damage ) {
        this.health -= damage
        return this.health != 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(qtdViking) {
        this.vikingArmy.push(qtdViking)
        console.log(this.vikingArmy)
    }
    addSaxon(qtdSaxon) {
        this.saxonArmy.push(qtdSaxon)
    }
    vikingAttack() {
        let randomNumberViking = Math.round(Math.random() * this.vikingArmy.length * 10)
        let randomNumberSaxon = Math.round(Math.random() * this.saxonArmy.length * 10)
        console.log(vikingArmy)


        // console.log(randomNumberSaxon)
        // console.log(randomNumberViking)


        let vikingSoldier = this.vikingArmy[randomNumberViking]
        // console.log(vikingSoldier)
        let saxonSoldier = this.saxonArmy[randomNumberSaxon]
        // console.log(saxonSoldier)
        return saxonSoldier.receiveDamage(this.vikingSoldier.strength)
        

        

    }
    saxonAttack() {

    }
    showStatus() {

    }
}

