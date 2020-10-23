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
class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
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
    
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        
        if(this.saxonArmy[randomSaxon].health <= this.vikingArmy[randomViking].strength){
            const action = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
            this.saxonArmy.splice(randomSaxon, 1)
            return action
        } else {
            return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        }  
    }

    saxonAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)

        if(this.vikingArmy[randomViking].health<=this.saxonArmy[randomSaxon].strength){
            const action = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
            this.vikingArmy.splice(randomViking, 1)
            return action
        } else {
            return this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        }
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!'
        }else if(this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
