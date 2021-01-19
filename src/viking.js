// Soldier
class Soldier {
    constructor(health, strength){
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
    constructor(name, health, stregnth){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0) {
            return `${this.name} has received DAMAGE points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Solder {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return "A Saxon has received DAMAGE points of damage"
        } else if (this.health <= 0) {
            return "A Saxon has died in combat"
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
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
        const randomSaxon = this.saxonArmy[Math.florr(Math.random() * (this.saxonArmy.length - 1))]
        randomSaxon.receiveDamage(randomViking.strength)
        if(randomSaxon.health <= 0) {
            delete randomSaxon
        }
    
    }
    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
        const randomSaxon = this.saxonArmy[Math.florr(Math.random() * (this.saxonArmy.length - 1))]
        randomViking.receiveDamage(randomSaxon.strength)
        if(randomViking.health <= 0) {
            delete randomViking
        }
    }
    showStatus()
}
