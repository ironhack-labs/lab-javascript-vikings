// Soldier
class Soldier {

    constructor(health, strength) {

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

        super(health, strength)
        this.name = name
    }

    attack() {
        
        return this.strength
    }

    receiveDamage(damage) {
        
        this.health -= damage
        if (damage < this.health) {

            const stillAlive = ( `${this.name} has received ${damage} points of damage`)
            return stillAlive
        } else {

            const dead = (`${this.name} has died in act of combat`)
            return dead
        }
    }

    battleCry() {
        
        const battleCry = ('Odin Owns You All!')
        return battleCry 
    }
}


// Saxon
class Saxon extends Soldier {

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

    vikingArmy = []

    saxonArmy = []

    addViking(Viking) {
        
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        
        this.saxonArmy.push(Saxon)
    }


    vikingAttack() {
        
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let damagedSaxon = randomSaxon.receiveDamage(randomViking.strength)

        for (let i = 0; i < this.saxonArmy.length; i++){
            
            if (this.saxonArmy[i].health < 0) {
            this.saxonArmy.splice(i,1)
            }
        }
        
        return damagedSaxon
    }

    saxonAttack() {

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let damagedViking = randomViking.receiveDamage(randomSaxon.strength)
           
        if (damagedViking === `${randomViking.name} has died in act of combat`) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)
            } 
        
        
        return damagedViking
    }

    //  showStatus()
}
