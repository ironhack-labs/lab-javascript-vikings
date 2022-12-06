// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return (`Odin Owns You All!`)
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        
        const saxon = this.saxonArmy[randomSaxon]
        const viking = this.vikingArmy[randomViking]
        
        let damageReceived = saxon.receiveDamage(viking.attack())
        
        if (damageReceived.includes('died')){
            this.saxonArmy.splice(randomSaxon, 1)
        }
        
        return damageReceived
    }
    saxonAttack(){
        const randomSaxon2 = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking2 = Math.floor(Math.random() * this.vikingArmy.length)

        const saxon2 = this.saxonArmy[randomSaxon2]
        const viking2 = this.vikingArmy[randomViking2]

        let damageReceived2 = viking2.receiveDamage(saxon2.attack())

        if (damageReceived2.includes('died')){
            this.vikingArmy.splice(randomViking2, 1)
        }

        return damageReceived2
    }
    showStatus(){
        if (this.vikingArmy.length === 0){
            return (`Saxons have fought for their lives and survived another day...`)
        } else if (this.saxonArmy.length === 0){
            return (`Vikings have won the war of the century!`)
        } else {
            return (`Vikings and Saxons are still in the thick of battle.`)
        }
    }
}