// Soldier
class Soldier{
        constructor (health, strength){
            this.health = health
            this.strength = strength
    }
    attack = () => {
        return this.strength
    }

    receiveDamage = (damage) => {
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    receiveDamage = (damage) =>{
    //    let currentHealth = this.health -= damage
        return (this.health -= damage) > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage = (damage) => {
        let currentHealth = this.health -= damage
         return currentHealth > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = (vikObj) => {
        this.vikingArmy.push(vikObj)
    }

    addSaxon = (saxonObj) => {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack = () => {
        const vikObj = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const saxObj = this.saxonArmy[randomSaxIndex]

        if (this.vikingArmy.length != 0 && this.saxonArmy.length != 0)
        {
            const returnMsg = saxObj.receiveDamage(vikObj.strength)
            if(saxObj.health <= 0){
                this.saxonArmy.splice(randomSaxIndex, 1)
            }
            return returnMsg
        }
    }
}

