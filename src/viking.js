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
        this.health -= damage;
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

        if(this.health > 0){
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
    receiveDamage(damage){
        this.health -= damage

        if(this.health > 0 ){
            return `A Saxon has received ${damage} points of damage`
        } else {
           return  "A Saxon has died in combat"
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
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    
    vikingAttack(){
        if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
            return null
        }

        let vikingIndex = Math.floor(Math.random * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random * this.saxonArmy.length)

        let viking = this.vikingArmy[vikingIndex]
        let saxon = this.saxonArmy[saxonIndex]

        return saxon.receiveDamage(viking.strength)
    }
    saxonAttack(){
        
    }
    showStatus(){}
}
