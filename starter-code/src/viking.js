// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
       return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        // if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        // if the Viking dies, it should return "NAME has died in act of combat"
        else return `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    
    attack() {
        return this.strength
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let result =  randomSaxon.receiveDamage(randomViking.strength)        
        if (randomSaxon.health <= 0) this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)      

        return result
    }
    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)

        return result

    }
    showStatus(){
        // if the Saxon array is empty
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        // if the Viking array is empty
        else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
        // if there are at least 1 Viking and 1 Saxon
        else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
    }

}
