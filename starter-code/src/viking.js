// Soldier
class Soldier {
    
    constructor(health,strength){
        this._health = health
        this._strength = strength
    }

    attack = () => {return this._strength}

    receiveDamage = (damage) => {
        this._health -= damage
    }
}

// Viking
class Viking extends Soldier{
    
    constructor (name,health,strength) {
        super(health,strength)
        this._name = name 
    }

    receiveDamage = (damage) => {
        this._health -= damage

        if (this._health > 0 ){
            return (`${this._name} has recived ${damage} points of damage`)
        }else {
            return (`${this._name} has died in act of combat`)
        }
    }

    battleCry = () => {return `Odin Owns You All!`}

}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage = (damage) => {
        this._health -= damage

        if (this._health > 0 ){
            return (`A Saxon has received ${damage} points of damage points of damage`)
        }else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = (viking) => {
        this.vikingArmy.push(viking)
    }

    addSaxon = (saxon) => {
        this.saxonArmy.push(saxon)
    }

    vikingAttack = () => {
        
        let saxon = this.saxonArmy[Math.random*this.saxonArmy.length]
        let viking = this.vikingArmy[Math.random*this.vikingArmy.length]

        saxon.receiveDamage(viking.attack)
        if (saxon.health <= 0){
            this.saxonArmy.pop
        }

        return saxon.receiveDamage(viking.attack)
    }
    saxonAttack = () => {

        let saxon = this.saxonArmy[Math.random*this.saxonArmy.length]
        let viking = this.vikingArmy[Math.random*this.vikingArmy.length]

        viking.receiveDamage(saxon.attack)
        
        if (viking.health <= 0){
            this.vikingArmy.pop
        }

        return viking.receiveDamage(saxon.attack)

    }

    showStatus = () => {
        if (this.saxonArmy.length <= 0){
            return `"Vikings have won the war of the century!"`
        }else if (this.vikingArmy.length <= 0){
            return `Saxons have fought for their lives and survived another day...`
        }else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
