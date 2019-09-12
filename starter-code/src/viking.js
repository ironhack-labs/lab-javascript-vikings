// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength) 
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let randomViking = randomNumber(this.vikingArmy.length)
        let randomSaxon = randomNumber(this.saxonArmy.length)
        let result = this.saxonArmy[randomSaxon]
        .receiveDamage(this.vikingArmy[randomViking].strength)
        if(this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon,1)
        }

        return result
    }

    saxonAttack(){
        let randomViking = randomNumber(this.vikingArmy.length)
        let randomSaxon = randomNumber(this.saxonArmy.length)
        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if(this.vikingArmy[randomViking].health <= 0){
            this.vikingArmy.splice(randomViking,1)
        }

        return result;
    }

    showStatus() {
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
        if(!this.vikingArmy.length) return "Saxons have fought for their lives and survive another day..."
        return "Vikings and Saxons are still in the thick of battle."
    }
}

const randomNumber = len => Math.floor(Math.random() * len)
