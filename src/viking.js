// Soldier
class Soldier {
    constructor (_health, _strength) {
        this.health = _health
        this.strength = _strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        if( this.health > 0){
            this.health -= damage
        }
    }
}
// Viking
class Viking extends Soldier {
    constructor (_name, _health, _strength) {
        super(_health, _strength)
        this.name = _name
    }
    attack () {
        return this.strength
    }
    receiveDamage (damage) {
        if( this.health > 0){
            this.health -= damage
            if( this.health > 0 ){
                return `${this.name} has received ${damage} points of damage`
            }else if( this.health <= 0 ) {
                return `${this.name} has died in act of combat`
            }
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        if( this.health > 0){
            this.health -= damage
            if( this.health > 0 ){
                return `A Saxon has received ${damage} points of damage`
            }else if( this.health <= 0 ) {
                return `A Saxon has died in combat`
            }
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking (Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack () {
        const randomSaxon = Math.floor(Math.random () * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random () * this.vikingArmy.length)
        if (this.saxonArmy[randomSaxon].health <= this.vikingArmy[randomViking].strength){
            const action = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
            this.saxonArmy.splice(randomSaxon, 1)
            return action
        }else{
            const action = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
            return action 
        }
    }
    saxonAttack () {
        const randomSaxon = Math.floor(Math.random () * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random () * this.vikingArmy.length)
        if (this.vikingArmy[randomViking].health <= this.saxonArmy[randomSaxon].strength){
            const action = this.vikingArmy[randomViking].receiveDamage(this.vikingArmy[randomSaxon].strength)
            this.vikingArmy.splice(randomViking, 1)
            return action
        }else{
            const action = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
            return action 
        }
    }
    showStatus () {
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }else if(this.vikingArmy.length ===0){
            return `Saxons have fought for their lives and survived another day...`
        }else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
